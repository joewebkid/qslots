import { NavVertical } from "@core/components";
import { withCheckAuth } from "@core/HOCs";
import { Container, Card } from "@material-ui/core";
import React, { FC, memo } from "react";
import Question from "./components/Question/Question";
import Timer from "./components/Timer/Timer";
import AnswersVariants from "./components/AnswersVariants/AnswersVariants";
import AnswerButton from "./components/AnswerButton/AnswerButton";

import "./Knowledge.css";
const KnowledgeComponent: FC = memo(() => {
  return (
    <div className="knowledge-page">
      <NavVertical />
      <Container maxWidth="lg">
        <div className="knowledge-page-intro">
          <Question
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
            <Timer initialTime={2} />
            <AnswersVariants
              Answers={[
                "вариант 1",
                "вариант 2",
                "вариант 3",
                "вариант 4",
                "вариант 5",
              ]}
              AnswerType="1"
            />
            <AnswerButton buttonLabel="Ответить" />
          </Container>
        </div>
      </Container>
    </div>
  );
});

export const KnowledgePage = withCheckAuth(KnowledgeComponent);
