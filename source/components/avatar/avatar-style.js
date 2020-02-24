import { Image } from "react-native";
import styled from 'styled-components/native';

export const UIImage = styled.Image`
  border-radius: 10px;
  border-top-right-radius: 0;
  border-color: #fff;
  border-width: 2px;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
`;
