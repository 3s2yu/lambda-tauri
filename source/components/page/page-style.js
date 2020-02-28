import { View } from 'react-native';
import styled from 'styled-components/native';

export const UIPage = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

export const UIMain = styled.View`
  flex: 1;
  padding: 20px 0 ${props => props.plus ? '60px' : '0' };
`;

export const UIPlus = styled.View`
  align-items: center;
  background: #000;
  border-radius: 25px;
  height: 50px;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 50px;
`;
