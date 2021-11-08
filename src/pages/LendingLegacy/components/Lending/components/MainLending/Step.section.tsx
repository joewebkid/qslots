import React, {
    FC, memo, useEffect, useState,
} from 'react';
import Number1 from '@lending/img/number1.png';
import Number2 from '@lending/img/number2.png';

import VideoBg from '@lending/images/video-bg.png';
import VideoPlay from '@lending/img/play.svg';
import VideoIcon1 from '@lending/images/video-icon1.png';
import VideoIcon2 from '@lending/images/video-icon2.png';
import VideoIcon3 from '@lending/images/video-icon3.png';
import PlaySmall from '@lending/img/play-small.svg';

import TestImg from '@lending/img/test-img.png';
import Arrow1 from '@lending/img/arrow1.svg';
import Arrow2 from '@lending/img/arrow2.svg';

import Logo2 from '@lending/img/logo2.svg';

import MacIcon from '@lending/img/mac-icon.svg';
import CMac1 from '@lending/img/s_mac1.png';
import CMac2 from '@lending/img/s_mac2.png';
import CMac3 from '@lending/img/s_mac3.png';
import CMac4 from '@lending/img/s_mac4.png';

import { LinkToBottom, LinkToTop } from './utils';
import { Image, LazyImage } from '../LazyComponent';
import useVisibility from '../../hooks';
import '@lending/style/main.scss';

export const StepSection: FC = memo(() => {
    const { isVisible, element } = useVisibility();

    const [isVisibleArrow, setIsVisibleArrow] = useState(false);
    useEffect(() => {
        if (isVisible) {
            setTimeout(() => setIsVisibleArrow(true), 100);
        }
    }, [isVisible]);

    return (
        <section className="steps_section" id="main_step">
            <div className="container">
                <div className="steps_section-line" />
                <div className="steps_section-title_wrap">
                    <h2 className="steps_section-title">
                        <b className="raleway">Talent Q:</b>
6 шагов к успеху
                    </h2>
                    <h2 className="steps_section-title">
                        <b className="raleway">Talent Q:</b>
6 шагов к успеху
                    </h2>
                </div>
            </div>

            {/* <!-- VIDEO --> */}
            <div className="video_block" id="main_video">
                <div className="video_block-figur">
                    <div />
                    <div />
                </div>
                <div className="container">
                    <h2>Изучите видеоуроки</h2>
                    <div className="video_block-content_wrapper">
                        <div className="video_block-content">
                            <div className="video_block-iframe">
                                <LazyImage
                                    className="lazy video_block-banner"
                                    src={VideoBg}
                                />
                                <LinkToBottom className="video_block-play">
                                    <LazyImage src={VideoPlay} />
                                    <span>
                                        Смотреть
                                        <br />
                                        видеоуроки
                                    </span>
                                </LinkToBottom>
                            </div>
                            <div className="video_block-desc">
                                <LazyImage
                                    wrapperClassName="display_content"
                                    src={MacIcon}
                                />
                                <span>Удобно смотреть в любого устройства</span>
                            </div>
                        </div>
                        <div className="video_block-bar">
                            <LazyImage
                                wrapperClassName="display_block"
                                src={Number1}
                                className="video_block-number lazy"
                            />
                            <div className="video_block-item">
                                <div>
                                    <Image src={VideoIcon1} />
                                    <Image src={PlaySmall} />
                                    <span>07:51</span>
                                </div>

                                <p>
                                    Как успевать
                                    <span className="nowrap">в отведенное</span>
                                    время?
                                </p>
                            </div>

                            <div className="video_block-item">
                                <div>
                                    <Image src={VideoIcon2} />
                                    <Image src={PlaySmall} />
                                    <span>07:51</span>
                                </div>
                                <p>
                                    Что читать сначала:
                                    <span className="nowrap">текст или</span>
                                    вопрос?
                                </p>
                            </div>

                            <div className="video_block-item">
                                <div>
                                    <Image src={VideoIcon3} />
                                    <Image src={PlaySmall} />
                                    <span>07:51</span>
                                </div>
                                <p>Как быстро находить верные ответы?</p>
                            </div>

                            <div className="video_block-bottom_item">
                                <svg
                                    width="49"
                                    height="55"
                                    viewBox="0 0 49 55"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M44.3571 21.5225L26.2721 3.43745C24.4025 1.56778 21.3601 1.56767 19.4903 3.43745C17.8095 5.11813 17.6648 7.68142 18.906 9.51176L18.8808 9.63765C17.5769 16.1575 14.4026 22.0889 9.70084 26.7906L1.40573 35.0857C-0.468418 36.96 -0.468738 39.9932 1.40573 41.8675L5.92685 46.3886C7.8009 48.2627 10.8344 48.2629 12.7086 46.3886L13.839 45.2583L21.7511 53.1704C23.6252 55.0446 26.6585 55.0447 28.5328 53.1704C30.4025 51.3007 30.4025 48.2584 28.5328 46.3887L25.1419 42.9978L26.2722 41.8675C28.1463 39.9934 28.1466 36.9602 26.2722 35.0858L25.5041 34.3176C29.2828 31.672 33.5742 29.8301 38.157 28.9135L38.2845 28.8881C40.1555 30.1513 42.7129 29.9482 44.3571 28.304H44.3572C46.2267 26.4345 46.2267 23.3922 44.3571 21.5225ZM10.4481 44.128C9.82343 44.7526 8.81206 44.7527 8.18741 44.1279L3.66629 39.6068C3.04154 38.982 3.04154 37.971 3.66629 37.3463L11.5783 29.4341L18.3601 36.2159C17.586 36.99 11.2412 43.3348 10.4481 44.128ZM26.2721 48.6492C26.8952 49.2723 26.8952 50.2865 26.2721 50.9097C25.6489 51.5329 24.6347 51.5329 24.0115 50.9097L16.0994 42.9976L18.3601 40.737L26.2721 48.6492ZM20.6206 38.4765C21.1012 37.996 21.8205 37.2599 22.9557 36.2903L24.0115 37.3463C24.6363 37.971 24.6363 38.982 24.0115 39.6068L22.8812 40.7371L20.6206 38.4765ZM20.6885 34.0234L13.7707 27.1056C17.478 22.8248 20.1329 17.7717 21.5532 12.2821L35.5121 26.2409C30.0224 27.6611 24.9694 30.316 20.6885 34.0234ZM42.0962 26.0434C41.4715 26.668 40.4604 26.668 39.8357 26.0434L21.7509 7.95857C21.1261 7.33371 21.1261 6.32276 21.7509 5.69801C22.3756 5.07326 23.3868 5.07326 24.0115 5.69801L42.0962 23.7827C42.7194 24.406 42.7194 25.42 42.0962 26.0434Z"
                                        fill="#FC6652"
                                    />
                                    <path
                                        d="M12.7073 35.0873C12.0832 34.4631 11.071 34.4631 10.4467 35.0873L8.18618 37.3479C7.56196 37.9721 7.56196 38.9842 8.18618 39.6084C8.8103 40.2326 9.82263 40.2326 10.4467 39.6084L12.7073 37.3479C13.3315 36.7236 13.3315 35.7115 12.7073 35.0873Z"
                                        fill="#FC6652"
                                    />
                                    <path
                                        className="video_block-bottom_item-svg"
                                        d="M33.6127 0C32.7298 0 32.0142 0.715678 32.0142 1.5985V4.79549C32.0142 5.67831 32.7298 6.39399 33.6127 6.39399C34.4955 6.39399 35.2112 5.67831 35.2112 4.79549V1.5985C35.2112 0.715678 34.4955 0 33.6127 0Z"
                                        fill="#FC6652"
                                    />
                                    <path
                                        className="video_block-bottom_item-svg"
                                        d="M46.4027 12.7871H43.2057C42.3229 12.7871 41.6072 13.5028 41.6072 14.3856C41.6072 15.2684 42.3229 15.9841 43.2057 15.9841H46.4027C47.2855 15.9841 48.0012 15.2684 48.0012 14.3856C48.0012 13.5028 47.2854 12.7871 46.4027 12.7871Z"
                                        fill="#FC6652"
                                    />
                                    <path
                                        className="video_block-bottom_item-svg"
                                        d="M44.3373 3.66543C43.7132 3.04121 42.701 3.04121 42.0768 3.66543L38.8798 6.86243C38.2556 7.48665 38.2556 8.49876 38.8798 9.12298C39.5039 9.7472 40.5161 9.74731 41.1403 9.12298L44.3373 5.92599C44.9616 5.30177 44.9616 4.28976 44.3373 3.66543Z"
                                        fill="#FC6652"
                                    />
                                </svg>

                                <p>
                                    Об этом и не только расскажет
                                    <b>практикующий эксперт Антон Добрышин.</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- VIDEO-END --> */}

            {/* <!-- TEST_BLOCK --> */}
            <div className="test_block">
                <div className="test_block-figur" />
                <div className="container">
                    <div className="test_block-images">
                        <div className="test_block-images_heading">
                            <h2>Тест вашего работадателя</h2>
                            <div className="test_block-images_logo">
                                <Image src={Logo2} />
                                <span>Solutions</span>
                            </div>
                        </div>
                        <div
                            className="test_block-images_content"
                            ref={element}
                        >
                            <LazyImage src={TestImg} />
                            <LazyImage
                                src={Arrow1}
                                className={[
                                    'lazy test_block-images_arrow test_block-images_arrow-1 revealator-slideleft revealator-once revealator-delay1',
                                    isVisibleArrow && 'revealator-within',
                                ].join(' ')}
                            />
                            <LazyImage
                                src={Arrow2}
                                className={[
                                    'lazy test_block-images_arrow test_block-images_arrow-2 revealator-slideright revealator-once revealator-delay1',
                                    isVisibleArrow && 'revealator-within',
                                ].join(' ')}
                            />
                        </div>
                    </div>
                    <div className="test_block-desc">
                        <LazyImage
                            src={Number2}
                            className="test_block-number lazy"
                            wrapperClassName="display_block"
                        />
                        <h2>Попробуйте реальные тесты</h2>
                        <p>
                            Наши и реальные тесты идентичны по сложности,
                            тематике и формату вопросов.
                        </p>
                        <LinkToBottom>
                            <span>Пройти тест</span>
                            <b />
                        </LinkToBottom>
                    </div>
                </div>
            </div>
            {/* <!-- TEST_BLOCK-END --> */}

            {/* <!-- SITUATION_BLOCK --> */}
            <div className="situation_block">
                <div className="situation_block-figur-1" />
                <div className="situation_block-figur-2" />
                <div className="container">
                    <h2>Разберите нестандартные ситуации</h2>
                    <div className="situation_block-container">
                        <LinkToTop className="situation_block-item">
                            <span />
                            <p>
                                Ноутбук начал
                                <b>перезагружаться</b>
                                прямо посреди теста
                            </p>
                            <Image
                                src={CMac1}
                                wrapperClassName="display_content video_mac"
                            />
                        </LinkToTop>

                        <LinkToTop className="situation_block-item">
                            <span />
                            <p>
                                Не удается запустить тестирование —
                                <b>техническая ошибка</b>
                            </p>
                            <Image
                                wrapperClassName="display_content video_mac"
                                src={CMac2}
                            />
                        </LinkToTop>

                        <LinkToTop className="situation_block-item">
                            <span />
                            <p>
                                <b>Оборвалось интернет соединение</b>
в самый
                                ответственный момент
                            </p>
                            <Image src={CMac3} />
                        </LinkToTop>

                        <LinkToTop className="situation_block-item">
                            <span />
                            <p>
                                Загрузился вопрос,
                                <br />
                                <b>но не загрузилась таблица</b>
                            </p>
                            <Image src={CMac4} />
                        </LinkToTop>
                    </div>
                </div>
            </div>
            {/* <!-- SITUATION_BLOCK-END --> */}
        </section>
    );
});
