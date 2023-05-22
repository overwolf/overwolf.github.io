import './code-block.scss';
import React, {FC, Children, useRef, useEffect} from 'react';
import { killGlobalTarget } from '../utils/utils';
import {
  bracketEndCheck,
  checkExpandAll,
  checkHashUrl,
  checkIfPropertiesExpanded,
  CodeBlockContext
} from './display-json-utils';
import CodeBlockExpandAllButton from './display-json-expand-all-button';

interface CodeBlockProps {
  children: React.ReactNode;
  id: string;
  typeLabel?: string;
  color?: string;
}

// -----------------------------------------------------------------------------

const DisplayJSON: FC<CodeBlockProps> = props => {
  const {
    children,
    typeLabel,
    id,
    color,
  } = props;
  const groupsContainer = useRef<HTMLDivElement>(null);
  const triggersContainer = useRef<HTMLDivElement>(null);

  // -----------------------------------------------------------------------------

  useEffect(() => {
    // TODO: Change this to use a global context rather than a global classname
    killGlobalTarget();
    checkHashUrl(groupsContainer.current?.parentElement);
  }, []);

  // -----------------------------------------------------------------------------

  const handleExpandCodeBlock = (keyName: string, event: any) => {
    if(groupsContainer.current !== null) {
      const trigger = event.target;
      const group = groupsContainer.current.querySelector(`[data-label="${keyName}"]`);
      trigger?.parentElement?.classList.add('is-open');
      group?.parentElement?.parentElement?.classList.add('is-open');
      checkIfPropertiesExpanded(triggersContainer?.current);
      checkExpandAll(id);
    } else {
      console.log('ref is null');
    }
  }

  // -----------------------------------------------------------------------------

  const handleCollapseCodeBlock = (keyName: string, event: any) => {
    if(groupsContainer.current !== null) {
      const group = groupsContainer.current.querySelector(`[data-label="${keyName}"]`);
      const activeBtn = document.querySelector(`[data-group="${keyName}"]`);
      activeBtn?.parentElement?.classList.remove('is-open');
      group?.parentElement?.parentElement?.classList.remove('is-open');
      checkIfPropertiesExpanded(triggersContainer?.current);
      checkExpandAll(id);
    } else {
      console.log('ref is null');
    }
  }

  // -----------------------------------------------------------------------------

  const handleShowExpandedGroup = (event: any) => {
    if(triggersContainer.current !== null) {
      const thisBtn = event.target;
      const mainTriggerName = thisBtn.dataset.trigger;
      const mainTrigger = triggersContainer.current.querySelector(`[data-group="${mainTriggerName}"]`);
      thisBtn?.parentElement?.parentElement?.classList.add('is-open');
      mainTrigger?.parentElement?.classList.add('is-open');
      checkIfPropertiesExpanded(triggersContainer?.current);
      checkExpandAll(id);
    } else {
      console.log('ref is null');
    }
  }

  // -----------------------------------------------------------------------------

  const parentsCodeGroup = Children.map(children, (groupedTrigger, i) => {
    const allItems: any = children;
    const bracket: any = bracketEndCheck(i, allItems.length);

    if(React.isValidElement(groupedTrigger)) {

      return (
        <div className='grouped-item' key={i}>
          <button
            className='expand-btn'
            data-group={groupedTrigger.props.groupKeyName}
            onClick={(event) => handleExpandCodeBlock(groupedTrigger.props.groupKeyName, event)}
          >
             <span className='key'>{groupedTrigger.props.groupKeyName}:</span>
            {`{...}`}
            {bracket}
          </button>
        </div>
      );
    }
    return <p style={{color: 'red'}}>not a Group! use the proper Group component!!</p>
  })

  // -----------------------------------------------------------------------------

  const codeGroups = Children.map(children, (group, i) => {
    const allItems: any = children;
    const bracket: any = bracketEndCheck(i, allItems.length);
    if(React.isValidElement(group)) {

      return (
        <div className='group-item group'
          key={i}
          id={`${group.props.id ? group.props.id : group.props.groupKeyName}`}
        >
          <div className='grouped-btn'>
            <button
              className='expand-btn'
              data-trigger={group.props.groupKeyName}
              onClick={(event) => handleShowExpandedGroup(event)}
            >
              <svg><use href="/img/sprite.svg#caret"></use></svg>
              <span className='key'>
                {group.props.groupKeyName}:
              </span>
              <span>
                {`{...}`}
                {bracket}
              </span>
            </button>
          </div>

          <div className='expanded-group'>
            <div className='expanded-group-btn' key={i}>
              <button
                className='collapse-btn'
                data-group={group.props.groupKeyName}
                onClick={(event) => handleCollapseCodeBlock(group.props.groupKeyName, event)}
              >
                <svg><use href="/img/sprite.svg#caret"></use></svg>
                <span className='key'>{group.props.groupKeyName}:</span>
              </button>
              {`{`}
            </div>

            {group}

           <div className='bracket'>
            {`}`}
            {bracket}
           </div>
          </div>
        </div>
      );

    }
    return <p style={{color: 'red'}}>not a Group! use the proper Group component!! or call Benjo for instructions</p>
  })

  // -----------------------------------------------------------------------------

  return (
    <CodeBlockContext.Provider value={id}>
      <section className='code-block-section' id={id}>
        <CodeBlockExpandAllButton />

        <div className='first-group'>
          <span
            className={`type-label ${color}`}
          >
              {typeLabel}
              <span className='bracket'>{`(`}</span>
          </span>

          <nav
            className='groups-nav'
            ref={triggersContainer}
          >
              {parentsCodeGroup}
          </nav>
        </div>

        <div
          className='groups-container'
          ref={groupsContainer}
        >
            {codeGroups}
        </div>

      </section>
    </CodeBlockContext.Provider>
  );
};

export default DisplayJSON;