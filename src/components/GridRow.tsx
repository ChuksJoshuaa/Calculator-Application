import { GridDigitButton } from "@/components/GridDigitButton";
import { GridOperationButton } from "@/components/GridOperationButton";
import Grid from "@mui/material/Grid2";
import React from "react";

interface GridRowProps {
  digits: string[];
  operation: string;
  selectOperation: (operation: string) => void;
  selectedOperation: string;
  enterDigit: (digit: string) => void;
}

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
