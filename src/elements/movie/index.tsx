import React from 'react';

import { Container } from './styles';

const Movie: React.FC<{ image: Object }> = ({ image }) => {
  return <Container source={image} />;
};

export default Movie;
