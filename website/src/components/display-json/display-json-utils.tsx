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

export const updateUrl = (targetHash: any) => {
  let url;

  if(location.hash) { //check if url already have #hash name or not
    url = `${window.location.href.split('#')[0]}#${targetHash}`;
  } else {
    url = `${location.href}#${targetHash}`;
  }

  window.history.replaceState(null, document.title, url);
}

export const checkExpandAll = (codeBlockID: string) => {
  const allClassNames = '.group-item, .sub-group-item, .grouped-item';
  const codeBlock = document.getElementById(codeBlockID);
  const expandAllBtn = codeBlock?.querySelector('.expand-all-btn');
  const allExpandableItemsLength = codeBlock?.querySelectorAll(allClassNames).length;
  const allOpenItemsLength = codeBlock?.querySelectorAll('.is-open').length;

  if(allExpandableItemsLength === allOpenItemsLength) {
    expandAllBtn?.classList.add('hidden');
  } else {
    expandAllBtn?.classList.remove('hidden');
  }
}

export const checkHashUrl = (codeBlock: any, liveLink?: string) => {
  let hash;
  let scrollDelay = 0;

  //check if live link button on the same page or new url link
  if(liveLink) {
    hash = `#${liveLink}`;
  } else {
    hash = location.hash;
    scrollDelay = 1000;
  }

  if(hash === '') return; // stop if no hash exist
  checkIfHashIsTheCodeBlockItself(hash, scrollDelay);

  let item = codeBlock.querySelector(hash);

  if(item === null) return; // stop if no hash item exist inside code block

  item.classList.add('target'); // highlight the inner target

  if (!item.classList.contains('single-property')) { //if its a group item open it
    item.classList.add('is-open');
  }

  if (item.classList.contains('group-item')) { //if its a main group item open it and hide it from navigation
    const btnDataSet = item.querySelector('.expand-btn').dataset.trigger;
    codeBlock.querySelector(`[data-group="${btnDataSet}"]`).click();
  }

  //loop parents groups
  while(item.parentNode) {

    if (item.parentNode.id === codeBlock.id) { //stop in the code block container and scroll to target
      scrollToTarget(item, scrollDelay);
      break;
    }

    // console.log(item.parentNode.id)

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

const checkIfHashIsTheCodeBlockItself = (hash: string, delay: number) => {
  const cb = document.querySelector(hash);
  if(cb === null) return;

  if (cb.classList.contains('code-block-section')) { //if its the code block itself, just scroll to him
    scrollToTarget(cb, delay);
  }
}

const scrollToTarget = (target: any, delay: number) => {
  const headerOffset = 70;

  setTimeout(() => {
    const elementPosition = target.getBoundingClientRect().top;
    const bodyTopReact = document.body.getBoundingClientRect().top;
    // console.log(elementPosition)
    // console.log(window.pageYOffset)
    const offsetPosition = elementPosition - bodyTopReact - headerOffset;

    window.scrollTo({
      behavior: "smooth",
      top: offsetPosition
    });
  }, delay);

}