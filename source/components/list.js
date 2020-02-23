import React, { Component } from "react";
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

import { Avatar, Date } from './index';

const Item = styled.View`
  background-color: #e1e1e1;
  border-radius: 10px;
  flex: 1;
  flex-direction: row;
  margin: 5px auto;
  padding: 10px;
  width: 90%;
`;

const Description = styled.View`
  flex: 1;
  margin-left: 10px;
`;

const Name = styled.Text`
  color: #4f5052;
  fontSize: 20;
  margin-top: 10px;
`;

const Dates = styled.View`
  background-color: #ccc;
  border-radius: 4px;
  flex-direction: row;
  overflow: hidden;
`;

class PeopleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        { id: 1, hasImage: true, imagePath: 'https://nerdcalistenico.com.br/lambdatauri/roberto.jpg', name: 'Roberto Gómez Bolaños', birthDate: '21.02.1929', deathDate: '28.11.2014' },
        { id: 2, hasImage: true, imagePath: 'https://nerdcalistenico.com.br/lambdatauri/bud.jpg', name: 'Bud Spencer', birthDate: '31.10.1929', deathDate: '27.06.2016' },
        { id: 3, hasImage: true, imagePath: 'https://nerdcalistenico.com.br/lambdatauri/george.jpg', name: 'George Gaynes', birthDate: '16.05.1917', deathDate: '15.02.2016' },
        { id: 4, hasImage: true, imagePath: 'https://nerdcalistenico.com.br/lambdatauri/keanu.jpg', name: 'Keanu Reeves', birthDate: '02.09.1964', deathDate: null }
      ],
    };
  }

  render() {
    return (
      <>
        {this.state.list.map(item => {
          return (
            <Item key={item.id}>
              <Avatar hasImage={item.hasImage} imagePath={item.imagePath} />
              <Description>
                <Dates>
                  {item.birthDate && <Date bg="#d1618a">{item.birthDate}</Date>}
                  {item.deathDate && <Date bg="#32366b">{item.deathDate}</Date>}
                </Dates>
                <Name>{item.name}</Name>
              </Description>
            </Item>
          );
        })}
      </>
    );
  }
}

export default PeopleList;
