import fs from 'fs';
import ts from 'typescript';

const parse = () => {
  const node = ts.createSourceFile(
    'app.ts',
    fs.readFileSync('./testData/interface.ts', 'utf8'),
    ts.ScriptTarget.Latest,
  );

  const ret = [];

  node.forEachChild((child) => {
    if (ts.SyntaxKind[child.kind] === 'InterfaceDeclaration') {
      ret.push({
        name: child.name.escapedText,
        properties: child.members.map((property) => property.name.escapedText)
      })
    }
  });

  return ret;
};

export default parse
