import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  flex-direction: column;
  justify-content: space-between;
  padding-top: ${Constants.statusBarHeight}px;
`;

export const LogoWrapper = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;

  margin: 8px 0;
`;

export const ContentWrapper = styled.ScrollView`
  flex: 1;
`;

export const SectionTitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  padding: 16px;
`;

export const SectionTitle = styled.Text`
  font-size: 16px;
  margin-right: 16px;
`;
