import ts, { Identifier, InterfaceDeclaration, PropertySignature, TypeNode } from 'typescript';

import ExternalType from './ExternalType';
import InternalType from './InternalType';
import { Property, Props } from './types';
import fs from 'fs';
import getConfig from './getConfig';

const isInternalType = (type: TypeNode) => ts.SyntaxKind[type.kind] !== 'TypeReference';

const typeFactory = (type: TypeNode) => (isInternalType(type)
  ? new InternalType(type)
  : new ExternalType(type));

const parse = () => {
  const { path } = getConfig();

  const node = ts.createSourceFile(
    '',
    fs.readFileSync(path, 'utf8'),
    ts.ScriptTarget.Latest,
  );

  const ret: Props[] = [];

  node.forEachChild((child) => {
    if (ts.SyntaxKind[child.kind] === 'InterfaceDeclaration') {
      const properties = (child as InterfaceDeclaration).members.reduce<Property[]>(
        // @ts-ignore
        (acc, cur) => {
          const { type, name, questionToken } = cur as PropertySignature;
          return (
            [...acc, {
              name: (name as Identifier).escapedText,
              type: typeFactory(type!).getString(),
              optional: !!questionToken,
            }]
          )
        }, [],
      ) as unknown as Property[];

      ret.push({
        name: (child as InterfaceDeclaration).name.escapedText as string,
        properties,
      });
    }
  });

  return ret;
};

export default parse;

