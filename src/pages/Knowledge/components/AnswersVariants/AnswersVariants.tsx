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
  chooseAnswer,
}: {
  answers: { id: ID; label: string; checked: boolean }[];
  chooseAnswer: any;
}) {
  const { timestatus } = useContext(DeadlineContext);

  const [answerList, changeAnswerStatus] = useState(answers);

  // const ancw = [{id: '0', label: 'вопрос 1 текст варианта ответа №1', checked: false}]
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
  answers,
  ...props
}: {
  answers: {
    id: ID;
    label: string;
    checked: boolean;
  }[];
}) {
  const [answersState, changeAnswers] = useState(answers);

  useEffect(() => {
    changeAnswers(answers);
    console.log("поменялось", answers);
  }, [answers]);

  useEffect(() => {
    changeAnswers(answers);
  }, []);

  const chooseAnswer = (id: ID) => {
    changeAnswers(
      answers.map((answer) => {
        if (answer.id === id) {
          answer.checked = !answer.checked;
        } else {
          answer.checked = false;
        }
        return answer;
      })
    );
  };

  return (
    <Container>
      <h6>Варианты ответа</h6>
      <List aria-label="mailbox folders">
        <AnswerList answers={answersState} chooseAnswer={chooseAnswer} />
      </List>
    </Container>
  );
}
