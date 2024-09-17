export interface GridOperationButtonProps {
  selectedOperation: string;
  operation: string;
  selectOperation: (digit: string) => void;
}


export interface GridDigitButtonProps {
  digit: string;
  enterDigit: (digit: string) => void;
  xs?: number;
}