import './image-box-modal.scss';
import React, { useState, Children } from 'react';


function ImageBoxModal(props) {
 const { children } = props;

 const [sliderClassName, setSliderClassName] = useState('image-box-modal');
 const arrayChildren = Children.toArray(children);

const handleFancyBox = () => {
  setSliderClassName('image-box-modal is-active')
}

const handleCloseFancyBox = () => {
  setSliderClassName('image-box-modal');
}


// ---------------------------------------------------------------------------

  return (
    <section className={sliderClassName}>

      <div className="image-box-modal-backdrop" onClick={handleCloseFancyBox} onWheel={handleCloseFancyBox}></div>

      <div className='image-box-modal-inner'>

        <a onClick={handleFancyBox}>

          {children}

          { arrayChildren.map((img, i) => {
              return (
                <p key={i}> {img.props.alt}</p>
              );
            })
          }

        </a>

      </div>

      <div className='image-modal' onWheel={handleCloseFancyBox}>

      {children}

      { arrayChildren.map((img, i) => {
          return (
            <p key={i}> {img.props.alt}</p>
          );
        })
      }
      </div>

    </section>
  );

}

export default ImageBoxModal;