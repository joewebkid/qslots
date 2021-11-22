import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import "./TextQuestion.css";

export default function TextQuestion({
  curNumber,
  genNumber,
  questionHeader,
  questionText,
  ...props
}: {
  curNumber: number;
  genNumber: number;
  questionHeader: string;
  questionText: string;
}) {
  return (
    <Container maxWidth="sm">
      <p className="question-count">
        Вопрос <span>{curNumber}</span> из <span>{genNumber}</span>
      </p>
      <h3 className="question-header">{questionHeader}</h3>
      <Paper className="paperRoot" elevation={3}>
        <p className="question-text">{questionText}</p>
      </Paper>
    </Container>
  );
}
