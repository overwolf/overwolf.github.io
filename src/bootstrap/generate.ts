import fs from 'fs';
import paths from '../utils/paths';
import docsGenerator from './docs';

export type FileEntry = {
  path: string;
  content: string;
};

const RegisterFile = (filePath: string, content: string, fileType: string) => {
  const localPath = `${paths.relative(paths.RootPath, filePath)}.${fileType}`;
  console.log(`Registered File: \`${localPath}\``);
  const dirName = paths.dirname(localPath);
  if (!fs.existsSync(dirName)) fs.mkdirSync(paths.dirname(localPath));
  fs.writeFileSync(localPath, content);
  return localPath;
};

export type ContentGenerator = (register: typeof RegisterFile) => string[];

function generateCategory(
  rootPath: string,
  fileType: string,
  files: FileEntry[],
): ContentGenerator {
  return (register) =>
    files.map((file) =>
      register(paths.join(rootPath, file.path), file.content, fileType),
    );
}

export type GeneratedCategory = Parameters<typeof generateCategory>;

export function GeneratePages() {
  const cleanup = ([docsGenerator] as GeneratedCategory[]).flatMap(
    (generator) => generateCategory(...generator)(RegisterFile),
  );

  return cleanup;
}
