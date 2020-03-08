import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

export const UIButton = styled.TouchableOpacity`
  align-items: center;
  background-color: ${props => props.bg};
  border-radius: 6px;
  height: ${props => props.height};
  justify-content: center;
  margin-left: ${props => props.leftSpace ? '10px' : 0} ;
  margin-right: ${props => props.rightSpace ? '10px' : 0} ;
  padding: 5px;
  width: ${props => props.width};
`;

export const UIContent = styled.Text`
  color: ${props => props.color};
  font-size: 17px;
  text-align: center;
`;
