import React from "react";
import { useFormikContext } from "formik";

import TextInputCalendar from "./AppForms/AppInputCalendarText";
import ErrorMessage from "./InputForms/ErrorMessage";

function AppFormCalendar({ name, width, ...otherProps }) {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();

  return (
    <>
      <TextInputCalendar
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormCalendar;
