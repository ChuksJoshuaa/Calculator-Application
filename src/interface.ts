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

export interface GridRowProps {
  digits: string[];
  operation: string;
  selectOperation: (operation: string) => void;
  selectedOperation: string;
  enterDigit: (digit: string) => void;
}