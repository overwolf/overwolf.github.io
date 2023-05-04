import React, { createContext } from "react";

export const CodeBlockContext = createContext('');
export const MainGroupContext = createContext('');
export const SubGroupContext = createContext('');

export const bracketEndCheck = (index: any, length: any) => {
  if(length == undefined) { // give `)` to single item
    return (<span className='bracket'>{`)`}</span>)
  }
  else if (index != length -1) { //hide ',' from last item
    return <span className='bracket'>{`,`}</span>;
  }
  else if (index == length -1) { //give `)` to last item
    return (<span className='bracket'>{`)`}</span>)
  }
}

export const checkIfPropertiesExpanded = (triggersSection: any) => {
  const collapsedTriggers = triggersSection.querySelectorAll('.is-open');
  const closeAllBtn = triggersSection.parentElement.previousElementSibling.querySelector('.close-all-btn');
  if(collapsedTriggers.length != 0) {
    closeAllBtn.classList.remove('hidden');
  } else {
    closeAllBtn.classList.add('hidden');
  }
}

export const checkHashUrl = (codeBlock: any) => {
  const hash = location.hash;

  if(hash === '') return; // stop if no hash exist

  let item = codeBlock.querySelector(hash);
  item.classList.add('target');

  if (!item.classList.contains('single-property')) { //if its a group item open it
    item.classList.add('is-open');
  }

  if (item.classList.contains('group-item')) { //if its a main group item open it and hide it from navigation
    const btnDataSet = item.querySelector('.expand-btn').dataset.trigger;
    codeBlock.querySelector(`[data-group="${btnDataSet}"]`).click();
  }

  if(item === null) return; // stop if no hash item exist inside code block

  while(item.parentNode) {

    if (item.parentNode.id === codeBlock.id) { //stop in the code block container and scroll to target
      setTimeout(() => {
        scrollToTarget(item);
      }, 1000);
      break;
    } 

    console.log(item.parentNode.id)

    if (item.parentNode.classList.contains('group')) {
      item.parentNode.classList.add('is-open');
    }

    if (item.parentNode.dataset.label) {
      codeBlock.querySelector(`[data-group="${item.parentNode.dataset.label}"]`).click();
    }

    // Go one level up in the DOM tree
    item = item.parentNode;
  }

}

const scrollToTarget = (target: any) => {
  const headerOffset = 100;
  const elementPosition = target.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
       top: offsetPosition,
       behavior: "smooth"
  });
}