import React from 'react';
import './SimpleCard.scss';

const SimpleCard = () => (
  <div class="simple-card card">
      <h2 class="card-title">Hirable Rooms</h2>
      <p class="card-desc">Anything room at green square</p>
  </div>
);

SimpleCard.propTypes = {
};

SimpleCard.defaultProps = {
};

export default SimpleCard;