import { evaluateExpression } from "@/utils";
import { useEffect, useState } from "react";

export const useCalculator = () => {
  const [expression, setExpression] = useState("");
  const [currentValue, setCurrentValue] = useState("0");
  const [operation, setOperation] = useState("");
  const [overwrite, setOverwrite] = useState(true);

  const equals = () => {
    const val = evaluateExpression(expression + currentValue);
    setCurrentValue(`${val}`);
    setExpression("");
    setOperation("");
    setOverwrite(true);
  };

  const clear = () => {
    setExpression("");
    setCurrentValue("0");
    setOperation("");
    setOverwrite(true);
  };

  const del = () => {
    setCurrentValue("0");
    setOverwrite(true);
  };

  const percent = () => {
    const curr = parseFloat(currentValue);
    setCurrentValue((curr / 100).toString());
  };

  const squareRoot = () => {
    const curr = parseFloat(currentValue);
    setCurrentValue(Math.sqrt(curr).toString());
  };

  const selectOperation = (x: string) => {
    if (overwrite) {
      setExpression(currentValue + x);
    } else {
      setExpression(expression + currentValue + x);
    }
    setOperation(x);
    setOverwrite(true);
  };

  const setDigit = (digit: string) => {
    if (currentValue[0] === "0" && digit === "0") return;
    if (currentValue.includes(".") && digit === ".") return;

    if (overwrite && digit !== ".") {
      setCurrentValue(digit);
    } else {
      setCurrentValue(`${currentValue}${digit}`);
    }
    setOverwrite(false);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const { key } = event;
    if (key >= "0" && key <= "9") {
      setDigit(key);
    } else if (key === ".") {
      setDigit(key);
    } else if (
      key === "+" ||
      key === "-" ||
      key === "*" ||
      key === "/" ||
      key === "÷"
    ) {
      selectOperation(key);
    } else if (key === "Enter") {
      equals();
    } else if (key === "Backspace" || key === "Delete") {
      del();
    } else if (key === "Escape") {
      clear();
    } else if (key === "%") {
      squareRoot();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentValue, expression, operation, overwrite]);

  return {
    currentValue,
    operation,
    equals,
    clear,
    del,
    percent,
    selectOperation,
    setDigit,
    squareRoot,
  };
};
