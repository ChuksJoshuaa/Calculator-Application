import { GridDigitButton } from "@/components/GridDigitButton";
import { GridOperationButton } from "@/components/GridOperationButton";
import { GridRowProps } from "@/interface";
import Grid from "@mui/material/Grid2";

export const GridRow = ({
  digits,
  operation,
  selectOperation,
  selectedOperation,
  enterDigit,
}: GridRowProps) => {
  return (
    <Grid container columnSpacing={1}>
      {digits.map((digit) => (
        <GridDigitButton
          key={digit}
          digit={digit}
          enterDigit={enterDigit}
          data-testid="button-1"
        />
      ))}
      <GridOperationButton
        operation={operation}
        selectOperation={selectOperation}
        selectedOperation={selectedOperation}
        data-testid="button-operation"
      />
    </Grid>
  );
};
