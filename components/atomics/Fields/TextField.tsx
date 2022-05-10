import React from "react";
import { Control, Controller, UseFormRegisterReturn } from "react-hook-form";
import { TextField as MUITextField, Box, InputLabel } from "@mui/material";

export type TextFieldProps = {
  id: string;
  name: string;
  type: string;
  control: Control<any, Record<string, any>>;
  autoComplete: string;
  register?: UseFormRegisterReturn;
  placeholder: string;
  label?: string | React.ReactElement;
  initValue?: string | null | boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  style?: any;
};

export const TextField = (props: TextFieldProps) => {
  /** Property */
  const {
    id,
    name,
    type,
    control,
    autoComplete,
    register,
    placeholder,
    label,
    initValue,
    disabled = false,
    autoFocus = false,
    style,
  } = props;

  /** Render */
  return (
    <Box sx={{ width: "100%" }}>
      <Controller
        name={name}
        control={control}
        defaultValue={initValue || ""}
        render={({ field, fieldState }) => {
          return (
            <MUITextField
              id={id}
              name={field.name}
              type={type}
              onChange={field.onChange}
              placeholder={placeholder}
              autoComplete={autoComplete}
              variant="outlined"
              size="small"
              value={field.value}
              disabled={disabled}
              fullWidth
              autoFocus={autoFocus}
              error={!!fieldState.error}
              helperText={fieldState.error ? fieldState.error.message : ""}
              {...register}
              sx={{
                ...style,
                "& .MuiOutlinedInput-input": {
                  border: "5px solid #fff",
                  height: "80px",
                  "&:focus": {
                    border: "5px solid #eee",
                    borderRadius: "10px",
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  // remove input border
                  border: "none",
                  background: "none",
                },
              }}
            />
          );
        }}
      />
    </Box>
  );
};
