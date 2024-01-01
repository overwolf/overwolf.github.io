import fs from 'fs';
import paths from '../utils/paths';

const path = paths.join(paths.RootPath, '.gitignore');
const generatedDelimiter =
  '### Auto-generated (DO NOT PUT ANYTHING BELOW THIS) ###';
const template = (base: string, generated: string) =>
  // eslint-disable-next-line prettier/prettier
`${base}${generatedDelimiter}

${generated}`;

const splitIgnore = () => {
  const gitIgnore = fs.readFileSync(path, 'utf-8');

  const split = gitIgnore.split(generatedDelimiter);
  if (split.length !== 2) throw new Error('Invalid root .gitignore file!');
  return split;
};

const clearFiles = (filePaths: string[], ignoreMissing = true) => {
  filePaths
    .map((path) => path.replaceAll('\\', paths.sep))
    .forEach((path) => {
      if (!fs.existsSync(path)) {
        if (!ignoreMissing) return console.warn(`File not found! \`${path}\``);
        return console.log(`File not found: \`${path}\``);
      }

      fs.rmSync(path);
      console.log(`File cleared: \`${path}\``);
    });
};

const Sync = (ignoreMissing = true) => {
  const split = splitIgnore();
  clearFiles(
    split[1].split('\n').filter((path) => path),
    ignoreMissing,
  );
  return (generated: string[]) =>
    fs.writeFileSync(
      path,
      template(split[0], generated.join('\n').replaceAll(paths.sep, '/')),
      'utf-8',
    );
};

export const Clear = () => {
  Sync(false);
};

export default Sync;
