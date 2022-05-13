import React from "react";
import { Chip } from "@mui/material";

type StyleType = {
  fontWeight: string;
  width: string;
  height: string;
  background: string;
  border: string;
  boxShadow: string;
};

type CustomChipProps = {
  label: string;
  sx: StyleType;
};

export const CustomChip = (props: CustomChipProps) => {
  /** Property */
  const { label, sx, ...others } = props;

  /** Function */
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  /** Render */
  return (
    <Chip label={label} variant="outlined" onClick={handleClick} sx={sx} />
  );
};
