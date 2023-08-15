import { pipe } from "fp-ts/lib/function";
import { OptionalCustomPropsBase } from "./customPropsBase";
import { Category, _Category } from "./customPropsPage";
import * as d from 'io-ts/Decoder';

export const SubCategories = d.struct({
  /** Ordered array of allowed sub-category ids */
  category_ids: d.array(_Category.id),
});

export const SortProps = pipe(
  d.partial({
    main: d.union(
      d.literal('numerically'),
      d.literal('monthly')
    )
  }),
  d.intersect(
    d.struct({
      /** Should items that do not follow the main sorting algorithm's format throw an error */
      strict: d.boolean,
      /** Should all children be reversed after sorting */
      reverse: d.boolean
    })
  )
)

export const ItemGroupCustomProps = d.partial({
  /** Sub-category data for this item */
  sub_categories: SubCategories,
  /** Defines child element sorting behavior */
  sort: SortProps,
})

/** Category Sidebar Item Custom Props */
export const CustomPropsCategory = pipe(
  // CustomPropsBase(d.partial(BaseSidebarContentTags)),
  OptionalCustomPropsBase(),
  d.intersect(ItemGroupCustomProps),
  d.intersect(
    d.partial({
      /** [DO NOT USE] This is required to avoid errors in some cases */
      placeholder: d.boolean,
      /** The category's always-top items group */
      top: ItemGroupCustomProps,
      /** The categories always-bottom items group */
      bottom: ItemGroupCustomProps,
      /** Defines child element hoisting behavior */
      hoist_children: d.struct({
        /** Should all children be hoisted to sit where this item is */
        hoist: d.boolean,
        /** Should this only work on direct children, or recursively on all children */
        recursively: d.boolean,
      }),
      /** Defines child item trimming behavior */
      trim: d.struct({
        /** How many items are allowed to stay */
        count: d.number,
        /** How do we deal with the leftovers */
        leftovers: d.struct({
          /** What label should the leftovers' fake sidebar have */
          label: d.string
        })
      })
    })
  )
)