import React, { useState } from "react";

import { TextInput } from "react-native-paper";
import { View, TextInput as Ti } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "../../style/global";
import Moment from "moment";
import { Feather, Entypo } from "@expo/vector-icons";
const DatePicker = (props) => {
  const [date, setDate] = useState(
    Moment(props.date).format("DD-MMM-yyyy HH:mm")
  );
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(Platform.OS === "ios");
    if (selectedDate !== undefined) {
      const currentDate = selectedDate || date;
      props.setDate(currentDate);
      setDate(Moment(currentDate).format("DD-MMM-yyyy HH:mm"));
      if (mode == "date") {
        showMode("time");
      }
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const openDatePicker = () => {
    showMode("date");
  };

  return (
    <>
      <TextInput
        label="Tanggal Kajian"
        value={date}
        //  onChange={handleChange}
        onTouchEnd={openDatePicker}
        mode="outlined"
        style={styles.input}
        right={<TextInput.Icon name="calendar-month" />}
      />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={props.date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </>
  );
};
export default DatePicker;
