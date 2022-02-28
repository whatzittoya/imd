import React, { useState } from "react";

import {
  View,
  TextInput as Ti,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Moment from "moment";
import InputText from "../Forms/InputForms/InputText";

const DatePicker = ({ date, setDate, ...otherProps }) => {
  const [dates, setDates] = useState(Moment(date).format("DD-MMM-yyyy HH:mm"));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(Platform.OS === "ios");
    if (selectedDate !== undefined) {
      const currentDate = selectedDate || dates;
      setDate(currentDate);
      setDates(Moment(currentDate).format("DD-MMM-yyyy HH:mm"));
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
    //console.log("oke");
    showMode("date");
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={openDatePicker}>
        <View>
          <InputText
            icon="calendar-alt"
            placeholdertxt="DD/MM/YYYY HH:MM"
            value={dates}
          />
        </View>
      </TouchableWithoutFeedback>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
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
