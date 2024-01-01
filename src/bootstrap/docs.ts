import paths from '../utils/paths';
import changelogsFiles from './docs/changelogs';
import statusFiles from './docs/status';
import { GeneratedCategory } from './generate';

const docsGenerator: GeneratedCategory = [
  paths.PagesPath(paths.RootPath),
  'mdx',
  [...statusFiles, ...changelogsFiles],
];

export default docsGenerator;
