import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
import "./Timer.css";

export default function Timer({
  initialTime,
  ...props
}: {
  initialTime: number;
}) {
  const [value, updateValueFun] = useState(initialTime);

  const getValue = () => {
    return value;
  };
  const updateValue = function () {
    updateValueFun(() => {
      return value - 1;
    });
  };
  return (
    <div>
      <button className="Timer" onClick={updateValue}>
        Уменьшать значение счетчика
      </button>
      {
        <div className="rest-time">
          {moment(getValue(), "mm.ss").format("mm:ss")}
        </div>
      }
    </div>
  );
}
