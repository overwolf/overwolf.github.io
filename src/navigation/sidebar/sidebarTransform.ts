import { BakedSidebarItemType } from "./types/bakedSidebar";

export default interface SidebarTransform {
    transform(rootItem: BakedSidebarItemType, ...extraParams: any[]): BakedSidebarItemType | BakedSidebarItemType[];
    predicate(rootItem: BakedSidebarItemType, ...extraParams: any[]): boolean;
}