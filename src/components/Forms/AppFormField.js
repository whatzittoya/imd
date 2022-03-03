import React from "react";
import { useFormikContext } from "formik";

import TextInput from "./AppForms/AppInputText";
import ErrorMessage from "./InputForms/ErrorMessage";

function AppFormField({ title, name, width, ...otherProps }) {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();

  return (
    <>
      <TextInput
        title={title}
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

export default AppFormField;
