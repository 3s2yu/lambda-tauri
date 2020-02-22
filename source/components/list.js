import React, { Component } from "react";
import styled from 'styled-components/native';

import { Avatar, Button } from './index';

const Item = styled.View`
  margin: 5px 0;
`;

const Person = styled.View`
  align-items: center;
  flex-direction: row;
  flex-flow: row wrap;
  padding: 10px;
`;

const Name = styled.Text`
  fontSize: 18;
  margin-left: 10px;
  textAlign: center;
`;

const Dates = styled.View`
  background-color: #cccccc;
  flex-direction: row;
  width: 100%;
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
              <Person>
                <Avatar hasImage={item.hasImage} imagePath={item.imagePath} />
                <Name>{item.name}</Name>
              </Person>
              <Dates>
                {item.birthDate && <Button bg="#d1618a">{item.birthDate}</Button>}
                {item.deathDate && <Button bg="#32366b">{item.deathDate}</Button>}
              </Dates>
            </Item>
          );
        })}
      </>
    );
  }
}

export default PeopleList;
