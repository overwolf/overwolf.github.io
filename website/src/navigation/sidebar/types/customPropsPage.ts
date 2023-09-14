import * as d from 'io-ts/Decoder';
import { MandatoryCustomPropsBase } from "./customPropsBase";
import { pipe } from 'fp-ts/lib/function';

export const _Category = {
  id: d.string,
}

export const Category = d.partial({category: d.struct(_Category)});

export const CustomPropsPage = pipe(MandatoryCustomPropsBase(), d.intersect(Category));

export type CustomPropsPageType = d.TypeOf<typeof CustomPropsPage>;