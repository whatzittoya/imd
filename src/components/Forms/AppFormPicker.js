import React from "react";

import { useFormikContext } from "formik";
import AppPickerText from "./AppForms/AppPickerText";
import ErrorMessage from "./InputForms/ErrorMessage";

function AppFormPicker({
  title,
  items,
  name,
  numberOfColumns,
  PickerItemComponents,
  placeholder,
  width,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPickerText
        title={title}
        items={items}
        name={name}
        numberOfColumns={numberOfColumns}
        PickerItemComponents={PickerItemComponents}
        placeholder={placeholder}
        width={width}
        selectedItem={values[name]}
        onSelectItem={(item) => setFieldValue(name, item)}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
