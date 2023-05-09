import gameMetaData from "./meta-data/game";

declare global {
    // @ts-expect-error
    type GameMetaData = gameMetaData;
}

export {};