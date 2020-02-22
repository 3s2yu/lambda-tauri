import React, { Component } from "react";
import styled from 'styled-components/native';

import RobertoImage from '../assets/img/roberto.jpg';
import BudImage from '../assets/img/bud.jpg';
import GeorgeImage from '../assets/img/george.jpg';
import KeanuImage from '../assets/img/keanu.jpg';

import { Avatar, Button } from './index';

const ContainerView = styled.View`
  flex: 1;
`;

const List = styled.View`
  align-items: center;
  flex-direction: row;
  flex-flow: row wrap;
`;

const Name = styled.Text`
  fontSize: 18;
  margin-left: 10px;
  textAlign: center;
`;

const Social = styled.View`
  background-color: #cccccc;
  flex-direction: row;
  width: 100%;
`;

class PeopleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        { id: 1, hasImage: true, imagePath: RobertoImage,  name: 'Roberto Gómez Bolaños', birthDate: '21.02.1929', deathDate: '28.11.2014' },
        { id: 2, hasImage: true, imagePath: BudImage,  name: 'Bud Spencer', birthDate: '21.02.1929', deathDate: '28.11.2014' },
        { id: 3, hasImage: true, imagePath: GeorgeImage,  name: 'George Gaynes', birthDate: '21.02.1929', deathDate: '28.11.2014' },
        { id: 4, hasImage: true, imagePath: KeanuImage,  name: 'Keanu Reeves', birthDate: '21.02.1929', deathDate: null }
      ],
    };
  }

  render() {
    return (
      <ContainerView>
        {this.state.list.map(item => {
          return (
            <List key={item.id}>
              <Avatar hasImage={item.hasImage} imagePath={item.imagePath} />
              <Name>{item.name}</Name>
              <Social>
                {item.birthDate && <Button bg="#d1618a">{item.birthDate}</Button>}
                {item.deathDate && <Button bg="#32366b">{item.deathDate}</Button>}
              </Social>
            </List>
          );
        })}
      </ContainerView>
    );
  }
}

export default PeopleList;
