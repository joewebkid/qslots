import React, { FC, memo } from 'react';
import { Header, MainLending } from './components';

export const Lending: FC = memo(() => (
    <div
        className="wrapper"
        style={{ position: 'relative', overflowY: 'scroll' }}
    >
        <Header />
        <MainLending />
    </div>
));
