import sidebarError from "./sidebarError";
import SidebarTransform from "./sidebarTransform";
import { BakedSidebarItemCategoryType, BakedSidebarItemPageType, BakedSidebarItemType } from "./types/bakedSidebar";

export function isParent(item: BakedSidebarItemType) {
  return item.type === 'category' && !!item.items;
}

export function invokeTransform(transform: SidebarTransform, item: BakedSidebarItemType, ...extraParams: any) {
  return transform.predicate(item, ...extraParams) ? transform.transform(item, ...extraParams) : item;
}

export function pipeTransform(transform: SidebarTransform) {
  return (items: BakedSidebarItemType[]) => {
    return items.flatMap((item: BakedSidebarItemType) => {
      return invokeTransform(transform, item)
    })
  }
}

export function fileId(id: string): string {
  return id.split("/").pop();
}

export const DefaultFakeBakedCategoryItem: BakedSidebarItemCategoryType = {
  label: "Fake Category",
  type: "category",
  customProps: {
    tags: {
      overwolf_platform: false,
      electron_platform: false
    }
  }
}

export function createFakeBakedCategoryItem(template: Partial<BakedSidebarItemCategoryType>): BakedSidebarItemCategoryType {
  return {
    ...DefaultFakeBakedCategoryItem,
    ...template,
  };
}

export const DefaultFakeBakedPageItem: BakedSidebarItemPageType = {
  id: "fakeitem",
  type: "doc",
  customProps: {
    tags: {
      overwolf_platform: false,
      electron_platform: false
    }
  }
}

export function createFakeBakedPageItem(template: Partial<BakedSidebarItemPageType>): BakedSidebarItemPageType {
  return {
    ...DefaultFakeBakedPageItem,
    ...template,
  };
}

export function identifySidebar(item: BakedSidebarItemType) {
  switch(item.type){
    case 'doc':
      return item.id;
    case 'category':
      if(item.link) return `Category, with link item: ${identifySidebar(item.link)}`
      return item.label;
    default:
      throw sidebarError(`Attempted to identify unknown sidebar! ${item}`)
  }
}