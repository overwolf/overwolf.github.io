export type WebsiteDataConfig = { data: Partial<DataConfig>[] };

export type DataConfig<DataType extends object | any[] | string = any> = {
  /** Path to source data */
  srcPath?: string;
  /** Source data */
  data?: DataType;
  /** Optional data transformer (default is JSON.parse(data)) */
  dataTransformer?: (data: DataType | string) => DataType;
  /** Key to save the data under */
  dataKey?: string;
  /** Files to generate using this data */
  generateFiles?: FileConfiguration<DataType>;
};

type FileConfiguration<DataType> = {
  /** Generated file path */
  outputPath: string;
  /** Optional data transformer per file (default is JSON.stringify(data)) */
  transformer?: (data: DataType) => string;
};
