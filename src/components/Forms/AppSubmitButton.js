import React from "react";
import { useFormikContext } from "formik";

import Button from "../SmallComponents/Button";

function SubmitButton({ title, icon }) {
  const { handleSubmit } = useFormikContext();

  return <Button title={title} icon={icon} onPress={handleSubmit} />;
}

export default SubmitButton;
