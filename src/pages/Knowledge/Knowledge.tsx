import { NavVertical } from "@core/components";
import { withCheckAuth } from "@core/HOCs";
import { Container } from "@material-ui/core";
import React, { FC, memo } from "react";

import "./Knowledge.css";

const KnowledgeComponent: FC = memo(() => {
  return (
    <div className="knowledge-page">
      <NavVertical />
      <Container maxWidth="lg">
        <div className="knowledge-page-intro">
          Данный раздел находится в разработке
        </div>
      </Container>
    </div>
  );
});

export const KnowledgePage = withCheckAuth(KnowledgeComponent);
