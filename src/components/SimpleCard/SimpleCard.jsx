import React from 'react';
import './SimpleCard.scss';

const SimpleCard = () => {

  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }
  return (
    <article tabindex="0" class="simple-card card" aria-label="card">
      <div className="text-container">
        <h2 class="card-title">
          <a onClick={handleClick}>
            Hirable Rooms
          </a>
        </h2>
        <p class="card-desc">Anything room at green square</p>
      </div>
    </article>
  )
};

SimpleCard.propTypes = {
};

SimpleCard.defaultProps = {
};

export default SimpleCard;