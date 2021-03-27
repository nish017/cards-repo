import React from 'react';
import './ImageCard.scss';

const ImageCard = () => (
  <div class="image-card card">
      <div class="img-container">
      </div>
      <div class="desc-panel">
        <h2 class="card-title">Hirable Rooms</h2>
        <p class="card-desc">Anything room at green square</p>
      </div>
  </div>
);

ImageCard.propTypes = {
};

ImageCard.defaultProps = {
};

export default ImageCard;