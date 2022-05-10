import React from "react";
import { useForm, UseFormRegister } from "react-hook-form";
import { TextField, TextFieldProps } from "./TextField";

type EmailFieldProps = {
  register: UseFormRegister<any> | undefined;
  required?: boolean;
} & Omit<TextFieldProps, "autoComplete" | "register">;

export const EmailField = (props: EmailFieldProps) => {
  /**  Property */
  const { register, required = true, disabled = false, ...attrs } = props;
  /** Render */
  return (
    <TextField
      autoComplete={"email"}
      register={
        register?.call(register, "email", {
          required,
          disabled,
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "error~~~ MSG",
          },
        }) ?? undefined
      }
      {...attrs}
      style={attrs.style}
    />
  );
};

EmailField.defaultProps = {
  required: true,
};
