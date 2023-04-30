import './tree-menu.scss';
import React, {FC, Children, useState, useEffect} from 'react';

interface TreeMenuProps {
  children: React.ReactNode;
  codeBlockJson: String;
}

// -----------------------------------------------------------------------------

const TreeMenu: FC<TreeMenuProps> = props => {
  const {
    children,
    codeBlockJson
  } = props;


  // -----------------------------------------------------------------------------
  const [codeBlockData, setCodeBlockData] = useState<any>(null);
  const jsonPath = `/code-blocks-jsons/${codeBlockJson}`;

  const fetchJson = () => {
    fetch(jsonPath)
    .then(response => {
      return response.json();
    }).then(data => {
      // const properties = [];
      // console.log(data)
      // for (const key in data) {
      //   console.log(data[item])
      //   properties.push(data[item]);
      // }
      // console.log(properties)
      setCodeBlockData(data);
    }).catch((e: Error) => {
      console.log(e.message);
    });
  }
  useEffect(() => {
    fetchJson()
  },[])

  if(codeBlockData != null) {
    console.log(codeBlockData)
  }

  if(!codeBlockData) {
    return <p>Loading</p>
  }

  const firstGroup = Object.keys(codeBlockData).map((key, i) => {
    console.log(key.length)
    return (
      <li key={i}>
      <div className='property'>
        <span className='key'>{key}:</span>
        <button className='expand-btn'>{`{...}`}</button>
      </div>
    </li>
    );

  })


  return (
    <section className='tree-menu-block'>
      <span className='type'>Start{`(`}</span>
      <ul className='tree-menu'>

        {firstGroup}

        {/* <li>
          <div className='property'>
            <span className='key'>Sound:</span>
            <button className='expand-btn'>{`{...}`}</button>
          </div>
          <ul className='tree-menu-sub-level-1'>
            <li>
              <div className='property'>
                <span className='key'>buffer_length</span>
                <span className='value'>20000</span>
              </div>
            </li>
          </ul>
        </li> */}
      </ul>
      <div className='expanded-block'>
        <div className=''></div>
      </div>
      <span className='type'>{`)`}</span>
    </section>
  );
};

export default TreeMenu;