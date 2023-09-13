import { pipe } from "fp-ts/lib/function";
import { CustomPropsCategory } from "./customPropsCategory";
import { CustomPropsPage } from "./customPropsPage";
import * as d from 'io-ts/Decoder';
import { CustomPropsBaseType } from "./customPropsBase";

const BakedSidebarItemPage = CreatePageSidebarItem();
export type BakedSidebarItemPageType = d.TypeOf<typeof BakedSidebarItemPage>;

const _CategoryItemBase = pipe(
  // MAKE CUSTOM PROPS HERE PARTIAL, ALSO OF RIGHT TYPE
  CreateBakedItemType('category', CustomPropsCategory),
  d.intersect(
    d.struct({
      /** Sidebar Item Label */
      label: d.string,
    })
  ),
  d.intersect(
    d.partial({
      /** Index item for this Category */
      link: BakedSidebarItemPage,
      /** Should the item start collapsed or not */
      collapsed: d.boolean,
      /** Should the item be uncollapsible */
      collapsible: d.boolean
    })
  )
)

const BakedSidebarItemCategory = CreateCategorySidebarItem();
export type BakedSidebarItemCategoryType = d.TypeOf<typeof BakedSidebarItemCategory>;

function CreateBakedItemType<Name extends string, CustomProps extends CustomPropsBaseType>
  (itemType: Name, customProps: d.Decoder<unknown, CustomProps>) {
  return pipe(
    d.struct({
    /** Sidebar Item Type */
    type: d.literal(itemType),
    }),
    d.intersect(
      d.partial({
        /** Sidebar Item Label */
        label: d.string,
        // TODO: MAKE THIS MANDATORY FOR PAGE ITEMS
        /** Sidebar Item Properties */
        customProps: customProps,
        /** Sidebar Custom Class Name */
        className: d.string,
      })
    )
  )
}

function CreateCategorySidebarItem(): d.Decoder<unknown, CategoryItemType> {
  return pipe(
    _CategoryItemBase,
    d.intersect(
      CreateChildrenProperty()
    )
  )
}

function CreatePageSidebarItem() {
  return pipe(
    CreateBakedItemType('doc', CustomPropsPage),
    d.intersect(
      d.struct({
        /** Unique ID of the page, includes the full path to it */
        id: d.string
      })
    )
  )
}

type CategoryItemType = d.TypeOf<typeof _CategoryItemBase> & ParentItem;
type ParentItem = {
  items?: BakedSidebarItemType[]
}


export const BakedSidebarItem = pipe(
  d.sum('type')({
    doc: BakedSidebarItemPage,
    category: BakedSidebarItemCategory
  })
);
export type BakedSidebarItemType = d.TypeOf<typeof BakedSidebarItem>;


function CreateChildrenProperty(): d.Decoder<unknown, ParentItem> {
  return d.lazy('items', () =>
    d.partial({
      // Might need to be nullable, not sure yet
      /** Category Sidebar Items */
      items: d.array(BakedSidebarItem)
    })
  )
}



const foo: BakedSidebarItemType = {
  type: 'category',
  label: 'string',
  
  items: [
    {
      type: 'category',
      label: 'hello',
      customProps: {
        tags: {
          electron_platform: false,
          overwolf_platform: false
        }
      },
      items: [
        {
          type: 'doc',
          id: 'test',
          customProps: {
            tags: {
              electron_platform: false,
              overwolf_platform: false
            },
          }
        }
      ]
    },
    {
      type: 'doc',
      id: 'hello',
      customProps: {
        tags: {
          electron_platform: false,
          overwolf_platform: false
        }
      }
    }
  ]
}



// export const BakedSidebarItemPage = t.intersection([TypedSidebar<'doc', typeof CustomPropsPage>('doc', CustomPropsPage), t.type({ /** Sidebar Item ID */ id: t.string})]);
// export type BakedSidebarItemPageType = t.TypeOf<typeof BakedSidebarItemPage>;
// const _BakedSidebarItemCategory = TypedSidebar<'category', typeof CustomPropsCategory>('category', CustomPropsCategory);
// export type BakedSidebarItemCategoryType = t.TypeOf<typeof _BakedSidebarItemCategory> & { items?: BakedSidebarItemType[] };

// export const BakedSidebarItemCategory: t.Type<BakedSidebarItemCategoryType> = t.recursion('CategoryType', () =>
//   t.intersection([
//     _BakedSidebarItemCategory,
//     t.partial({
      
//       items: t.array(t.union([BakedSidebarItemPage, BakedSidebarItemCategory]))
//     }),
//   ])
// );

// export const BakedSidebarItem = t.union([BakedSidebarItemPage, BakedSidebarItemCategory]);
// // Equivalent to t.TypeOf<typeof SidebarItemConstType>
// // The reason we have to define it is so that typescript understands it for the recursion above
// export type BakedSidebarItemType = BakedSidebarItemPageType | BakedSidebarItemCategoryType;