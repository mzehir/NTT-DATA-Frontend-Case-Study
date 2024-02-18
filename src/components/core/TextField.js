import React from "react";
import TextField from "@mui/material/TextField";

const TextFieldComp = ({ label, value, ...props }) => {
  return (
    <TextField
      {...(label ? { label: label } : {})}
      {...(value || value === "" ? { value: value } : {})}
      {...props}
    />
  );
};

TextFieldComp.defaultProps = {
  fullWidth: true,
  variant: "outlined",
  label: "",
  size: "small",
  margin: "normal",
};

export default TextFieldComp;
