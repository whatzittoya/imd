import React from "react";

import { useFormikContext } from "formik";
import AppRadioButton from "./AppForms/AppRadioButton";
import ErrorMessage from "./InputForms/ErrorMessage";

function AppFormRadioButton({ title, items, name }) {
  const { setFieldValue, errors, touched, values } = useFormikContext();
  return (
    <>
      <AppRadioButton
        title={title}
        items={items}
        handleChange={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormRadioButton;
