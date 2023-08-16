import SidebarTransform from "../sidebarTransform";
import { isParent } from "../sidebarUtils";
import { BakedSidebarItemCategoryType } from "../types/bakedSidebar";

export default class SortReverse implements SidebarTransform {
  /**
   * Reverse the order of all child items
   */
  transform(rootItem: BakedSidebarItemCategoryType): BakedSidebarItemCategoryType {
    rootItem.items.reverse();
    return rootItem;
  }

  predicate(rootItem: BakedSidebarItemCategoryType): boolean {
    return isParent(rootItem) && rootItem.customProps.sort?.reverse;
  }
}