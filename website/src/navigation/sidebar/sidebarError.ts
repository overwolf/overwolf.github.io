import { DEVMODE } from "./sidebarConstants";

export default function sidebarError(errorMessage: string) {
  if(!DEVMODE) throw new Error(errorMessage);
  console.error(errorMessage);
  
}