import React, { useState } from "react";
import { TextInput, Text, View, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { styles } from "./styles";

const DatePickerInput = ({ name, value, onChange, errors, touched }) => {
  const [show, setShow] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShow(false);
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split("T")[0];
      onChange(name, formattedDate);
    }
  };

  const dateValue = value ? new Date(value) : new Date();

  return (
    <View>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={name === "date_release" ? "Release date" : "Revision date"}
        editable={false}
        onTouchStart={() => setShow(true)}
        accessibilityRole='button'
      />
      {touched && errors ? <Text style={styles.error}>{errors}</Text> : null}

      {show && (
        <DateTimePicker
          value={dateValue}
          mode='date'
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={handleDateChange}
          maximumDate={new Date()}
          testID='dateTimePicker'
        />
      )}
    </View>
  );
};

export default DatePickerInput;
