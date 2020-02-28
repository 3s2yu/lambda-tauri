import React from "react";
import { View } from "react-native";
import DatePicker from "react-native-datepicker";

import { UIView } from './date-picker-style';

const DatePickerCustom = props => {
  const { config, onChange, value } = props;

  return (
    <UIView>
      <DatePicker
        style={{ flex: 1 }}
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
            right: 0,
            top: 4,
            marginRight: 0
          },
          dateInput: {
            borderColor: "#FFFFFF",
            borderBottomColor: "#3F3F3F"
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
