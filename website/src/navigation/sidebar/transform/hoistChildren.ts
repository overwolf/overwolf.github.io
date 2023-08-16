import sidebarError from "../sidebarError";
import SidebarTransform from "../sidebarTransform";
import { invokeTransform, isParent } from "../sidebarUtils";
import { BakedSidebarItemCategoryType, BakedSidebarItemType } from "../types/bakedSidebar";

export default class HoistChildren implements SidebarTransform {
  /**
   * Hoists the direct children of this item to sit exactly where this one sits.  
   * Can also recursively hoist sub items as well if configured that way.
   */
  transform(rootItem: BakedSidebarItemCategoryType, ...extraParams: [boolean]): BakedSidebarItemType[] {
    let recursive = extraParams[0] || rootItem.customProps.hoist_children?.recursively;
    const items = rootItem.items as BakedSidebarItemType[];
    const result = items.flatMap(item => {
      if(recursive) return invokeTransform(this, item, recursive) as BakedSidebarItemType | BakedSidebarItemType[];
      return item;
    });
    return result;
  }

  predicate(rootItem: BakedSidebarItemCategoryType, ...extraParams: [boolean]): boolean {
    let recursive = extraParams[0];
    return isParent(rootItem) && (recursive || !!rootItem.customProps.hoist_children?.hoist);
  }
}