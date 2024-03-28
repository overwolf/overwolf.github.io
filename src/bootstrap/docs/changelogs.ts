import { FileEntry } from '../generate';
import paths from '../../utils/paths';
import replacer from '../templates/replacer';
import changelogs from '../configs/changelogs';
import changelogsTemplate from '../templates/changelogs';

const changelogsPath = paths.join('api', 'changelogs', 'changelogs');

const {
  dev,
  'ow-electron': electron,
  'ow-electron-builder': builder,
  console,
  deploying,
  docs,
  latest,
} = changelogs;

const changelogsFiles: FileEntry[] = [
  {
    path: changelogsPath,
    content: replacer(changelogsTemplate, [
      ['$latest-ver-display', latest.name + (latest.suffix ?? '')],
      ['$latest-ver', latest.name],
      ['$latest-date', latest.date],
      ['$latest-path', latest.path],
      ['$deploying-ver-display', deploying.name + (deploying.suffix ?? '')],
      ['$deploying-ver', deploying.name],
      ['$deploying-date', deploying.date],
      ['$deploying-path', deploying.path],
      ['$dev-ver-display', dev.name + (dev.suffix ?? '')],
      ['$dev-ver', dev.name],
      ['$dev-date', dev.date],
      ['$dev-path', dev.path],
      ['$ow-electron-ver', electron.name],
      ['$ow-electron-date', electron.date],
      ['$ow-electron-path', electron.path],
      ['$ow-electron-builder-ver', builder.name],
      ['$ow-electron-builder-date', builder.date],
      ['$ow-electron-builder-path', builder.path],
      ['$doc-ver', docs.name],
      ['$doc-date', docs.date],
      ['$doc-path', docs.path],
      ['$console-ver', console.name],
      ['$console-date', console.date],
      ['$console-path', console.path],
      [
        /\$deploying\?\{(.*?)\}/gms,
        deploying.name !== latest.name || deploying.suffix !== latest.suffix
          ? '$1'
          : '',
      ],
    ]),
  },
];

export default changelogsFiles;
