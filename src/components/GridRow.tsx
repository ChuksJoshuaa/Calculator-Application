import { GridDigitButton } from "@/components/GridDigitButton";
import { GridOperationButton } from "@/components/GridOperationButton";
import { GridRowProps } from "@/interface";
import Grid from "@mui/material/Grid2";
import React from "react";

export const GridRow: React.FC<GridRowProps> = ({
  digits,
  operation,
  selectOperation,
  selectedOperation,
  enterDigit,
}) => {
  return (
    <Grid container columnSpacing={1}>
      {digits.map((digit) => (
        <GridDigitButton key={digit} digit={digit} enterDigit={enterDigit} />
      ))}
      <GridOperationButton
        operation={operation}
        selectOperation={selectOperation}
        selectedOperation={selectedOperation}
      />
    </Grid>
  );
};
