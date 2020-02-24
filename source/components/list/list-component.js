import React, { Component } from "react";
import Icon from 'react-native-vector-icons/EvilIcons';

import { Avatar, Button, Label } from '../index';
import { UIItem, UIDescription, UIName, UIDates, UIButtons } from './list-style';


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
            <UIItem key={item.id}>
              <Avatar hasImage={item.hasImage} imagePath={item.imagePath} />
              <UIDescription>
                <UIDates>
                  {item.birthDate && <Label bg="#d1618a">{item.birthDate}</Label>}
                  {item.deathDate && <Label bg="#32366b">{item.deathDate}</Label>}
                </UIDates>
                <UIName>{item.name}</UIName>
                <UIButtons>
                  <Button bg="#fff" onPress={this.handleLink(item.name, { hasImage: item.hasImage, imagePath: item.imagePath })}>
                    <Icon name="link" size={32} color="#32366b" />
                  </Button>
                  <Button bg="#fff" onPress={() => alert(item.name)}>
                    <Icon name="trash" size={32} color="#32366b" />
                  </Button>
                  <Button bg="#fff" onPress={() => alert(item.name)}>
                    <Icon name="pencil" size={32} color="#32366b" />
                  </Button>
                </UIButtons>
              </UIDescription>
            </UIItem>
          );
        })}
      </>
    );
  }
}

export default PeopleList;
