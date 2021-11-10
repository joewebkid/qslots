import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import "./Question.css";

export default function Question({
  CurNumber,
  GenNumber,
  QuestionHeader,
  QuestionText,
  ...props
}: {
  CurNumber: string;
  GenNumber: string;
  QuestionHeader: string;
  QuestionText: string;
}) {
  return (
    <Container maxWidth="sm">
      <p className="question-count">
        Вопрос <span>{CurNumber}</span> из <span>{GenNumber}</span>
      </p>
      <h3 className="question-header">{QuestionHeader}</h3>
      <Paper className="paperRoot" elevation={3}>
        <p className="question-text">{QuestionText}</p>
      </Paper>
    </Container>
  );
}
