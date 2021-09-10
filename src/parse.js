import fs from 'fs';
import ts from 'typescript';

import ExternalType from './ExternalType';
import InternalType from './InternalType';

const isInternalType = (type) => ts.SyntaxKind[type.kind] !== 'TypeReference';

const typeFactory = (type) => (isInternalType(type)
  ? new InternalType(type)
  : new ExternalType(type));

const parse = () => {
  const node = ts.createSourceFile(
    'app.ts',
    fs.readFileSync('./testData/interface.ts', 'utf8'),
    ts.ScriptTarget.Latest,
  );

  const ret = [];

  node.forEachChild((child) => {
    if (ts.SyntaxKind[child.kind] === 'InterfaceDeclaration') {
      const properties = child.members.reduce(
        (acc, { type, name, questionToken }) => [...acc, {
          name: name.escapedText,
          type: typeFactory(type).getString(),
          optional: !!questionToken,
        }], [],
      );

      ret.push({
        name: child.name.escapedText,
        properties,
      });
    }
  });

  return ret;
};

export default parse;
