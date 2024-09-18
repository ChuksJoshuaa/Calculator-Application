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


export const evaluateExpression = (expr: string) => {
    try {
      const tokens = expr.match(/(\d+\.?\d*|\+|\-|\*|\/|\(|\))/g);
      if (!tokens) return "Error";

      const outputQueue: string[] = [];
      const operatorStack: string[] = [];

      const precedence: { [key: string]: number } = {
        "+": 1,
        "-": 1,
        "*": 2,
        "/": 2,
      };

      const associativity: { [key: string]: string } = {
        "+": "L",
        "-": "L",
        "*": "L",
        "/": "L",
      };

      tokens.forEach((token) => {
        if (parseFloat(token)) {
          outputQueue.push(token);
        } else if ("+-*/".includes(token)) {
          while (
            operatorStack.length &&
            precedence[operatorStack[operatorStack.length - 1]] >= precedence[token] &&
            associativity[token] === "L"
          ) {
            outputQueue.push(operatorStack.pop()!);
          }
          operatorStack.push(token);
        } else if (token === "(") {
          operatorStack.push(token);
        } else if (token === ")") {
          while (operatorStack.length && operatorStack[operatorStack.length - 1] !== "(") {
            outputQueue.push(operatorStack.pop()!);
          }
          operatorStack.pop();
        }
      });

      while (operatorStack.length) {
        outputQueue.push(operatorStack.pop()!);
      }

      const resultStack: number[] = [];
      outputQueue.forEach((token) => {
        if (parseFloat(token)) {
          resultStack.push(parseFloat(token));
        } else {
          const b = resultStack.pop()!;
          const a = resultStack.pop()!;
          switch (token) {
            case "+":
              resultStack.push(a + b);
              break;
            case "-":
              resultStack.push(a - b);
              break;
            case "*":
              resultStack.push(a * b);
              break;
            case "/":
              resultStack.push(b === 0 ? NaN : a / b);
              break;
          }
        }
      });

      return resultStack[0];
    } catch {
      return "Error";
    }
  };