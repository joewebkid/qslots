import React, { useState, useEffect, useContext } from "react";
import Context from "@boot/legacy/context";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
import "./Timer.css";

export default function Timer({
  initialTime,
  callback,
  questionNumber,
  SetQuestionsStatus,
  setTime,
  setAnswers,
  numberSetFun,
  ...props
}: {
  initialTime: any;
  callback: any;
  questionNumber: any;
  SetQuestionsStatus: any;
  setTime: any;
  setAnswers: any;
  numberSetFun: any;
}) {
  const [value, updateValueFun] = useState(initialTime);
  let [timeover, setTimeOver] = useState(false);
  let [timeoutId, setTimeoutId] = useState(0);
  const { timestatus } = useContext(Context);
  const { fewTimeTheme } = useContext(Context);
  // const getValue = () => {
  //   return value;
  // };

  useEffect(() => {
    updateValueFun(initialTime);
  }, [initialTime]);

  const updateValue = function () {
    updateValueFun((prevValue: number) => {
      if (timestatus == false && prevValue <= 16) {
        fewTimeTheme();
      }
      // if (prevValue === 1){
      //   setTimeOver(true)
      // }
      // if (prevValue < 11) {
      //   return `0${prevValue - 1}`;
      // } else {
      return prevValue - 1;
      // }
    });
  };
  useEffect(() => {
    if (value < 1) {
      callback(
        questionNumber,
        SetQuestionsStatus,
        setTime,
        setAnswers,
        numberSetFun
      );
    } else {
      clearTimeout(timeoutId);
      const tId = setTimeout(() => {
        if (timestatus == false && value <= 16) {
          fewTimeTheme();
        }
        updateValue();
      }, 1000);
      setTimeoutId(tId);
    }
  }, [value]);

  return (
    <div>
      {
        <div className={"rest-time " + (timestatus ? "few-time" : "")}>
          {`00:${value < 10 ? `0${value}` : value}`}
        </div>
      }
    </div>
  );
}
