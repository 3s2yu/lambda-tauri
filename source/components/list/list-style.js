import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export const UIItem = styled.View`
  background-color: #e1e1e1;
  border-radius: 10px;
  flex: 1;
  flex-direction: row;
  margin: 15px auto;
  padding: 10px;
  width: 90%;
`;

export const UIDescription = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const UIName = styled.Text`
  color: #4f5052;
  font-size: 20px;
  margin: 5px 0;
`;

export const UIDates = styled.View`
  background-color: #ccc;
  border-radius: 4px;
  flex-direction: row;
  margin-top: -30px;
  overflow: hidden;
`;

export const UIButtons = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  right: 0;
`;
