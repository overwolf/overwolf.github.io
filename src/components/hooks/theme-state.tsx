
import { useEffect, useState } from 'react';

const useThemeState = () => {
  // const { } = props;
  const [siteTheme, setSiteTheme] = useState('');

useEffect(() => {
  const html = document.querySelector('html');

  const checkThemeState = () => {
    switch(html?.dataset.theme) {
      case 'light':
        setSiteTheme('light')
        break;
      case 'dark':
        setSiteTheme('dark')
        break;
    }
  }

  //check on load
  checkThemeState();

  html?.addEventListener("click", () => {

    setTimeout(() => {
      checkThemeState();
    }, 0)

   }, false);

}, []);

return siteTheme;

}
export default useThemeState;

