import GameMetaData from './gamemetadata';

export type GamesDataConfig = { data: GamesMetaData };
export type GamesMetaData = { [id: string]: GameMetaData };

declare module '~games-data/game-data.json' {
  const metaData: GameMetaData[];
  export = metaData;
}
