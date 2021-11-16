import React from "react";
import Button from "@material-ui/core/Button";
import "./AnswerButton.css";

export default function AnswerButton({
  buttonLabel,
  ...props
}: {
  buttonLabel: any;
}) {
  return (
    <Button className="answer-button" variant="contained">
      {buttonLabel}
    </Button>
  );
}
