// import React from "react";

export const killGlobalTarget = () => {
 // skippy want to check if target class name exist more the once on the page and kill it
  const links = document.querySelectorAll('article a');
  links.forEach(link => {
    link.addEventListener('click', ()=> {
      document.querySelector('.target')?.classList.remove('target');
    });
  });
}
