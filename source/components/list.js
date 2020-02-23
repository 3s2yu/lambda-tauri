import React, { Component } from "react";
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/EvilIcons';

import { Avatar, Button, Date } from './index';

const Item = styled.View`
  background-color: #e1e1e1;
  border-radius: 10px;
  flex: 1;
  flex-direction: row;
  margin: 15px auto;
  padding: 10px;
  width: 90%;
`;

const Description = styled.View`
  flex: 1;
  margin-left: 10px;
`;

const Name = styled.Text`
  color: #4f5052;
  font-size: 20px;
  margin: 5px 0;
`;

const Dates = styled.View`
  background-color: #ccc;
  border-radius: 4px;
  flex-direction: row;
  margin-top: -30px;
  overflow: hidden;
`;

const Buttons = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  right: 0;
`;

class PeopleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        { id: 1, hasImage: true, imagePath: 'https://nerdcalistenico.com.br/lambdatauri/roberto.jpg', name: 'Roberto Gómez Bolaños', birthDate: '21.02.1929', deathDate: '28.11.2014' },
        { id: 2, hasImage: true, imagePath: 'https://nerdcalistenico.com.br/lambdatauri/bud.jpg', name: 'Bud Spencer', birthDate: '31.10.1929', deathDate: '27.06.2016' },
        { id: 3, hasImage: true, imagePath: 'https://nerdcalistenico.com.br/lambdatauri/george.jpg', name: 'George Gaynes', birthDate: '16.05.1917', deathDate: '15.02.2016' },
        { id: 4, hasImage: true, imagePath: 'https://nerdcalistenico.com.br/lambdatauri/keanu.jpg', name: 'Keanu Reeves Keanu Reeves Keanu Reeves', birthDate: '02.09.1964', deathDate: null }
      ],
    };

    this.handleLink = this.handleLink.bind(this);
  }

  handleLink(name, image) {
    return () => this.props.navigation.navigate('Profile', { name, image });
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
                <Buttons>
                  <Button bg="#fff" onPress={this.handleLink(item.name, { hasImage: item.hasImage, imagePath: item.imagePath })}>
                    <Icon name="link" size={32} color="#32366b" />
                  </Button>
                  <Button bg="#fff" onPress={() => alert(item.name)}>
                    <Icon name="trash" size={32} color="#32366b" />
                  </Button>
                  <Button bg="#fff" onPress={() => alert(item.name)}>
                    <Icon name="pencil" size={32} color="#32366b" />
                  </Button>
                </Buttons>
              </Description>
            </Item>
          );
        })}
      </>
    );
  }
}

export default PeopleList;
