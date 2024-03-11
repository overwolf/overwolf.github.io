export default {
  latest: {
    date: 'January 2024',
    path: '2024/january',
    name: '241',
  },
  deploying: {
    date: 'January 2024',
    path: '2024/january',
    name: '241',
  },
  dev: {
    date: 'February 2024',
    path: '2024/february',
    name: '242',
  },
  'ow-electron': {
    date: 'September 2023',
    path: 'v22.3.25',
    name: '22.3.25',
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
    date: 'February 28th 2024',
    path: '2024/february#february-28th-2024---users-and-permissions-bite-1',
    name: 'Users and Permissions Bite 1',
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
