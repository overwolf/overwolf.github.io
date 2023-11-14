import { useWindowSize } from '@docusaurus/theme-common';

const useIsMobile = () => {
  const windowSize = useWindowSize();
  return windowSize === 'mobile';
};

export default useIsMobile;
