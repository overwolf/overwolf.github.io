import sidebarError from "../sidebarError";
import SidebarTransform from "../sidebarTransform";
import { fileId, isParent } from "../sidebarUtils";
import { BakedSidebarItemCategoryType, BakedSidebarItemType } from "../types/bakedSidebar";

const months = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12
}

function monthNumberer(version: BakedSidebarItemType, isStrict: boolean) {
  let newVersion = months[fileId(version['id'])];
  if (newVersion === undefined) {
    if(isStrict) switch(version.type) {
      case 'category':
        sidebarError(`You are trying to sort a category using monthly sort, which only supports \`doc\` items! Sidebar label: \`${version.label}\``);
        break;
      case 'doc':
        sidebarError(`Page id is not a month! \`${version.id}\``);
        break;
      default:
        sidebarError(`Unrecognized sidebar item type! \`${version['type']}\` in sidebar ${version}`);
        break;
    }
    newVersion = -1;    
  }
  return newVersion;
}

export default class SortMonthly implements SidebarTransform {
  /**
   * apply month-based item sorting on the page ids. it works by simply matching the ids with the list:
   * january, february, march, april, may, june, july, august, septbemer, october, november, december
   * if any of the ids supplied is not in this list, and does not have the `months_top` flag checked, an error will be thrown
   */
  transform(rootItem: BakedSidebarItemCategoryType): BakedSidebarItemCategoryType {
    // if `a` is a more recent month than `b`, we want to return a negative, otherwise a positive
    const isStrict = rootItem.customProps.sort.strict;
    rootItem.items.sort((a, b) => {
      return monthNumberer(b, isStrict) - monthNumberer(a, isStrict)
    })
    return rootItem;
  }

  predicate(rootItem: BakedSidebarItemCategoryType): boolean {
    return isParent(rootItem) && rootItem.customProps.sort?.main === 'monthly';
  }
}