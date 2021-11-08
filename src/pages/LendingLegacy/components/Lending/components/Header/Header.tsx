/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, memo } from 'react';
import LogoSvg from '../../img/logo.svg';

interface HeaderProps {
    openSignin?: React.MouseEvent;
    openSignup?: React.MouseEvent;
}

export const Header: FC<HeaderProps> = memo(() => (
    <header className="header" id="main_header">
        <div className="container">
            <a className="header_logo">
                <img src={LogoSvg} alt="Logo" />
                <span>Solutions</span>
            </a>
            <a
                className="header_login-btn header_registration-btn"
                style={{ cursor: 'pointer' }}
            >
                Регистрация
            </a>
            <a
                className="header_login-btn"
                style={{ cursor: 'pointer' }}
            >
                Вход
            </a>
        </div>
    </header>
));
