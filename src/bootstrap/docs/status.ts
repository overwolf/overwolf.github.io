import games from '../../config/games-metadata';
import { FileEntry } from '../generate';
import paths from '../../utils/paths';
import tags from '../seo/games';
import seo from '../templates/seo';
import statusTemplate from '../templates/status';
import replacer from '../templates/replacer';
import statusAllTemplate from '../templates/status-all';

const statusPath = 'status';

const tagsString = tags.map((tag) => tag.replaceAll(/[^\w ]/gm, '')).join(', ');
const seoTemplate = replacer(seo, [['$seotags', tagsString]]);

const statusFiles: FileEntry[] = [
  ...Object.values(games).flatMap((game) => {
    return {
      path: game.path,
      content: replacer(statusTemplate, [
        ['$tags', seoTemplate],
        ['$id', game.id.toString()],
        ['$path', game.rawPath],
        ['$name', game.name],
        ['$imagePath', game.standardPath.replaceAll('\\', '/')],
        ['$endOfLife', `"${game.endOfLife ?? ''}"`],
      ]),
    };
  }),
  { path: paths.join(statusPath, 'status'), content: statusAllTemplate },
];

export default statusFiles;
