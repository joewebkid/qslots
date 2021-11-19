import React from "react";
import Button from "@material-ui/core/Button";
import "./AnswerButton.css";

export default function AnswerButton({
  buttonLabel,
  Answers,
  ...props
}: {
  buttonLabel: any;
  Answers: {
    id: number;
    label: string;
    checked: boolean;
  }[];
}) {
  const saveAnswer = () => {
    let answerId = 0;
    Answers.map((answer) => {
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
