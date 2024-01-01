import useLocalStorageHook from "../hooks/local-storage-hook";
import DebugInfo from "./debug-info";

export default function useDebugInfoHook(){
  return useLocalStorageHook<DebugInfo>('debug-info', {
    name: true,
    color: true
  });
}