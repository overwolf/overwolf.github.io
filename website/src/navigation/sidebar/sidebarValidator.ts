import sidebarError from "./sidebarError";
import { PathReporter } from 'io-ts/PathReporter';
import { diffString, diff } from 'json-diff';
import { isLeft } from "fp-ts/lib/Either";
import * as d from 'io-ts/Decoder';
import { BakedSidebarItem, BakedSidebarItemType } from "./types/bakedSidebar";
import { identifySidebar } from "./sidebarUtils";

export default function ValidateBakedSidebarItem(item: BakedSidebarItemType) {
  const decoded = BakedSidebarItem.decode(item);
  let result = item;
  if(isLeft(decoded)) {
    console.log(identifySidebar(item));
    console.log(item);
    console.log(d.draw(decoded.left))
    // console.log(PathReporter.report(decoded), item)
    // console.error(item.label, item['id']);
    // console.log(JSON.stringify(decoded.left.map((value) => value.context.map((context) => context.key))), undefined, 4);
    // sidebarError(`Failed to validate sidebar data: ${PathReporter.report(decoded).map((value) => value.replaceAll(/^.*?\//gms, '/'))}`);
  } else {
    result = decoded.right;
  }
  const diff: string = diffString(result, item);
  if(/[\+\-]+/gm.exec(diff)) {
    sidebarError(`Excess properties found on sidebar ${identifySidebar(item)}: ${diff}`);
  }
  return result;
}