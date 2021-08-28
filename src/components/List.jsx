import { useState } from 'react'
import Image from './Image'

const OFFSET_PERCENTAGE = 100;

function List({ images, maxNumberPerPage }) {
  const [position, setPosition] = useState(0);

  function handlePrevious() {
    setPosition((curPosition) => curPosition + OFFSET_PERCENTAGE);
  }

  function handleNext() {
    setPosition((curPosition) => curPosition - OFFSET_PERCENTAGE);
  }

  function hasPrevious() {
    return position < 0;
  }

  function hasNext() {
    if (images.length <= maxNumberPerPage) return false;
    const numberOfPages = Math.floor(images.length / maxNumberPerPage);
    return position > numberOfPages * -OFFSET_PERCENTAGE;
  }

  return (
    <div className='list-container'>
      <button className='control prev' onClick={handlePrevious} disabled={!hasPrevious()}>{'<'}</button>
      <div className='carousel' style={{transform: `translateX(${position}%)`}}>
        { images.map((image, i) => ( <Image key={i} { ...image } /> )) }
      </div>
      <button className='control next' onClick={handleNext} disabled={!hasNext()}>{'>'}</button>
  </div>)
}

export default List