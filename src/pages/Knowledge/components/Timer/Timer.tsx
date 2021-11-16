import React, { useState, useEffect, useContext } from "react";
import { DeadlineContext } from "../../Knowledge";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
import "./Timer.css";

export default function Timer({ initialTime, ...props }: { initialTime: any }) {
  const [value, updateValueFun] = useState(initialTime);
  const { timestatus } = useContext(DeadlineContext);
  const { fewTimeTheme } = useContext(DeadlineContext);
  const getValue = () => {
    return value;
  };
  const updateValue = function () {
    updateValueFun(() => {
      if (value < 16) {
        if (value < 11) {
          return `0${value - 1}`;
        }
      }
      return value - 1;
    });
  };
  useEffect(() => {
    let timeout = setTimeout(() => {
      if (getValue() == 0) {
        clearTimeout(timeout);
        return;
      } else {
        if (timestatus == false && value < 16) {
          fewTimeTheme();
        }
        updateValue();
      }
    }, 1000);
  }, [updateValue]);

  return (
    <div>
      {
        <div className={"rest-time " + (timestatus ? "few-time" : "")}>
          {`00:${getValue()}`}
        </div>
      }
    </div>
  );
}
