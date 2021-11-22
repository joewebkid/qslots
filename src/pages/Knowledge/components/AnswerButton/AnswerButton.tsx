import React from "react";
import Button from "@material-ui/core/Button";
import "./AnswerButton.css";

type ID = number | string;

export default function AnswerButton({
  buttonLabel,
  answers2,
  ...props
}: {
  buttonLabel: string;
  answers2: {
    id: ID;
    label: string;
    checked: boolean;
  }[];
}) {
  const saveAnswer = () => {
    let answerId: ID = "";
    answers2.map((answer) => {
      if (answer.checked) {
        answerId = answer.id;
      }
    });
    console.log(answerId);
    return answerId;
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
