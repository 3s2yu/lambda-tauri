import React, { Component } from "react";
import DateTimePicker from 'react-native-modal-datetime-picker';

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

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

 componentDidUpdate(prevProps, prevState) {
    if(prevState.value !== this.state.value){
      this.setState({
        formattedValue: this.getFormattedValue(this.state.value)
      });
    }
  }

  getFormattedValue(value) {
    if (!value) {
      return value;
    }

    if (value.getUTCDate) {
      const day = value.getUTCDate();
      const month = value.getUTCMonth() + 1;
      const year = value.getUTCFullYear();

      return `${day}.${('0'+month).slice(-2)}.${year}`;
    } else {
      return value;
    }
  }

  getLabel() {
    const { formattedValue, placeholder } = this.state;
    return {
      value: formattedValue || placeholder,
      color: formattedValue ? '#333' : '#ccc'
    }
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleHide() {
    this.setState({ show: false });
  }

  handleConfirm(value) {
    const { onChange } = this.props;

    onChange(this.getFormattedValue(value));

    this.setState({
      show: false,
      value
    });
  }

  render() {
    const { show, value, placeholder } = this.state;
    const label = this.getLabel();

    return (
      <UIView>
        <Button textAlign="left" width="100%" color={label.color} leftSpace onPress={this.handleShow}>{label.value}</Button>
        <DateTimePicker
          style={{ color: '#333' }}
          value={value}
          mode="date"
          minimumDate={new Date(1800, 1, 1)}
          maximumDate={new Date(2100, 1, 1)}
          locale="pt-BR"
          onConfirm={this.handleConfirm}
          onCancel={this.handleHide}
          isVisible={show}
          cancelTextIOS="Cancelar"
          confirmTextIOS="Confirmar"
          headerTextIOS={placeholder}
        />
      </UIView>
    );
  }
};

export default DatePicker;
