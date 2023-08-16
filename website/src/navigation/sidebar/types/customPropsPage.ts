import * as t from 'io-ts';
import * as d from 'io-ts/Decoder';
import { MandatoryCustomPropsBase } from "./customPropsBase";

export const _Category = {
  id: d.string,
  label: d.string,
}

export const Category = d.struct(_Category);

export const CustomPropsPage = MandatoryCustomPropsBase();