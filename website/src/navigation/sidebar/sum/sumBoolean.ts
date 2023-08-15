import SumBase from "./sumBase";

export default class SumBoolean implements SumBase<boolean> {
  constructor(public readonly defaultVal: boolean){}

  sum(value: boolean, itemProperty: boolean): boolean {
    return value || itemProperty;
  }
}