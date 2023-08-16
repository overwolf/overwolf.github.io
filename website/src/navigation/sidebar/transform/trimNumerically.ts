import sidebarError from "../sidebarError";
import SidebarTransform from "../sidebarTransform";
import { createFakeBakedCategoryItem, isParent } from "../sidebarUtils";
import { BakedSidebarItemCategoryType } from "../types/bakedSidebar";

export default class TrimNumerically implements SidebarTransform {
  /**
   * Applies a "maximum items" filter, creating a "fake" sidebar item for "viewing more" items
   * (aka "only show the first 20 items in the main sidebar, and show the rest under 'see more'")
   */
  transform(rootItem: BakedSidebarItemCategoryType): BakedSidebarItemCategoryType{
    const trimSettings = rootItem.customProps.trim;
    const maxItems = trimSettings.count;
    if (maxItems <= 0) throw new sidebarError(`Category Maximum Items \`count\` must be bigger than 0, received \`${maxItems}\` in item: ${{ ...rootItem, items: `Ommitted ${rootItem.items.length} items` }}`);
    const newItems = rootItem.items.slice(0, maxItems);
    const oldItems = rootItem.items.slice(maxItems, undefined);
    const label = trimSettings.leftovers.label;
    const oldersItem = createFakeBakedCategoryItem({ ...rootItem, items: oldItems, label });
    rootItem.items = newItems;
    rootItem.items.push(oldersItem);
    return rootItem;
  }

  predicate(rootItem: BakedSidebarItemCategoryType): boolean {
    return isParent(rootItem) && !!rootItem.customProps.trim && rootItem.items.length > rootItem.customProps.trim.count;
  }
}