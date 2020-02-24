import React, { Component } from "react";
import moment from 'moment';
import Icon from 'react-native-vector-icons/EvilIcons';

import { Avatar, Button, Label } from '../index';
import { UIItem, UIContent, UIDescription, UIName, UIDates, UIButtons } from './list-style';

import data from './data';

class PeopleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: data,
    };

    this.handleLink = this.handleLink.bind(this);
  }

  handleLink(name, image) {
    return () => this.props.navigation.navigate('Profile', { name, image });
  }

  getDaysLeft(date) {
    // date = dd.mm.yyyy
    const currentYear = moment().format('YYYY');
    const formattedDate = [currentYear, date.split('.')[1], date.split('.')[0]].join('-');
    const diff = date => {
      const currentDate = moment();
      return moment(date).diff(currentDate, 'days');
    };
    const dayLeft = diff(formattedDate);
    const result = dayLeft < 0 ? diff(formattedDate.replace(currentYear, `${parseInt(currentYear)+1}`)) : dayLeft;

    return `${result} dias`;
  }

  render() {
    return (
      <>
        {this.state.list.map(item => {
          return (
            <UIItem key={item.id}>
              <UIName>{item.name}</UIName>
              <UIContent>
                <Avatar hasImage={item.hasImage} imagePath={item.imagePath} />
                <UIDescription>
                  <UIDates>
                    {item.birthDate && <Label bg="#d1618a" width={!item.deathDate ? '100%' : '50%' } daysLeft={this.getDaysLeft(item.birthDate)}>{item.birthDate}</Label>}
                    {item.deathDate && <Label bg="#32366b" daysLeft={this.getDaysLeft(item.deathDate)}>{item.deathDate}</Label>}
                  </UIDates>
                  <UIButtons>
                    <Button bg={item.active ? '#000' : '#fff'} onPress={() => alert(item.name)}>
                      <Icon name="bell" size={32} color={item.active ? '#fff' : '#32366b'} />
                    </Button>
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
              </UIContent>
            </UIItem>
          );
        })}
      </>
    );
  }
}

export default PeopleList;
