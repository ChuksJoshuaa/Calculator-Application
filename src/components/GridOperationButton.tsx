import { GridOperationButtonProps } from "@/interface";
import { Button } from "@/utils";
import Grid from "@mui/material/Grid2";

export const GridOperationButton = ({
  selectedOperation,
  operation,
  selectOperation,
}: GridOperationButtonProps) => {
  return (
    <Grid size={3} container spacing={2}>
      <Button
        fullWidth
        variant="outlined"
        sx={{ backgroundColor: "rgb(254,241,73,.1)" }}
        onClick={() => selectOperation(operation)}
        selected={selectedOperation === operation}
        data-testid="button-operation"
      >
        {operation}
      </Button>
    </Grid>
  );
};
