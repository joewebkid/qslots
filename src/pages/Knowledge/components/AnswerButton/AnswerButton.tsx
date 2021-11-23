import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import QuestionData from "../QuestionData/QuestionData";
import getData from "../QuestionData/QuestionData";
import "./AnswerButton.css";

type ID = number | string;

export default function AnswerButton({
  buttonLabel,
  answers2,
  callback,
  questionNumber,
  SetQuestionsStatus,
  setTime,
  setAnswers,
  numberSetFun,
  ...props
}: {
  buttonLabel: string;
  answers2: {
    id: ID;
    label: string;
    checked: boolean;
  }[];
  callback: any;
  questionNumber: any;
  SetQuestionsStatus: any;
  setTime: any;
  setAnswers: any;
  numberSetFun: any;
}) {
  let [answerNumber, setAnswerNumber] = useState(-1);

  const saveAnswer = () => {
    // setAnswerNumber
    answers2.map((answer) => {
      if (answer.checked) {
        answerNumber = Number(answer.id);
      }
    });

    if (answerNumber !== -1) {
      callback(
        questionNumber,
        SetQuestionsStatus,
        setTime,
        setAnswers,
        numberSetFun
      );
      // return answerNumber;
    } else {
      // alert("Выберите вариант ответа");
    }
  };
  {
    return (
      <Button
        onClick={saveAnswer}
        className="answer-button"
        variant="contained"
      >
        {buttonLabel}
      </Button>
    );
  }
}
