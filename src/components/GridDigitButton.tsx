import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { GridDigitButtonProps } from "@/interface";

export const GridDigitButton: React.FC<GridDigitButtonProps> = ({
  digit,
  enterDigit,
  xs = 3,
}) => {
  return (
    <Grid container spacing={2} size={xs}>
      <Button
        fullWidth
        variant="outlined"
        onClick={() => enterDigit(digit)}
        data-testid="button-1"
      >
        {digit}
      </Button>
    </Grid>
  );
};
