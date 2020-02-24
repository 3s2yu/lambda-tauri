import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

export const UIButton = styled.TouchableOpacity`
  align-items: center;
  background-color: ${props => props.bg};
  border-radius: 6px;
  margin-left: 20px;
  padding: 5px;
  width: 16%;
`;

export const UIContent = styled.Text`
  text-align: center;
`;
