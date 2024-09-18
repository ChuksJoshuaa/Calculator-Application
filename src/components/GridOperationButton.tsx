import { Button } from "@/utils";
import Grid from "@mui/material/Grid2";

interface GridOperationButtonProps {
  selectedOperation: string;
  operation: string;
  selectOperation: (digit: string) => void;
}

export const GridOperationButton: React.FC<GridOperationButtonProps> = ({
  selectedOperation,
  operation,
  selectOperation,
}) => {
  return (
    <Grid size={3} container spacing={2}>
      <Button
        fullWidth
        variant="outlined"
        sx={{ backgroundColor: "rgb(254,241,73,.1)" }}
        onClick={() => selectOperation(operation)}
        selected={selectedOperation === operation}
      >
        {operation}
      </Button>
    </Grid>
  );
};
