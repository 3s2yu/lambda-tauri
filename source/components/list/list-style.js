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
  background-color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: #e1e1e1;
  box-shadow: 0 2px 4px #ccc;
  flex: 1;
  flex-direction: row;
  padding: 10px;
`;

export const UIDates = styled.View`
  background-color: #ccc;
  flex-direction: row;
`;

export const UIButtons = styled.View`
  background: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-width: 1px;
  border-top-color: #f1f1f1;
  flex-direction: row;
  justify-content: flex-end;
  padding: 4px;
`;

export const UIHeader = styled.View`
  background: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #f1f1f1;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const UIName = styled.Text`
  color: #4f5052;
  font-size: 14px;
  padding: 8px;
`;
