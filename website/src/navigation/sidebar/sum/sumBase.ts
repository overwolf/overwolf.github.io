import { BakedSidebarItem } from "../types/bakedSidebar";

export default interface SumBase<Type> {
  defaultVal: Type;
  sum(value: Type, item: Type): Type;
}