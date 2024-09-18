import { GridDigitButton } from "@/components/GridDigitButton";
import { GridOperationButton } from "@/components/GridOperationButton";
import { GridRow } from "@/components/GridRow";
import { useCalculator } from "@/components/useCalculator";
import { CalculatorBase, OutputContainer, roundToPrecision } from "@/utils";
import { Button, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";

const App = () => {
  const {
    currentValue,
    operation,
    equals,
    clear,
    del,
    percent,
    selectOperation,
    setDigit,
    squareRoot,
  } = useCalculator();
  return (
    <Container maxWidth="xs">
      <CalculatorBase elevation={3}>
        <Grid container spacing={1}>
          <Grid size={12}>
            <OutputContainer data-testid="output">
              {roundToPrecision(parseFloat(currentValue))}
            </OutputContainer>
          </Grid>
          <Grid container columnSpacing={1}>
            <GridOperationButton
              operation={"AC"}
              selectOperation={clear}
              selectedOperation={operation}
            />
            <GridOperationButton
              operation={"C"}
              selectOperation={del}
              selectedOperation={operation}
            />
            <GridOperationButton
              operation={"%"}
              selectOperation={percent}
              selectedOperation={operation}
            />
            <GridOperationButton
              operation={"÷"}
              selectOperation={selectOperation}
              selectedOperation={operation}
            />
          </Grid>
          <GridRow
            digits={["7", "8", "9"]}
            operation={"*"}
            selectOperation={selectOperation}
            selectedOperation={operation}
            enterDigit={setDigit}
          />
          <GridRow
            digits={["4", "5", "6"]}
            operation={"-"}
            selectOperation={selectOperation}
            selectedOperation={operation}
            enterDigit={setDigit}
          />
          <GridRow
            digits={["1", "2", "3"]}
            operation={"+"}
            selectOperation={selectOperation}
            selectedOperation={operation}
            enterDigit={setDigit}
          />

          <Grid container columnSpacing={1}>
            <GridOperationButton
              operation={"√"}
              selectOperation={squareRoot}
              selectedOperation={operation}
            />
            <GridDigitButton xs={3} digit={"0"} enterDigit={setDigit} />
            <GridDigitButton digit={"."} enterDigit={setDigit} />
            <Grid size={3}>
              <Button fullWidth variant="contained" onClick={equals}>
                =
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CalculatorBase>
    </Container>
  );
};

export default App;
