import React from 'react';
import PropTypes from 'prop-types';
import { ImageCard, SimpleCard } from '../../components';
import './Cards.scss';

const Cards = () => (
  <ul className="cards-container">
      <li>
        <SimpleCard />
      </li>
      <li>
        <ImageCard />
      </li>
      <li>
        <ImageCard />
      </li>
      <li>
        <SimpleCard />
      </li>
      <li>
        <ImageCard />
      </li>
      <li>
        <ImageCard />
      </li>
  </ul>
);

Cards.propTypes = {
};

Cards.defaultProps = {
};

export default Cards;