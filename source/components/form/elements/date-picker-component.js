import React from "react";
import { View } from "react-native";
import DatePicker from "react-native-datepicker";

import { UIView } from './date-picker-style';

const DatePickerCustom = props => {
  const { config, onChange, value } = props;

  const style = {
    backgroundColor: '#fff',
    width: '100%'
  };

  return (
    <UIView>
      <DatePicker
        style={style}
        date={value}
        mode="date"
        placeholder={config.placeholder}
        format="DD.MM.YYYY"
        minDate="01-01-1800"
        maxDate="01-01-2100"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: "absolute",
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            alignItems: "flex-start",
            borderColor: "#fff",
            borderBottomColor: "#ccc",
            fontSize: 17,
            height: 40,
            paddingLeft: 40
          },
          placeholderText: {
            alignSelf: "flex-start",
            fontSize: 17
          }
        }}
        onDateChange={date => onChange(date)}
      />
    </UIView>
  );
};

export default DatePickerCustom;
