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
    date: 'January 2024',
    path: '2024/january',
    name: '241',
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
    date: 'March 9th 2023',
    path: '2023/march#march-9th-2023---user-logs-tab',
    name: 'User logs tab',
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
