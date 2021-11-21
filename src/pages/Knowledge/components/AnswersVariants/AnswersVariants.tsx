import React, { useState, useContext, useEffect } from "react";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { DeadlineContext } from "../../Knowledge";
import "./AnswerVariants.css";

type ID = number | string;

function AnswerList({
  answers,
}: {
  answers: { id: ID; label: string; checked: boolean }[];
}) {
  const { timestatus } = useContext(DeadlineContext);
  const [answerList, changeAnswerStatus] = useState(answers);
  const chooseAnswer = (id: ID) => {
    changeAnswerStatus(
      answerList.map((answer) => {
        if (answer.id === id) {
          answer.checked = !answer.checked;
        } else {
          answer.checked = false;
        }
        return answer;
      })
    );
  };

  const listItems = answers.map((answer, index) => (
    <ListItem
      button
      className={
        "answer-list-item " +
        (answer.checked ? "active " : "") +
        (timestatus ? "few-time" : "")
      }
      onClick={() => chooseAnswer(answer.id)}
    >
      <ListItemText key={index} primary={answer.label} />
    </ListItem>
  ));
  return <ul className="answer-list">{listItems}</ul>;
}

export default function AnswersVariants({
  Answers,
  AnswerType,
  ...props
}: {
  Answers: {
    id: number;
    label: string;
    checked: boolean;
  }[];
  AnswerType: string;
}) {
  return (
    <Container>
      <h6>Варианты ответа</h6>
      <List aria-label="mailbox folders">
        <AnswerList answers={Answers} />
      </List>
    </Container>
  );
}
