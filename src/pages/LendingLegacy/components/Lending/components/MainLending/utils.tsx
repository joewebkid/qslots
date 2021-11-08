/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, memo, ReactNode } from 'react';

export const toGoElement = (id: string) => {
    const element = document.getElementById(id);
    return () => {
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
};

interface LinkComponentProps {
    className?: string;
    children?: ReactNode;
    ref?: React.RefObject<HTMLImageElement>;
}

export const LinkToTop: FC<LinkComponentProps> = memo(
    ({ className, children }) => (
        <a
            className={className}
            onClick={toGoElement('main_header')}
            style={{ cursor: 'pointer' }}
        >
            {children}
        </a>
    ),
);

export const LinkToBottom: FC<LinkComponentProps> = memo(
    ({ className, children }) => (
        <a
            className={className}
            onClick={toGoElement('main_bottom')}
            style={{ cursor: 'pointer' }}
        >
            {children}
        </a>
    ),
);

export const LinkToVideo: FC<LinkComponentProps> = memo(
    ({ className, children }) => (
        <a
            className={className}
            onClick={toGoElement('main_video')}
            style={{ cursor: 'pointer' }}
        >
            {children}
        </a>
    ),
);

export const LinkToStep: FC<LinkComponentProps> = memo(
    ({ className, children }) => (
        <a
            className={className}
            onClick={toGoElement('main_step')}
            style={{ cursor: 'pointer' }}
        >
            {children}
        </a>
    ),
);
