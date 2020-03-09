import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export const UIActions = styled.View`
  align-items: center;
  flex: 1;
  margin: 20px 0 40px 0;
`;

export const UIView = styled.View`
  flex: 1;
  padding: 10px;
`;

export const UIAvatar = styled.View`
  align-items: center;
  flex: 1;
  position: relative;
`;

export const UIEdit = styled.View`
  border: 1px solid #b7406d;
  border-radius: 32px;
  flex: 1;
  margin-right: -90px;
  overflow: hidden;
  position: absolute;
  bottom: 10px;
  right: 50%;
`;

export const UIError = styled.View`
  background: #ffb4b4;
  border: 1px solid #900;
  border-radius: 4px;
  flex: 1;
  padding: 10px;
`;

export const UIErrorMessage = styled.Text`
  color: #900;
`;
