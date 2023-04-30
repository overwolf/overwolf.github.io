import './code-block.scss';
import React, {FC, Children, useRef} from 'react';
import bracketEndCheck from './code-block-utils';
import CodeBlockExpandAllButton from './code-block-expand-all-button';

interface CodeBlockProps {
  children: React.ReactNode;
  typeLabel?: string;
  color?: string;
}

// -----------------------------------------------------------------------------

const CodeBlock: FC<CodeBlockProps> = props => {
  const {
    children,
    typeLabel,
    color,
  } = props;
  const groupsContainer = useRef<HTMLDivElement>(null);
  const triggersContainer = useRef<HTMLDivElement>(null);

  // -----------------------------------------------------------------------------

  const handleExpandCodeBlock = (keyName: string, event: any) => {
    if(groupsContainer.current !== null) {
      const trigger = event.target;
      const group = groupsContainer.current.querySelector(`#${keyName}`);
      trigger?.parentElement?.classList.add('is-open');
      group?.parentElement?.parentElement?.classList.add('is-open');
    } else {
      console.log('ref is null');
    }
  }

  // -----------------------------------------------------------------------------

  const handleCollapseCodeBlock = (keyName: string, event: any) => {
    if(groupsContainer.current !== null) {
      const group = groupsContainer.current.querySelector(`#${keyName}`);
      const activeBtn = document.querySelector(`[data-group="${keyName}"]`);
      activeBtn?.parentElement?.classList.remove('is-open');
      group?.parentElement?.parentElement?.classList.remove('is-open');
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
          <span className='key'>{groupedTrigger.props.groupKeyName}:</span>
          <button
            className='expand-btn'
            data-group={groupedTrigger.props.groupKeyName}
            onClick={(event) => handleExpandCodeBlock(groupedTrigger.props.groupKeyName, event)}
          >
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
        <div className='group-item' key={i}>

          <div className='grouped-btn'>
            <span className='key'>{group.props.groupKeyName}:</span>
            <button
              className='expand-btn'
              data-trigger={group.props.groupKeyName}
              onClick={(event) => handleShowExpandedGroup(event)}
            >
              {`{...}`}
              {bracket}
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
    <section className='code-block-section'>
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
  );
};

export default CodeBlock;