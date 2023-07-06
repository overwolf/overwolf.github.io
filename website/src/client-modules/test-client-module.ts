import type {ClientModule} from '@docusaurus/types';

const module: ClientModule = {
  onRouteUpdate({location, previousLocation}) {
    console.log("Hello from onRouteUpdate");
    // ...
  },
  onRouteDidUpdate({location, previousLocation}) {
    console.log(location, previousLocation);
  },
};
export default module;