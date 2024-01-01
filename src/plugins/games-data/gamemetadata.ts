export default interface GameMetaData {
  id: number;
  displayId?: number;
  iconLargeUrl?: string;
  iconUrl?: string;
  rawPath?: string;
  standardPath?: string;
  name?: string;
  path?: string;
  docs?: string;
  electron?: string;
  compliance?: string;
  launcher?: number;
  games?: number[];
  mainVariant?: number;
  subVariants?: number[];
  variant?: string;
  endOfLife?: string;
}
