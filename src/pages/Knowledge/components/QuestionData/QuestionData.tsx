import React, { useState, createContext, useEffect } from "react";

import { Container, Card } from "@material-ui/core";
import TextQuestion from "../TextQuestion/TextQuestion";
import LogicQuestion from "../LogicQuestion/LogicQuestion";
import Timer from "../Timer/Timer";
import AnswersVariants from "../AnswersVariants/AnswersVariants";
import AnswerButton from "../AnswerButton/AnswerButton";
const getData = (
  questionNumber: number,
  SetQuestionsStatus: any,
  SetInitialTimeSatus: any,
  setAnswers: any,
  setNumberFun: any
) => {
  fetch(`src/pages/knowledge/source${questionNumber}.json`)
    .then((res) => res.json())
    .then((result) => {
      SetQuestionsStatus(result);
      SetInitialTimeSatus(result.obj.time_answer_max);
      const answersVars = [];
      for (let ans_var in result.obj.variant_answers) {
        answersVars.push({
          id: ans_var,
          label: result.obj.variant_answers[ans_var],
          checked: false,
        });
      }
      setAnswers(answersVars);
    });
  setNumberFun(questionNumber + 1);
};

export default function QuestionData(props: any) {
  let questionNumber = props["questionNumber"];
  let setNumber = props["numberSetFunction"];
  const [time, setTime] = useState(0);
  const [question, setQuestion] = useState({
    curNumber: 0,
    genNumber: 0,
    questionHeader: "",
    questionText: "",
  });
  const SetQuestionsStatus = (ResObj: any) => {
    question.curNumber = ResObj.obj.current_number;
    question.genNumber = 11;
    question.questionHeader = ResObj.obj.question_text;
    question.questionText = ResObj.obj.material;
    setQuestion(question);
  };
  const [answersVars, setAnswers] = useState([
    { id: "0", label: "", checked: false },
  ]);
  useEffect(() => {
    getData(questionNumber, SetQuestionsStatus, setTime, setAnswers, setNumber);
  }, []);
  return (
    <div>
      <Container maxWidth="lg">
        <div className="knowledge-page-intro">
          <TextQuestion
            curNumber={question.curNumber}
            genNumber={question.genNumber}
            questionHeader={question.questionHeader}
            questionText={question.questionText}
          />
          {/* <LogicQuestion
            curNumber={question.curNumber}
            genNumber={question.genNumber}
            questionHeader={question.questionHeader}
            arrowsData={question.questionText}
          /> */}
          <Container maxWidth="xs" className="answers-wrap">
            <Timer
              initialTime={time}
              callback={getData}
              questionNumber={questionNumber}
              SetQuestionsStatus={SetQuestionsStatus}
              setTime={setTime}
              setAnswers={setAnswers}
              numberSetFun={setNumber}
            />
            <AnswersVariants answers={answersVars} />
            <AnswerButton
              answers2={answersVars}
              buttonLabel="Ответить"
              callback={getData}
              questionNumber={questionNumber}
              SetQuestionsStatus={SetQuestionsStatus}
              setTime={setTime}
              setAnswers={setAnswers}
              numberSetFun={setNumber}
            />
          </Container>
        </div>
      </Container>
    </div>
  );
}
