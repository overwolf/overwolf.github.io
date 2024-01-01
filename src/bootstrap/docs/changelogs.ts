import { FileEntry } from '../generate';
import paths from '../../utils/paths';
import replacer from '../templates/replacer';
import changelogs from '../configs/changelogs';
import changelogsTemplate from '../templates/changelogs';

const changelogsPath = paths.join('api', 'changelogs', 'changelogs');

const dev = changelogs.dev;
const cur = changelogs.latest;
const electron = changelogs['ow-electron'];
const builder = changelogs['ow-electron-builder'];
const docs = changelogs.docs;
const deploying = changelogs.deploying;

const changelogsFiles: FileEntry[] = [
  {
    path: changelogsPath,
    content: replacer(changelogsTemplate, [
      ['$latest-ver-display', cur.name + (cur.suffix ?? '')],
      ['$latest-ver', cur.name],
      ['$latest-date', cur.date],
      ['$latest-path', cur.path],
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
      ['$console-ver', docs.name],
      ['$console-date', docs.date],
      ['$console-path', docs.path],
      [
        /\$deploying\?\{(.*?)\}/gms,
        deploying.name !== cur.name || deploying.suffix !== cur.suffix
          ? '$1'
          : '',
      ],
    ]),
  },
];

export default changelogsFiles;
