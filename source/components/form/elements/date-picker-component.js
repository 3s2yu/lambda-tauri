import React, { Component } from "react";
import { Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Button } from '../../index';
import { UIView } from './date-picker-style';

class DatePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      placeholder: props.placeholder,
      value: props.value || new Date(),
      formattedValue: this.getFormattedValue(props.value)
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

 componentDidUpdate(prevProps, prevState) {
    if(prevState.value !== this.state.value){
      this.setState({
        formattedValue: this.getFormattedValue(this.state.value)
      });
    }
  }

  getFormattedValue(value) {
    if (value) {
      const day = value.getUTCDate();
      const month = value.getUTCMonth() + 1;
      const year = value.getUTCFullYear();

      return `${day}.${('0'+month).slice(-2)}.${year}`;
    }

    return false;
  }

  getLabel() {
    const { formattedValue, placeholder } = this.state;
    return formattedValue || placeholder;
  }

  handleClick() {
    this.setState({ show: true });
  }

  handleChange(event, value) {
    const { onChange } = this.props;

    onChange(this.getFormattedValue(value));

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      value
    });
  }

  render() {
    const { show, value } = this.state;

    return (
      <UIView>
        <Button width="100%" onPress={this.handleClick}>{this.getLabel()}</Button>
        {show && (
          <DateTimePicker
            value={value}
            mode="date"
            display="default"
            minimumDate={new Date(1800, 1, 1)}
            maximumDate={new Date(2100, 1, 1)}
            locale="pt-BR"
            onChange={this.handleChange}
          />
        )}
      </UIView>
    );
  }
};

export default DatePicker;
