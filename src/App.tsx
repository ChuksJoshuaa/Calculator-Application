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
              data-testid="button-AC"
            />
            <GridOperationButton
              operation={"C"}
              selectOperation={del}
              selectedOperation={operation}
              data-testid="button-C"
            />
            <GridOperationButton
              operation={"%"}
              selectOperation={percent}
              selectedOperation={operation}
              data-testid="button-%"
            />
            <GridOperationButton
              operation={"/"}
              selectOperation={selectOperation}
              selectedOperation={operation}
              data-testid="button-/"
            />
          </Grid>
          <GridRow
            digits={["7", "8", "9"]}
            operation={"*"}
            selectOperation={selectOperation}
            selectedOperation={operation}
            enterDigit={setDigit}
            data-testid="row-7-8-9"
          />
          <GridRow
            digits={["4", "5", "6"]}
            operation={"-"}
            selectOperation={selectOperation}
            selectedOperation={operation}
            enterDigit={setDigit}
            data-testid="row-4-5-6"
          />
          <GridRow
            digits={["1", "2", "3"]}
            operation={"+"}
            selectOperation={selectOperation}
            selectedOperation={operation}
            enterDigit={setDigit}
            data-testid="row-1-2-3"
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
              <Button fullWidth variant="contained" onClick={equals} data-testid="button-=">
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
