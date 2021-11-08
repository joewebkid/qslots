import React, { FC, memo, useRef } from 'react';
import MainBg from '@lending/img/main-sectio-abg-bg.png';
import MainBgPhone from '@lending/img/mobile-bg.png';

import Arrow from '@lending/img/more-arrow.svg';
import NextArrow from '@lending/img/next-arrow.svg';

import Mac1 from '@lending/img/mac1.png';
import Mac2 from '@lending/img/mac2.png';
import Mac3 from '@lending/img/mac3.png';
import Mac4 from '@lending/img/mac4.png';

import { Image, LazyImage } from '../LazyComponent';
import {
    LinkToBottom, LinkToStep, LinkToTop, LinkToVideo,
} from './utils';

export const MainSection: FC = memo(() => {
    const MacBanner = useRef(null);

    return (
        <section className="main_section">
            <LazyImage
                className="lazy main_section-bg mobile"
                src={MainBgPhone}
            />
            <LazyImage className="lazy main_section-bg descktop" src={MainBg} />

            <div className="container">
                <div className="main_section-content">
                    <h2>
                        Первая интеллектуальная платформа
                        <span className="nowrap">для подготовки</span>
                        <span className="nowrap">к тестам</span>
                        <span className="orange">Talent Q</span>
                    </h2>
                    <p>от эксперта Антона Добрышина</p>

                    <div className="main_section-btns_block">
                        <div className="main_section-btns">
                            <LinkToBottom className="start-btn scroll-btn">
                                <span>Начать сейчас</span>
                                <svg
                                    width="17"
                                    height="19"
                                    viewBox="0 0 17 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.174 8.46095C16.8979 8.87889 16.8979 9.92374 16.174 10.3417L2.32952 18.3348C1.60563 18.7527 0.700767 18.2303 0.700767 17.3944L0.700767 1.40821C0.700767 0.572333 1.60563 0.0499098 2.32953 0.46785L16.174 8.46095Z"
                                        fill="white"
                                    />
                                </svg>
                            </LinkToBottom>
                            <p>Время - деньги</p>
                        </div>

                        <div className="main_section-btns">
                            <LinkToVideo className="more-btn">
                                <span>Подробнее</span>
                                <Image src={Arrow} />
                            </LinkToVideo>
                            <p>Формула успеха</p>
                        </div>
                    </div>
                </div>
                <LinkToTop className="main_section-banner" ref={MacBanner}>
                    <Image
                        className="main_section-banner_img is-active lazy"
                        src={Mac1}
                    />
                    <Image
                        className="main_section-banner_img is-active lazy"
                        src={Mac2}
                    />
                    <Image
                        className="main_section-banner_img is-active lazy"
                        src={Mac3}
                    />
                    <Image
                        className="main_section-banner_img is-active lazy"
                        src={Mac4}
                    />
                </LinkToTop>
            </div>

            <div className="main_section-next_btn">
                <LinkToStep className="next-link">
                    <Image src={NextArrow} />
                </LinkToStep>
            </div>
        </section>
    );
});
