import './code-block.scss';
import React, {FC, Children, useRef} from 'react';

interface CodeBlockProps {
  children: React.ReactNode;
  typeLabel?: string;
}

// -----------------------------------------------------------------------------

const CodeBlock: FC<CodeBlockProps> = props => {
  const {
    children,
    typeLabel
  } = props;
  const panelsContainer = useRef<HTMLInputElement>(null);

  // -----------------------------------------------------------------------------

  const handleExpandCodeBlock = (keyName: string, event: any) => {
    if(panelsContainer.current !== null) {
      const tabBtn = event.target;
      const panel = panelsContainer.current.querySelector(`#${keyName}`);
      tabBtn?.parentElement?.classList.add('is-active');
      panel?.parentElement?.classList.add('is-open');
    } else {
      console.log('ref is null');
    }
  }

  // -----------------------------------------------------------------------------

  const handleCollapseCodeBlock = (keyName: string, event: any) => {
    if(panelsContainer.current !== null) {
      const panel = panelsContainer.current.querySelector(`#${keyName}`);
      const activeBtn = document.querySelector(`[data-tab="${keyName}"]`);
      activeBtn?.parentElement?.classList.remove('is-active');
      panel?.parentElement?.classList.remove('is-open');
    } else {
      console.log('ref is null');
    }
  }

  // -----------------------------------------------------------------------------

  const parentsCodeGroup = Children.map(children, (tabBtn, i) => {
    const allItems: any = children

    if(React.isValidElement(tabBtn)) {

      return (
        <div className='tabs-nav-item property' key={i}>
          <span className='key'>{tabBtn.props.keyName}:</span>
          <button
            className='expand-btn'
            data-tab={tabBtn.props.keyName}
            onClick={(event) => handleExpandCodeBlock(tabBtn.props.keyName, event)}
          >
            {`{...}`}
            { i != allItems.length -1 && <>,</>}
          </button>
        </div>
      );
    }
    return <p style={{color: 'red'}}>not a tab! use the proper tab component!!</p>
  })

  // -----------------------------------------------------------------------------

  const codeGroups = Children.map(children, (panel, i) => {
    const allItems: any = children;
    if(React.isValidElement(panel)) {

      return (
        <div className={typeLabel ? 'panel' : 'inside-panel'} key={i}>
          <div className='panel-actions property' key={i}>
            {/* button for the first groups */}
            {typeLabel &&
              <>
              <button
                className='expand-btn'
                data-tab={panel.props.keyName}
                onClick={(event) => handleCollapseCodeBlock(panel.props.keyName, event)}
              >
                <svg><use href="/img/sprite.svg#caret"></use></svg>
                <span className='key'>{panel.props.keyName}:</span>
              </button>
              {`{`}
              </>
            }

            {/* button expand to inner group block */}
            {!typeLabel &&
              <>
                <div className='inner-item property' key={i}>
                  <span className='key'>{panel.props.keyName}:</span>
                  <button
                    className='expand-btn'
                    data-tab={panel.props.keyName}
                    // onClick={(event) => handleExpandCodeBlock(panel.props.keyName, event)}
                  >
                    {`{...}`}
                    { i != allItems.length -1 && <>,</>}
                  </button>
                </div>
              </>
            }

          </div>
          {panel}

          {typeLabel &&
            <>{`},`}</>
          }
        </div>
      );

    }
    return <p style={{color: 'red'}}>not a tab! use the proper tab component!! or call Benjo for instructions</p>
  })

  // -----------------------------------------------------------------------------

  return (
    <section className='code-block-section'>
      <div className='tabs-header'>
        {typeLabel &&
          <span className='type-label'>{typeLabel}{`(`}</span>
        }
        {/* {!typeLabel &&
          <span>{`{`}</span>
        } */}

        {typeLabel &&
          <nav className='tabs-nav'>{parentsCodeGroup}</nav>
        }

        {typeLabel &&
          <span className='type'>{`)`}</span>
        }
        {/* {!typeLabel &&
          <span>{`}`}</span>
        } */}


      </div>
      <div className='panels-container' ref={panelsContainer}>{codeGroups}</div>
    </section>
  );
};

export default CodeBlock;