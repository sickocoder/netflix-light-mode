import styled from 'styled-components/native';
import { BlurView } from 'expo-blur';

export const Container = styled.ImageBackground`
  width: 160px;
  height: 240px;
  border-radius: 15px;
  overflow: hidden;

  justify-content: flex-end;
`;

export const ContentDescriptionWrapper = styled(BlurView)`
  padding: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContentDescriptionText = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

export const PlayWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PlayText = styled.Text`
  font-weight: 500;
  margin-left: 8px;
`;
