import GameMetaData from '../plugins/games-data/gamemetadata';
import paths from '../utils/paths';
import path from 'path';
import fs from 'fs';

const metaData: GameMetaData[] = [
  {
    id: 21566,
    path: 'apex-legends',
    name: 'Apex Legends',
  },
  {
    id: 21960,
    path: 'axie-infinity-origin',
    name: 'Axie Infinity Origin',
  },
  {
    id: 21876,
    path: 'call-of-duty-vanguard',
    name: 'Call of Duty: Vanguard',
  },
  {
    id: 21848,
    path: 'diablo-2-resurrected',
    name: 'Diablo 2 Resurrected',
  },
  {
    id: 7314,
    path: 'dota-2',
    name: 'Dota 2',
  },
  {
    id: 21634,
    path: 'escape-from-tarkov',
    name: 'Escape From Tarkov',
  },
  {
    id: 21672,
    path: 'eternal-return',
    name: 'Eternal Return',
  },
  {
    id: 6350,
    path: 'final-fantasy-xiv',
    name: 'Final Fantasy XIV',
  },
  {
    id: 21216,
    path: 'fortnite',
    name: 'Fortnite',
  },
  {
    id: 21854,
    path: 'halo-infinite',
    name: 'Halo Infinite',
  },
  {
    id: 9898,
    path: 'hearthstone',
    name: 'Hearthstone',
  },
  {
    id: 10624,
    path: 'heroes-of-the-storm',
    name: 'Heroes of the Storm',
  },
  {
    id: 5426,
    launcher: 10902,
    path: 'league-of-legends',
    name: 'League of Legends',
  },
  {
    id: 10902,
    games: [5426, 21570, 215701, 21556, 215561],
    path: 'league-of-legends',
    name: 'League of Legends Launcher',
  },
  {
    id: 21620,
    path: 'legends-of-runeterra',
    name: 'Legends of Runeterra',
  },
  {
    id: 21308,
    path: 'magic-the-gathering-arena',
    name: 'Magic: The Gathering Arena',
  },
  {
    id: 8032,
    path: 'minecraft',
    name: 'Minecraft',
  },
  {
    id: 21816,
    path: 'new-world',
    name: 'New World',
  },
  {
    id: 10844,
    path: 'overwatch-2',
    name: 'Overwatch 2',
  },
  {
    id: 7212,
    path: 'path-of-exile',
    name: 'Path of Exile',
  },
  {
    id: 10906,
    path: 'player-unknowns-battlegrounds',
    name: "PlayerUnknown's Battlegrounds",
  },
  {
    id: 10826,
    path: 'rainbow-six-siege',
    name: 'Rainbow Six Siege',
  },
  {
    id: 10798,
    path: 'rocket-league',
    name: 'Rocket League',
  },
  {
    id: 21404,
    path: 'splitgate-arena-warfare',
    name: 'Splitgate: Arena Warfare',
  },
  {
    id: 5855,
    path: 'starcraft-2',
    name: 'StarCraft II',
  },
  {
    id: 21570,
    displayId: 5426,
    launcher: 10902,
    subVariants: [215701],
    path: 'teamfight-tactics',
    name: 'Teamfight Tactics',
  },
  {
    id: 215701,
    displayId: 22848,
    launcher: 10902,
    mainVariant: 21570,
    docs: 'teamfight-tactics',
    path: 'teamfight-tactics-public-beta',
    name: 'Teamfight Tactics PBE',
    variant: 'PBE',
  },
  {
    id: 21556,
    displayId: 5426,
    launcher: 10902,
    subVariants: [215561],
    path: 'league-of-legends-arena',
    name: 'League of Legends: Arena',
  },
  {
    id: 215561,
    displayId: 22848,
    launcher: 10902,
    mainVariant: 21556,
    docs: 'league-of-legends-arena',
    path: 'league-of-legends-public-beta-arena',
    name: 'League of Legends PBE: Arena',
    variant: 'PBE',
  },
  {
    id: 21668,
    path: 'valheim',
    name: 'Valheim',
  },
  {
    id: 21640,
    path: 'valorant',
    name: 'Valorant',
  },
  {
    id: 8954,
    path: 'warframe',
    name: 'Warframe',
  },
  {
    id: 6365,
    path: 'world-of-tanks',
    name: 'World of Tanks',
  },
  {
    id: 765,
    path: 'world-of-warcraft',
    name: 'World of Warcraft',
  },
  {
    id: 10746,
    path: 'world-of-warships',
    name: 'World of Warships',
  },
  {
    id: 21864,
    path: 'lost-ark',
    name: 'Lost Ark',
  },
  {
    id: 22638,
    path: 'sons-of-the-forest',
    name: 'Sons of the Forest',
  },
  {
    id: 22312,
    path: 'leap',
    name: 'LEAP',
  },
  {
    id: 22700,
    path: 'diablo-4',
    name: 'Diablo 4',
  },
  {
    id: 22730,
    path: 'counter-strike-2',
    name: 'Counter-Strike 2',
  },
  {
    id: 23222,
    path: 'starfield',
    name: 'Starfield',
  },
  {
    id: 22088,
    path: 'baldurs-gate-3',
    name: "Baldur's Gate 3",
  },
  {
    id: 22328,
    path: 'call-of-duty-modern-warfare-2',
    name: 'Call of Duty: Modern Warfare 2',
  },
  {
    id: 23424,
    path: 'call-of-duty-modern-warfare-3',
    name: 'Call of Duty: Modern Warfare 3',
  },
  {
    id: 223281,
    displayId: 22328,
    path: 'call-of-duty-warzone-2-0',
    name: 'Call of Duty: Warzone 2.0',
  },
  {
    id: 21656,
    path: 'genshin-impact',
    name: 'Genshin Impact',
  },
];

const compliancePath = path.join('/start', 'game-compliance');
const logosPath = path.join('/img', 'game-logos');
const apiPath = path.join('/api', 'live-game-data');

function Transformer(game: GameMetaData) {
  const gamePath = game.path;
  const isLauncher = !!game.games;
  const fullPath = isLauncher ? path.join('launchers', gamePath) : gamePath;

  game.rawPath = game.path;
  game.standardPath = fullPath;

  const gameCompliancePath = path.join(compliancePath, fullPath);
  game.compliance = fs.existsSync(
    paths.PagesPath(paths.RootPath, `${gameCompliancePath}.mdx`),
  )
    ? gameCompliancePath
    : undefined;

  game.path = path.join('/status', fullPath);
  game.docs = path.join(
    apiPath,
    isLauncher ? 'supported-launchers' : 'supported-games',
    game.docs ?? gamePath,
  );

  game.iconUrl = path.join(logosPath, `${fullPath}.png`);
  game.iconLargeUrl = path.join(logosPath, 'large', `${fullPath}.png`);

  return game;
}

const computed = metaData.map(Transformer).reduce((prev, current) => {
  prev[current.id.toString()] = current;
  return prev;
}, {}) as {
  [key: string]: GameMetaData;
};

export default computed;

export const computedTemplate = `export default ${JSON.stringify(
  computed,
  undefined,
  4,
)}`;
