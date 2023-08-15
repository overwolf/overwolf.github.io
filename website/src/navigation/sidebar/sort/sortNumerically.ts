import sidebarError from "../sidebarError";
import SidebarTransform from "../sidebarTransform";
import { fileId, isParent } from "../sidebarUtils";
import { BakedSidebarItemCategoryType, BakedSidebarItemPageType, BakedSidebarItemType } from "../types/bakedSidebar";

function versionSplitter(version: string): number[] {
  version = fileId(version);
  if (version.startsWith('v')) version = version.substring(1, undefined);
  return version.split('.').map((number) => parseInt(number));
}

export default class SortNumerically implements SidebarTransform {
  /**
   * apply version-based item sorting on the page ids. it works based on the following -
   * (v)?a.b.c.[...]  
   * in more words - first it removes the leading v (if it exists) from the version id  
   * then, it splits all items between the dots (major.minor.patch.etc), and sorts from major down  
   */
  transform(rootItem: BakedSidebarItemCategoryType): BakedSidebarItemCategoryType {
    const isStrict = rootItem.customProps.sort.strict;
    // if `a` is a newer version than `b`, we want to return a negative, otherwise a positive
    rootItem.items.sort((a, b) => {
      if(a.type !== 'doc') {
        if(isStrict) sidebarError(`Trying to sort category item by month! ${a.label}`)
        return -1;
      }
      if(b.type !== 'doc') {
        if(isStrict) sidebarError(`Trying to sort category item by month! ${b.label}`)
        return 1;
      }
      const splitA = versionSplitter(a.id);
      const splitB = versionSplitter(b.id);
      const larger = Math.max(splitA.length, splitB.length)
      for (var i = 0; i < larger; i++) {
        if (splitA[i] === undefined || isNaN(splitA[i])) return 1;
        if (splitB[i] === undefined || isNaN(splitB[i])) return -1;
        if (splitA[i] !== splitB[i]) return splitB[i] - splitA[i];
      }
      return 0;
    })
    return rootItem;
  }

  predicate(rootItem: BakedSidebarItemCategoryType): boolean {
    return isParent(rootItem) && rootItem.customProps.sort?.main === 'numerically';
  }
}