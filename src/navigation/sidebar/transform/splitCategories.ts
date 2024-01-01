import OWClassNames from "../../../theme/OverwolfClassNames";
import sidebarError from "../sidebarError";
import SidebarTransform from "../sidebarTransform";
import { identifySidebar, isParent } from "../sidebarUtils";
import { BakedSidebarItemCategoryType, BakedSidebarItemType } from "../types/bakedSidebar";

export default class SplitCategories implements SidebarTransform {
  /**
   * Hoists the direct children of this item to sit exactly where this one sits.  
   * Can also recursively hoist sub items as well if configured that way.
   */
  transform(rootItem: BakedSidebarItemCategoryType): BakedSidebarItemType[] {
    const subCategories = rootItem.customProps.sub_categories.categories;
    if(!subCategories.find((item) => item.id === 'default')) subCategories.splice(0, 0, {id: 'default', label: ''});
    const categories: {[key: string]: BakedSidebarItemType[]} = {};
    subCategories.forEach((value) => {
      categories[value.id] = [];
    })

    rootItem.items.forEach(item => {
      let category = 'default';
      switch(item.type) {
        case "doc":
          category = item.customProps?.category?.id;
          break;
        case "category":
          category = item.customProps?.category?.id;
          break;
        default:
          // @ts-ignore
          throw new sidebarError(`Unknown item type ${item.type} found when categorizing the Item ${identifySidebar(item)}`);
      }
      // TODO: Make this error
      if(!category || !subCategories.find((value) => value.id === category)) category = 'default';
      categories[category].push(item);
    });

    const result = subCategories.flatMap((value) => {
      if(value.id === 'default') return categories[value.id];
      if(!categories[value.id].length) return;
      const result: BakedSidebarItemCategoryType = {
        label: value.label,
        type: 'category',
        collapsed: false,
        collapsible: false,
        items: categories[value.id],
        customProps: {...rootItem.customProps, tag_category: true }
      }
      return result;
    }).filter((item) => !!item);

    return result;
  }

  predicate(rootItem: BakedSidebarItemCategoryType): boolean {
    return isParent(rootItem) && !!rootItem.customProps.sub_categories;
  }
}