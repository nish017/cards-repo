import React from 'react';
import PropTypes from 'prop-types';
import { ImageCard, SimpleCard } from '../../components';
// import './Cards.scss';

const Cards = () => (
  <div>
      <SimpleCard />
      <ImageCard />
  </div>
);

Cards.propTypes = {
};

Cards.defaultProps = {
};

export default Cards;