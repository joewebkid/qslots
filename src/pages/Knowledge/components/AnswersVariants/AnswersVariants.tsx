import React from "react";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";

function AnswerList({ answers }: { answers: string[] }) {
  const answers1 = answers;
  const listItems = answers1.map((answer, index) => (
    <ListItem button>
      <ListItemText key={index} primary={answer} />
    </ListItem>
  ));
  return <ul>{listItems}</ul>;
}

export default function AnswersVariants({
  Answers,
  AnswerType,
  ...props
}: {
  Answers: string[];
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
