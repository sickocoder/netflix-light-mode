import React from 'react';

import { Image } from 'react-native';
import { Progress } from '..';
import PlayIcon from '../../../assets/images/icons/play.png';

import {
  Container,
  ContentDescriptionWrapper,
  ContentDescriptionText,
  PlayWrapper,
  PlayText,
} from './styles';

interface Props {
  image: Object;
  description: string;
  watchPercetage?: number;
}

const ContinueWatching: React.FC<Props> = ({
  image,
  description,
  watchPercetage = 0,
}) => {
  return (
    <Container source={image}>
      <Progress progressPercentage={watchPercetage} />
      <ContentDescriptionWrapper intensity={80} tint="light">
        <ContentDescriptionText>{description}</ContentDescriptionText>
        <PlayWrapper>
          <Image source={PlayIcon} />
          <PlayText>Play</PlayText>
        </PlayWrapper>
      </ContentDescriptionWrapper>
    </Container>
  );
};

export default ContinueWatching;
