import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export const UIItem = styled.View`
  flex: 1;
  margin: 5px auto;
  width: 90%;
`;

export const UIDescription = styled.View`
  flex: 1;
`;

export const UIContent = styled.View`
  background-color: #f1f1f1;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  flex: 1;
  flex-direction: row;
  padding: 10px;
`;

export const UIName = styled.Text`
  background: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: #4f5052;
  flex: 1;
  font-size: 14px;
  padding: 8px;
  width: 100%;
`;

export const UIDates = styled.View`
  background-color: #ccc;
  flex-direction: row;
`;

export const UIButtons = styled.View`
  background: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  flex-direction: row;
  justify-content: flex-end;
  padding: 4px;
`;

export const UIOptionsButton = styled.View`
  position: absolute;
  bottom: -5px;
  right: -5px;
  width: 40px;
`;
