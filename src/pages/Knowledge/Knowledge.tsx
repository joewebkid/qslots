import { NavVertical } from "@core/components";
import { withCheckAuth } from "@core/HOCs";
import { Container, Card } from "@material-ui/core";
import React, { FC, memo, useState, createContext } from "react";
import TextQuestion from "./components/TextQuestion/TextQuestion";
import Timer from "./components/Timer/Timer";
import AnswersVariants from "./components/AnswersVariants/AnswersVariants";
import AnswerButton from "./components/AnswerButton/AnswerButton";
import IconButton from "@material-ui/core/IconButton";
import { ReactComponent as LogoSvg } from "../CourseLegacy/style/logo.svg";
import SvgIcon from "@material-ui/core/SvgIcon";
import data from "./sourse.json";

import "./Knowledge.css";
export const DeadlineContext = createContext<any>(false);
let answers = [
  { id: 1, label: "вариант 1", checked: false },
  { id: 2, label: "вариант 2", checked: false },
  { id: 3, label: "вариант 3", checked: false },
  { id: 4, label: "вариант 4", checked: false },
  { id: 5, label: "вариант 5", checked: false },
  { id: 6, label: "вариант 6", checked: false },
];
const data2: any = data["lessons"];
let i = 1;
for (let elem of data2) {
  for (let elem2 in elem) {
    answers.push({
      id: i,
      label: elem[elem2].toString(),
      checked: false,
    });
    i++;
  }
}
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
      <DeadlineContext.Provider value={contextValue}>
        <NavVertical />
        <Container maxWidth="lg">
          <div className="knowledge-page-intro">
            <TextQuestion
              CurNumber="1"
              GenNumber="12"
              QuestionHeader="Какое из утверждений следует из текста?"
              QuestionText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veritatis corporis officiis obcaecati consectetur officia esse culpa quibusdam delectus doloribus veniam nisi praesentium necessitatibus eius, aut distinctio nam atque perspiciatis!
        Dolorem voluptate optio officia accusantium quisquam, corporis quos molestiae ab dolore velit cum suscipit sunt totam! Illum corrupti, distinctio debitis tempora iure amet quia perferendis asperiores laudantium quaerat quidem aut!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veritatis corporis officiis obcaecati consectetur officia esse culpa quibusdam delectus doloribus veniam nisi praesentium necessitatibus eius, aut distinctio nam atque perspiciatis!
        Dolorem voluptate optio officia accusantium quisquam, corporis quos molestiae ab dolore velit cum suscipit sunt totam! Illum corrupti, distinctio debitis tempora iure amet quia perferendis asperiores laudantium quaerat quidem aut!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veritatis corporis officiis obcaecati consectetur officia esse culpa quibusdam delectus doloribus veniam nisi praesentium necessitatibus eius, aut distinctio nam atque perspiciatis!
        Dolorem voluptate optio officia accusantium quisquam, corporis quos molestiae ab dolore velit cum suscipit sunt totam! Illum corrupti, distinctio debitis tempora iure amet quia perferendis asperiores laudantium quaerat quidem aut!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veritatis corporis officiis obcaecati consectetur officia esse culpa quibusdam delectus doloribus veniam nisi praesentium necessitatibus eius, aut distinctio nam atque perspiciatis!
        Dolorem voluptate optio officia accusantium quisquam, corporis quos molestiae ab dolore
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veritatis corporis officiis obcaecati consectetur officia esse culpa quibusdam delectus doloribus veniam nisi praesentium necessitatibus eius, aut distinctio nam atque perspiciatis!
        Dolorem voluptate optio officia accusantium quisquam, corporis quos molestiae ab dolore velit cum suscipit sunt totam! Illum corrupti, distinctio debitis tempora iure amet quia perferendis asperiores laudantium quaerat quidem aut!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veritatis corporis officiis obcaecati consectetur officia esse culpa quibusdam delectus doloribus veniam nisi praesentium necessitatibus eius, aut distinctio nam atque perspiciatis!
        Dolorem voluptate optio officia accusantium quisquam, corporis quos molestiae ab dolore
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veritatis corporis officiis obcaecati consectetur officia esse culpa quibusdam delectus doloribus veniam nisi praesentium necessitatibus eius, aut distinctio nam atque perspiciatis!
        Dolorem voluptate optio officia accusantium quisquam, corporis quos molestiae ab dolore velit cum suscipit sunt totam! Illum corrupti, distinctio debitis tempora iure amet quia perferendis asperiores laudantium quaerat quidem aut!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veritatis corporis officiis obcaecati consectetur officia esse culpa quibusdam delectus doloribus veniam nisi praesentium necessitatibus eius, aut distinctio nam atque perspiciatis!
        Dolorem voluptate optio officia accusantium quisquam, corporis quos molestiae ab dolore"
            />
            <Container maxWidth="xs" className="answers-wrap">
              <Timer initialTime={20} />
              <AnswersVariants Answers={answers} AnswerType="1" />
              <AnswerButton Answers={answers} buttonLabel="Ответить" />
            </Container>
          </div>
        </Container>
      </DeadlineContext.Provider>
    </div>
  );
});

export const KnowledgePage = withCheckAuth(KnowledgeComponent);
