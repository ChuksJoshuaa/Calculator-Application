import { useEffect, useState } from "react";

export const useCalculator = () => {
  const [prevValue, setPrevValue] = useState("");
  const [currentValue, setCurrentValue] = useState("0");
  const [operation, setOperation] = useState("");
  const [overwrite, setOverwrite] = useState(true);

  const equals = () => {
    const val = calculate();
    setCurrentValue(`${val}`);
    setPrevValue("");
    setOperation("");
    setOverwrite(true);
  };

  const calculate = () => {
    if (!prevValue || !operation) return currentValue;

    const curr = parseFloat(currentValue);
    const prev = parseFloat(prevValue);

    let result;
    switch (operation) {
      case "÷" || "/":
        result = curr === 0 ? "Error" : prev / curr;
        break;
      case "*":
        result = prev * curr;
        break;
      case "-":
        result = prev - curr;
        break;
      case "+":
        result = prev + curr;
        break;
      default:
        result = currentValue;
    }

    return result;
  };

  const clear = () => {
    setPrevValue("");
    setOperation("");
    setCurrentValue("0");
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
    if (prevValue) {
      const val = calculate();
      setCurrentValue(`${val}`);
      setPrevValue(`${val}`);
    } else {
      setPrevValue(currentValue);
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
      67;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentValue, prevValue, operation, overwrite]);

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
