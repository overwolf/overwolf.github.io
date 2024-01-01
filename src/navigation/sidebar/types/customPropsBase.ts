import * as d from 'io-ts/Decoder';
import { pipe } from "fp-ts/lib/function";


/** Base sidebar content tags */
const _BaseSidebarContentTags = {
  /** Is this sidebar item relevant for the Overwolf Platform framework */
  overwolf_platform: d.boolean,
  /** Is this sidebar item relevant for the Overwolf Electron framework */
  electron_platform: d.boolean,
}

const _BaseSidebarCustomProps = <ExtraTags>(extraTags: d.Decoder<unknown, ExtraTags>) => {
  return {
    /** Content tags used by this item */
    tags: extraTags
  }
}

export const CustomPropsBaseProper = <CustomProps>(mainProps: d.Decoder<unknown, CustomProps>) => {
  return pipe(
    mainProps,
    d.intersect(
      d.partial({
        /** Enables debug-logging for this item */
        debug: d.boolean
      })
    )
  );
}

/** Base Sidebar Item Custom Props, with all props required */
export const MandatoryCustomPropsBase = <ExtraTags>(extraTags?: d.Decoder<unknown, ExtraTags>) => {
  return CustomPropsBaseProper(
    d.struct(
      _BaseSidebarCustomProps(
        d.intersect(
          d.struct(_BaseSidebarContentTags)
        )(extraTags ?? d.partial({}))
      )
    )
  )
}

/** Base Sidebar Item Custom Props, with all props optional */
export const OptionalCustomPropsBase = <ExtraTags>(extraTags?: d.Decoder<unknown, ExtraTags>) => {
  return CustomPropsBaseProper(
    d.partial(
      _BaseSidebarCustomProps(
        d.intersect(
          d.partial(_BaseSidebarContentTags)
        )(extraTags ?? d.partial({}))
      )
    )
  )
}

const CustomPropsBase = OptionalCustomPropsBase();
export type CustomPropsBaseType = d.TypeOf<typeof CustomPropsBase>