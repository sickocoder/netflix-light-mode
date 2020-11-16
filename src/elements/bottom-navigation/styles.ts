import { BlurView } from 'expo-blur';
import Constants from 'expo-constants';
import styled from 'styled-components/native';

export const BottomNavigation = styled(BlurView)`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;

  position: absolute;
  bottom: 0;
  padding-top: 6px;
  padding-bottom: ${Constants.statusBarHeight}px;
`;

export const BottomNavigationItem = styled.View`
  width: 20%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const BottomNavigationItemText = styled.Text<{ selected?: boolean }>`
  font-size: 11px;
  font-weight: 600;
  margin-top: 12px;
  color: ${(props) => (props.selected ? '#D81F26' : '#000')};
  text-transform: capitalize;
`;
