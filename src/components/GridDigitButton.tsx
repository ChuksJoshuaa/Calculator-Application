import { GridDigitButtonProps } from "@/interface";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const GridDigitButton = ({
  digit,
  enterDigit,
  xs = 3,
}: GridDigitButtonProps) => {
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
