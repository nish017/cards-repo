import React from 'react';
import './ImageCard.scss';

const ImageCard = () => {
  
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
  <article tabindex="0" class="image-card card" aria-label="card">
      <div  tabindex="0" class="img-container" aria-label="image container">
      </div>
      <div className="text-container">
        <h2 class="card-title">
          <a onClick={handleClick}>
            Hirable Rooms
          </a>
        </h2>
        <p class="card-desc">Anything room at green square</p>
      </div>
  </article>
)};

ImageCard.propTypes = {
};

ImageCard.defaultProps = {
};

export default ImageCard;