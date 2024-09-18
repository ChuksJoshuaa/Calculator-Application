import { Button as MuiButton, Paper, styled } from "@mui/material";

export const OutputContainer = styled(`div`)(({ theme }) => ({
  width: "100%",
  textAlign: "right",
  height: "2em",
  padding: theme.spacing(2),
  fontSize: "3em",
  overflow: "hidden",
}));

export const CalculatorBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  borderRadius: 15,
  maxWidth: "310px",
  position: "absolute",
  top: "20%",
}));

export const roundToPrecision = (value: number, precision: number = 3) => {
  return parseFloat(value.toFixed(precision));
};

export const Button = styled(MuiButton)<{ selected: boolean }>((props) => ({
  borderColor: props.selected ? "#fff" : "rgba(255, 241, 73, 0.5)",
}));
