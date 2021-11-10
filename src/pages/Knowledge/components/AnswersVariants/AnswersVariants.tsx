import React from "react";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";

export default function AnswersVariants({
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
    <Container>
      <h6>Варианты ответа</h6>
      <List component="nav" aria-label="mailbox folders">
        <ListItem button>
          <ListItemText primary="Inbox" />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
    </Container>
  );
}
