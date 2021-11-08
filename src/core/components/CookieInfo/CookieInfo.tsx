import React, { FC } from "react";
import CookieConsent from "react-cookie-consent";

import "./CookieInfo.css";

export const CookieInfo: FC = () => {
  return (
    <CookieConsent
      containerClasses="cookie-info"
      cookieName="user-accept-cookies"
      buttonText="Я понимаю"
    >
      <span style={{ fontSize: 12 }}>
        Продолжая использовать наш сайт, вы даете согласие на обработку файлов
        cookie, которые обеспечивают правильную работу сайта.
      </span>
    </CookieConsent>
  );
};
