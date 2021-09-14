import fs from 'fs';
import ts, {
  Identifier, isInterfaceDeclaration, TypeNode, isTypeReferenceNode, isPropertySignature,
} from 'typescript';

import { Property, DocInterface } from './types';
import getConfig from './getConfig';
import ExternalType from './ExternalType';
import InternalType from './InternalType';

const typeFactory = (type: TypeNode) => (isTypeReferenceNode(type)
  ? new ExternalType(type)
  : new InternalType(type));

const parse = () => {
  const { path } = getConfig();

  const node = ts.createSourceFile(
    '',
    fs.readFileSync(path, 'utf8'),
    ts.ScriptTarget.Latest,
  );

  const ret: DocInterface[] = [];

  node.forEachChild((child) => {
    if (isInterfaceDeclaration(child)) {
      const properties = child.members.reduce<Property[]>(
        // @ts-ignore
        (acc, cur) => {
          if (isPropertySignature(cur)) {
            const { type, name, questionToken } = cur;

            return (
              [...acc, {
                name: (name as Identifier).escapedText,
                type: typeFactory(type!).getString(),
                optional: !!questionToken,
              }]
            );
          }

          return acc;
        }, [],
      ) as unknown as Property[];

      ret.push({
        name: child.name.escapedText as string,
        properties,
      });
    }
  });

  return ret;
};

export default parse;
