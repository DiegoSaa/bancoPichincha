import React, { useState } from "react";
import { TextInput, Text, View, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { styles } from "./styles";

const DatePickerInput = ({ name, value, onChange, errors, touched }) => {
  const [show, setShow] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShow(false); // Close the picker after selection
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split("T")[0];
      onChange(name, formattedDate);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={name === "date_release" ? "Release Date" : "Revision Date"}
        editable={false} // Make TextInput non-editable
        onTouchStart={() => setShow(true)} // Open the picker on touch
      />
      {touched && errors ? <Text style={styles.error}>{errors}</Text> : null}

      {show && (
        <DateTimePicker
          value={new Date(value) || new Date()}
          mode='date'
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={handleDateChange}
          maximumDate={new Date()} // Optional: to restrict future dates
        />
      )}
    </View>
  );
};

export default DatePickerInput;
