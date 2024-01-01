import path from 'path';

const RootPath = path.resolve('');

export default {
  RootPath,
  ProjectPath: path.join(RootPath, '../'),
  PagesPath: (root: string, ...extra: string[]) =>
    path.join(root, 'pages', ...extra),
  SrcPath: (root: string, ...extra: string[]) =>
    path.join(root, 'src', ...extra),
  StaticPath: (root: string, ...extra: string[]) =>
    path.join(root, 'static', ...extra),
  CompiledPath: (root: string, ...extra: string[]) =>
    path.join(root, 'lib', ...extra),
  join: path.join,
  relative: path.relative,
  sep: path.sep,
  conditionalJoin: (conditional: boolean, prefix: string, suffix: string) =>
    conditional ? path.join(prefix, suffix) : suffix,
  dirname: path.dirname,
};
