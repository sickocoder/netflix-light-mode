import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 4px;
  background-color: #fff;
`;

export const ProgressBar = styled(Container)<{ percentage: number }>`
  width: ${(props) => props.percentage}%;
  background-color: #f00;
`;
