import { NavVertical } from "@core/components";
import { withCheckAuth } from "@core/HOCs";
// import { Container, Card } from "@material-ui/core";
import React, { FC, memo, useState, createContext, useContext } from "react";
// import TextQuestion from "./components/TextQuestion/TextQuestion";
// import Timer from "./components/Timer/Timer";
// import AnswersVariants from "./components/AnswersVariants/AnswersVariants";
// import AnswerButton from "./components/AnswerButton/AnswerButton";
import IconButton from "@material-ui/core/IconButton";
import { ReactComponent as LogoSvg } from "../CourseLegacy/style/logo.svg";
import SvgIcon from "@material-ui/core/SvgIcon";
import QuestionData from "./components/QuestionData/QuestionData";

import "./Knowledge.css";
export const DeadlineContext = createContext<any>(false);
const KnowledgeComponent: FC = memo(() => {
  const [timestatus, setTimeStatus] = useState(false);

  const SetFewTimeTheme = () => {
    setTimeStatus(true);
  };
  let contextValue = { timestatus, fewTimeTheme: SetFewTimeTheme };
  return (
    <div className="knowledge-page">
      <IconButton style={{ position: "absolute", left: 100 }}>
        <SvgIcon component={LogoSvg} viewBox="0 0 31 31" fontSize="large" />
      </IconButton>
      <NavVertical />
      <DeadlineContext.Provider value={contextValue}>
        <QuestionData questionNumber={1} />
      </DeadlineContext.Provider>
    </div>
  );
});

export const KnowledgePage = withCheckAuth(KnowledgeComponent);
