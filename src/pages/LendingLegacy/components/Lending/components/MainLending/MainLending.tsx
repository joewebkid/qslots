import React, { FC, memo } from 'react';
import { MainSection } from './Main.section';
import { StepSection } from './Step.section';

export const MainLending: FC = memo(() => (
        <main>
            <MainSection />
            <StepSection />
        </main>
));
