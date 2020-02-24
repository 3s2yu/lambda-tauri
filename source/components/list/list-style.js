import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export const UIItem = styled.View`
  background-color: #f6f6f6;
  border-radius: 10px;
  flex: 1;
  margin: 5px auto;
  width: 90%;
`;

export const UIContent = styled.View`
  background-color: #e1e1e1;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  flex: 1;
  flex-direction: row;
  padding: 10px;
`;

export const UIDescription = styled.View`
  flex: 1;
`;

export const UIName = styled.Text`
  background: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: #4f5052;
  flex: 1;
  font-size: 20px;
  padding: 10px;
  width: 100%;
`;

export const UIDates = styled.View`
  background-color: #ccc;
  flex-direction: row;
`;

export const UIButtons = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  right: 0;
`;
