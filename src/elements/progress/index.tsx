import React, { FC } from 'react';

import { Container, ProgressBar } from './styles';

const Progress: FC<{ progressPercentage: number }> = ({
  progressPercentage,
}) => {
  return (
    <Container>
      <ProgressBar percentage={progressPercentage} />
    </Container>
  );
};

export default Progress;
