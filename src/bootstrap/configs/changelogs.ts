export default {
  latest: {
    date: 'February 2024',
    path: '2024/february',
    name: '242',
  },
  deploying: {
    date: 'February 2024',
    path: '2024/february',
    name: '242',
  },
  dev: {
    date: 'March 2024',
    path: '2024/march',
    name: '248',
  },
  'ow-electron': {
    date: 'March 2024',
    path: 'v28.2.5',
    name: '28.2.5',
  },
  'ow-electron-builder': {
    date: 'January 2024',
    path: 'v24.7.0',
    name: '24.7.0',
  },
  docs: {
    date: 'November 22nd 2023',
    path: '2023/november#november-22nd-2023---discord-rich-presence',
    name: 'Discord Rich Presence',
  },
  console: {
    date: 'March ??th 2024',
    path: '2024/march#march-th-2024---users-and-permissions-bite-2',
    name: 'Users and Permissions Bite 2',
  },
} as {
  latest: Changelog;
  deploying: Changelog;
  dev: Changelog;
  'ow-electron': Changelog;
  'ow-electron-builder': Changelog;
  docs: Changelog;
  console: Changelog;
};

type Changelog = { date: string; path: string; name: string; suffix?: string };
