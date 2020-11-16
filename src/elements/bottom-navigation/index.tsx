import React from 'react';

import { Image } from 'react-native';

import HomeIcon from '../../../assets/images/icons/home.png';
import ComingSoonIcon from '../../../assets/images/icons/coming-soon.png';
import DownloadsIcon from '../../../assets/images/icons/downloads.png';
import MoreIcon from '../../../assets/images/icons/more.png';
import SearchIcon from '../../../assets/images/icons/search.png';

import {
  BottomNavigation as Container,
  BottomNavigationItem,
  BottomNavigationItemText,
} from './styles';

const BottomNavigation: React.FC = () => {
  return (
    <Container intensity={87} tint="light">
      <BottomNavigationItem>
        <Image source={HomeIcon} />
        <BottomNavigationItemText selected>home</BottomNavigationItemText>
      </BottomNavigationItem>
      <BottomNavigationItem>
        <Image source={SearchIcon} />
        <BottomNavigationItemText>search</BottomNavigationItemText>
      </BottomNavigationItem>
      <BottomNavigationItem>
        <Image source={ComingSoonIcon} />
        <BottomNavigationItemText>coming soon</BottomNavigationItemText>
      </BottomNavigationItem>
      <BottomNavigationItem>
        <Image source={DownloadsIcon} />
        <BottomNavigationItemText>downloads</BottomNavigationItemText>
      </BottomNavigationItem>
      <BottomNavigationItem>
        <Image source={MoreIcon} />
        <BottomNavigationItemText>more</BottomNavigationItemText>
      </BottomNavigationItem>
    </Container>
  );
};

export default BottomNavigation;
