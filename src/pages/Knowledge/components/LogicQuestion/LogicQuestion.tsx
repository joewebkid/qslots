import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import "./LogicQuestion.css";

const getLogicData = () => {
  fetch(`src/pages/knowledge/sourceLogic1.json`)
    .then((res) => res.json())
    .then((result) => {
      const answersVars = [];
      for (let ans_var in result.obj.variant_answers) {
        answersVars.push({
          id: ans_var,
          label: result.obj.variant_answers[ans_var],
          checked: false,
        });
      }
    });
};
export default function LogicQuestion({
  curNumber,
  genNumber,
  questionHeader,
  arrowsData,
  ...props
}: {
  curNumber: number;
  genNumber: number;
  questionHeader: string;
  arrowsData: string;
}) {
  return (
    <Container maxWidth="sm">
      <p className="question-count">
        Вопрос <span>{curNumber}</span> из <span>{genNumber}</span>
      </p>
      <h3 className="question-header">{questionHeader}</h3>
      <Paper className="paperRoot" elevation={3}>
        <p className="question-text">{arrowsData}</p>
        <Table className="loqic-question-table">
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}
