import './ow-table.scss';
import React, {FC, Children} from 'react';
import useThemeState from '../hooks/theme-state';

interface OWTableProps {
  children: React.ReactNode;
  headerCellNames: Array<string>;
}

// -----------------------------------------------------------------------------

const OWTable: FC<OWTableProps> = props => {
  const {
    children,
    headerCellNames = []
  } = props;
  const themeState = useThemeState();

  // -----------------------------------------------------------------------------

  // const handleShowHideTab = (tabID: string, event: any) => {
  //   const tabBtn = event.target;
  //   const panel = document.querySelector(`#${tabID}`);
  //   const activePanel = panel?.parentElement?.querySelector('.is-open');
  //   const activeTabBtn = tabBtn?.parentElement?.querySelector('.is-active');

  //   activePanel?.classList.remove('is-open');
  //   activeTabBtn?.classList.remove('is-active');
  //   tabBtn?.classList.add('is-active');
  //   panel?.classList.add('is-open');
  // }

  // -----------------------------------------------------------------------------

  // const panels = Children.map(children, (panel, i) => {
  //   if(React.isValidElement(panel)) {
  //     return React.cloneElement(panel as React.ReactElement<any>, {
  //       className: `panel ${i == 0 ? 'is-open' : ''}`
  //     });
  //   }
  //   return <p style={{color: 'red'}}>not a tab! use the proper tab table!! or call Benjo for instructions</p>
  // })

  // -----------------------------------------------------------------------------

  return (
    <table className='ow-table'>
      <thead className='ow-table-header'>
        <tr className='ow-table-row'>
          {headerCellNames.length != 0 && 
            headerCellNames.map( (th, i) => <th key={i}> {th} </th> )
          }
        </tr>
      </thead>

      <tbody>
        {children}
      </tbody>
      
    </table>
  );
};

export default OWTable;