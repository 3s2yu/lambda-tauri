import React, { Component } from "react";
import { Animated } from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/EvilIcons';

import { Avatar, Button, Label } from '../index';
import { UIItem, UIContent, UIDescription, UIName, UIDates, UIButtons, UIOptionsButton } from './list-style';

import data from './data';

class PeopleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: data,
    };

    this.handleLink = this.handleLink.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
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

  handleOptions(id) {
    return () => {
      const list = this.state.list.map(item => {
        if (typeof item.open === 'undefined') {
          item.open = false;
        }

        if (id === item.id) {
          item.open = !item.open;
          item.animation = new Animated.Value(item.open ? 0 : 50);
        }

        return item;
      });

      this.setState({ list });
    }
  }

  toggle(open, animationValue) {
    if (animationValue) {
      Animated.timing(animationValue, {
        toValue: open ? 50 : 0,
        timing: 100
      }).start();

      return {
        height: animationValue
      }
    } else {
      return {};
    }
  }

  render() {
    const { list } = this.state;

    return (
      <>
        {list.map(item => {
          return (
            <UIItem key={item.id}>
              <UIDescription>
                <UIName>{item.name}</UIName>
                <UIContent>
                  <Avatar hasImage={item.hasImage} imagePath={item.imagePath} />
                  <UIDescription>
                    <UIDates>
                      {item.birthDate && <Label bg="#d1618a" width={!item.deathDate ? '100%' : '50%'} daysLeft={this.getDaysLeft(item.birthDate)}>{item.birthDate}</Label>}
                      {item.deathDate && <Label bg="#32366b" daysLeft={this.getDaysLeft(item.deathDate)}>{item.deathDate}</Label>}
                    </UIDates>
                    <UIOptionsButton>
                      <Button bg="transparent" width="100%" onPress={this.handleOptions(item.id)}>
                        {item.open ? <Icon name="minus" size={32} color="#a1a1a1" /> : <Icon name="plus" size={32} color="#a1a1a1" />}
                      </Button>
                    </UIOptionsButton>
                  </UIDescription>
                </UIContent>
              </UIDescription>
              <Animated.View style={[{ height: 0, overflow:'hidden'}, this.toggle(item.open, item.animation)]}>
                <UIButtons>
                  <Button bg={item.active ? '#000' : '#f1f1f1'} onPress={() => alert(item.name)}>
                    <Icon name="bell" size={32} color={item.active ? '#fff' : '#32366b'} />
                  </Button>
                  <Button bg="#f1f1f1" leftSpace={true} onPress={() => alert(item.name)}>
                    <Icon name="pencil" size={32} color="#32366b" />
                  </Button>
                  <Button bg="#d15151" leftSpace={true} onPress={() => alert(item.name)}>
                    <Icon name="trash" size={32} color="#fff" />
                  </Button>
                  <Button bg="#f1f1f1" leftSpace={true} onPress={this.handleLink(item.name, { hasImage: item.hasImage, imagePath: item.imagePath })}>
                    <Icon name="eye" size={32} color="#32366b" />
                  </Button>
                </UIButtons>
              </Animated.View>
            </UIItem>
          );
        })}
      </>
    );
  }
}

export default PeopleList;
