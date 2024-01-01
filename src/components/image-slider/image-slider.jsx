import './image-slider.scss';
import React, { useEffect, useRef, useState, Children } from 'react';

function ImageSlider(props) {
 const { children, miniSlides } = props;

 const arrayChildren = Children.toArray(children);
 const scrollContainerRef = useRef(null);
 const [slideSize, setSlideSize] = useState(658);
 const [dragDirection, setDragDirection] = useState('');
 const [sliderClassName, setSliderClassName] = useState('ow-image-slider');
 const [btnDisabled, setBtnDisabled] = useState(false);
 const [imgSrc, setImgSrc] = useState('');
 const [imgTxt, setImgTxt] = useState('');


const handleScrollImageSize = () => {
  let slideImgSize = (scrollContainerRef.current).querySelector('li:first-child img').clientWidth;
  let sizeWithGap = slideImgSize + 16; //16 is the gap size between slides
  setSlideSize(sizeWithGap)

  return sizeWithGap;
}

// ---------------------------------------------------------------------------
const handleScrollPositionChanged = (scrollDelta) => {
  const newScrollPos = scrollContainerRef.current.scrollLeft + scrollDelta;
  const scrollable = scrollContainerRef.current;
  scrollable.parentElement.classList.remove('scroll-start');
  scrollable.parentElement.classList.remove('scroll-end');
  if (newScrollPos <= 0) {
    scrollable.parentElement.classList.add('scroll-start');
  } else if (
    newScrollPos + scrollable.offsetWidth >=
    scrollable.scrollWidth
  ) {
    scrollable.parentElement.classList.add('scroll-end');
  }
};


// ---------------------------------------------------------------------------
const scroll = (direction) => {

  //disable consecutively clicking
  setBtnDisabled(true)
  setTimeout(() => {
    setBtnDisabled(false)
  }, 500);

  const scrollDelta = direction * slideSize;
  scrollContainerRef.current.scrollBy({
    left: scrollDelta,
    behavior: 'smooth',
  });

  handleScrollPositionChanged(scrollDelta);

};

// ---------------------------------------------------------------------------

let oldx = 0;
// let direction = ''

const handleDragSlide = (e) => {

  if (e.pageX < oldx) {
    // direction = "left"
    setDragDirection("right")
  } else if (e.pageX > oldx) {
    // direction = "right"
    setDragDirection("left")

  }

  oldx = e.pageX;
  // console.log(direction)

}

const handleDragDirection = (e) => {
  if(dragDirection == 'right') {
    scroll(1)
  } else if(dragDirection == 'left') {
    scroll(-1)
  }
}
// ---------------------------------------------------------------------------

const handleFancyBox = (e) => {
   const getImgSrc = (e.target).getAttribute('src');
   const getImgText = (e.target).getAttribute('alt');
   setImgSrc(getImgSrc)
   setImgTxt(getImgText)
   setSliderClassName('ow-image-slider is-active')

  // const currentSlide = (e.target).parentElement.dataset.current;
  // scroll(-(arrayChildren.length))
  // setTimeout(() => { handleScrollImageSize() }, 200);
}

const handleCloseFancyBox = () => {
  setSliderClassName('ow-image-slider');

  // scroll(-(arrayChildren.length))

  // setTimeout(() => { handleScrollImageSize() }, 200);
}


// ---------------------------------------------------------------------------
useEffect(() => {

  //reset scroll by the image size on window resize
  // handleScrollImageSize()
  window.addEventListener('resize', handleScrollImageSize);
  // window.addEventListener("scroll", handleCloseFancyBox);
  //react doesn't do it accurate as this for some strange reason...
  document.addEventListener('mousemove', handleDragSlide);

  //this code hide the ghost dragged image when drag left or right
  document.addEventListener("dragstart", function( event ) {
    var img = new Image();
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
    event.dataTransfer.setDragImage(img, 0, 0);
}, false);


}, []);

// ---------------------------------------------------------------------------

  return (
    <section className={sliderClassName}>
      <div className="modal-backdrop" onClick={handleCloseFancyBox} onWheel={handleCloseFancyBox}></div>

       <div className='ow-image-slider-inner scroll-start'>

        <button className="btn-next" onClick={() => scroll(1)} disabled={btnDisabled}>
          <svg>
            <use href="../../img/sprite.svg#next" />
          </svg>
        </button>

        <ul
          className={miniSlides ? 'mini' : ''}
          ref={scrollContainerRef}>  {/*onWheel={handleScrollWheel} */}

          { arrayChildren.map((slide, i) => {
              return (
                <li
                  key={`slide-${i}`}
                  data-current={i}
                  // onMouseMove={handleDragSlide}
                  onDragEnd={handleDragDirection}
                  draggable={true}
                >
                  <div onClick={handleFancyBox}>{slide}</div>
                  <p>{slide.props.alt}</p>
                </li>
              );
            })
          }

        </ul>

        <button className="btn-prev" onClick={() => scroll(-1)} disabled={btnDisabled}>
          <svg>
              <use href="../../img/sprite.svg#prev" />
          </svg>
        </button>

      </div>

      <div className='slider-image-modal' onClick={handleCloseFancyBox} onWheel={handleCloseFancyBox}>
          <img src={imgSrc} />
          <p>{imgTxt}</p>
      </div>
    </section>
  );

}

export default ImageSlider;