"use client";

import { useState } from "react";
import { Delete } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CalculatorView() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);

  const handleNumberClick = (num: string) => {
    if (shouldResetDisplay) {
      setDisplay(num);
      setShouldResetDisplay(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const handleOperationClick = (op: string) => {
    const currentValue = parseFloat(display);
    
    if (previousValue !== null && operation) {
      const result = calculate(previousValue, currentValue, operation);
      setDisplay(result.toString());
      setPreviousValue(result);
    } else {
      setPreviousValue(currentValue);
    }
    
    setOperation(op);
    setShouldResetDisplay(true);
  };

  const calculate = (a: number, b: number, op: string): number => {
    switch (op) {
      case "+": return a + b;
      case "-": return a - b;
      case "×": return a * b;
      case "÷": return b !== 0 ? a / b : 0;
      default: return b;
    }
  };

  const handleEquals = () => {
    if (previousValue !== null && operation) {
      const result = calculate(previousValue, parseFloat(display), operation);
      setDisplay(result.toString());
      setPreviousValue(null);
      setOperation(null);
      setShouldResetDisplay(true);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setShouldResetDisplay(false);
  };

  const handleDecimal = () => {
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay("0");
    }
  };

  const buttonClass = "h-20 text-2xl font-bold rounded-lg transition-all active:scale-95";

  return (
    <div className="flex-1 bg-gradient-to-br from-slate-100 to-slate-200 p-6 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md">
        <div className="bg-navigation/10 rounded-lg p-6 mb-6 min-h-[100px] flex items-end justify-end border-4 border-navigation/20">
          <div className="text-right">
            {operation && previousValue !== null && (
              <div className="text-sm text-muted-foreground mb-1">
                {previousValue} {operation}
              </div>
            )}
            <div className="text-5xl font-bold text-navigation font-mono tabular-nums break-all">
              {display}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <Button
            onClick={handleClear}
            className={`${buttonClass} col-span-2 bg-red-500 hover:bg-red-600 text-white`}
          >
            CLEAR
          </Button>
          <Button
            onClick={handleBackspace}
            className={`${buttonClass} bg-amber-500 hover:bg-amber-600 text-white`}
          >
            <Delete className="h-6 w-6" />
          </Button>
          <Button
            onClick={() => handleOperationClick("÷")}
            className={`${buttonClass} bg-accent hover:bg-accent/90 text-white`}
          >
            ÷
          </Button>

          <Button
            onClick={() => handleNumberClick("7")}
            className={`${buttonClass} bg-slate-700 hover:bg-slate-800 text-white`}
          >
            7
          </Button>
          <Button
            onClick={() => handleNumberClick("8")}
            className={`${buttonClass} bg-slate-700 hover:bg-slate-800 text-white`}
          >
            8
          </Button>
          <Button
            onClick={() => handleNumberClick("9")}
            className={`${buttonClass} bg-slate-700 hover:bg-slate-800 text-white`}
          >
            9
          </Button>
          <Button
            onClick={() => handleOperationClick("×")}
            className={`${buttonClass} bg-accent hover:bg-accent/90 text-white`}
          >
            ×
          </Button>

          <Button
            onClick={() => handleNumberClick("4")}
            className={`${buttonClass} bg-slate-700 hover:bg-slate-800 text-white`}
          >
            4
          </Button>
          <Button
            onClick={() => handleNumberClick("5")}
            className={`${buttonClass} bg-slate-700 hover:bg-slate-800 text-white`}
          >
            5
          </Button>
          <Button
            onClick={() => handleNumberClick("6")}
            className={`${buttonClass} bg-slate-700 hover:bg-slate-800 text-white`}
          >
            6
          </Button>
          <Button
            onClick={() => handleOperationClick("-")}
            className={`${buttonClass} bg-accent hover:bg-accent/90 text-white`}
          >
            -
          </Button>

          <Button
            onClick={() => handleNumberClick("1")}
            className={`${buttonClass} bg-slate-700 hover:bg-slate-800 text-white`}
          >
            1
          </Button>
          <Button
            onClick={() => handleNumberClick("2")}
            className={`${buttonClass} bg-slate-700 hover:bg-slate-800 text-white`}
          >
            2
          </Button>
          <Button
            onClick={() => handleNumberClick("3")}
            className={`${buttonClass} bg-slate-700 hover:bg-slate-800 text-white`}
          >
            3
          </Button>
          <Button
            onClick={() => handleOperationClick("+")}
            className={`${buttonClass} bg-accent hover:bg-accent/90 text-white`}
          >
            +
          </Button>

          <Button
            onClick={() => handleNumberClick("0")}
            className={`${buttonClass} col-span-2 bg-slate-700 hover:bg-slate-800 text-white`}
          >
            0
          </Button>
          <Button
            onClick={handleDecimal}
            className={`${buttonClass} bg-slate-700 hover:bg-slate-800 text-white`}
          >
            .
          </Button>
          <Button
            onClick={handleEquals}
            className={`${buttonClass} bg-green-600 hover:bg-green-700 text-white`}
          >
            =
          </Button>
        </div>
      </div>
    </div>
  );
}