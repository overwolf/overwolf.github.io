import { pipe } from "fp-ts/lib/function";
import { DEVMODE } from "./sidebarConstants";
import { DefaultFakeBakedCategoryItem, pipeTransform } from "./sidebarUtils";
import SortMonthly from "./sort/sortMonthly";
import SortNumerically from "./sort/sortNumerically";
import SortReverse from "./sort/sortReverse";
import SumBase from "./sum/sumBase";
import SumBoolean from "./sum/sumBoolean";
import HoistChildren from "./transform/hoistChildren";
import TrimNumerically from "./transform/trimNumerically";
import { BakedSidebarItemType } from "./types/bakedSidebar";
import { CustomPropsCategory } from "./types/customPropsCategory";
import * as d from 'io-ts/Decoder';
import SplitCategories from "./transform/splitCategories";

type PropMapper<Type> = {
  [Key in keyof Type]: SumBase<Type[Key]>;
}

const summarizedTags: PropMapper<Partial<d.TypeOf<typeof CustomPropsCategory>['tags']>> = {
  overwolf_platform: new SumBoolean(false),
  electron_platform: new SumBoolean(false)
};

function checkAllChildren<Type>(combiner: SumBase<Type>, childPredicate: (item: BakedSidebarItemType) => Type, items: BakedSidebarItemType[]) {
  let value = combiner.defaultVal;
  items.forEach(element => {
    value = combiner.sum(value, childPredicate(element));
  });
  return value;
}


export default function applySidebarTransforms(items: BakedSidebarItemType[]): BakedSidebarItemType[] {
  items = items.flatMap((mainItem: BakedSidebarItemType) => {
    // ensure we have custom props
    mainItem.customProps = mainItem.customProps ?? DefaultFakeBakedCategoryItem.customProps;
    // run general cleanup logic assuming we already had custom properties (the impact of this extra run isn't enough to justify an "if else" here)
    if (mainItem.customProps.debug) {
      if (DEVMODE) console.log(mainItem);
      else {
        console.warn(`Building item with sidebar debug enabled for: ${mainItem}`);
        delete mainItem.customProps["debug"];
      }
    }
    delete mainItem.customProps["placeholder"];

    // is this a category?
    switch(mainItem.type) {
      case 'category':
      const children = mainItem.items;
      // If this category somehow has no children, return
      if(!children) return [];
      // this is a relic for taking a sidebar item OUT of a 2 (or more) deep category with just that one item (aka {{item}}), since docusaurus will not render it by default
      // it's kept here in case this behavior is needed again
      // if (item.items.length === 0 && item.link) result.push(item.link)

      // Apply custom props on all child elements before we continue
      mainItem = { ...mainItem, items: applySidebarTransforms(children) };

      // Ensure all propagated sidebar properties are summed from all children (ie. content tags)
      mainItem.customProps.tags = mainItem.customProps.tags ?? {};
      Object.keys(summarizedTags).forEach(
        (field) => mainItem.customProps.tags[field] = checkAllChildren(
          summarizedTags[field],
          (item) => item.customProps.tags[field],
          children,
        )
      )
      
      const result = pipe(
        [mainItem],
        pipeTransform(new SplitCategories()),
        pipeTransform(new HoistChildren()),
        pipeTransform(new SortNumerically()),
        pipeTransform(new SortMonthly()),
        pipeTransform(new SortReverse()),
        pipeTransform(new TrimNumerically())
      );
      // if(mainItem.customProps.hoist_children)
      //   console.log(mainItem.label, result);
      return result;
    // Is this a doc item?
    case "doc":
      // apply the item as is
      return mainItem;
    }
  })
  return items;
}