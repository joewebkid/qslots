import React, {
    useEffect,
    useContext,
    useCallback,
    useState,
    useRef,
    useMemo,
} from 'react';
import ImagePlaceHolder from './img/placeholder.png';
import MainBg from './img/main-sectio-abg-bg.png';
import MainBgPhone from './img/mobile-bg.png';
import LogoSvg from './img/logo.svg';

import Arrow from './img/more-arrow.svg';
import NextArrow from './img/next-arrow.svg';
import VideoBg from './images/video-bg.png';
import VideoPlay from './img/play.svg';

import Mac1 from './img/mac1.png';
import Mac2 from './img/mac2.png';
import Mac3 from './img/mac3.png';
import Mac4 from './img/mac4.png';
import MacIcon from './img/mac-icon.svg';

import Number1 from './img/number1.png';
import Number2 from './img/number2.png';
import Number3 from './img/number3.png';
import Number4 from './img/number-4.png';
import Number5 from './img/number5.png';
import Number6 from './img/number6.png';

import Man from './img/man.png';
import EvIcon from './img/ev-icon.svg';

import VideoIcon1 from './images/video-icon1.png';
import VideoIcon2 from './images/video-icon2.png';
import VideoIcon3 from './images/video-icon3.png';
import PlaySmall from './img/play-small.svg';

import TestImg from './img/test-img.png';
import Arrow1 from './img/arrow1.svg';
import Arrow2 from './img/arrow2.svg';

import Logo2 from './img/logo2.svg';
import './style/main.scss';

import CMac1 from './img/s_mac1.png';
import CMac2 from './img/s_mac2.png';
import CMac3 from './img/s_mac3.png';
import CMac4 from './img/s_mac4.png';

import BotSection from './img/bot-section-before.png';
import BotW from './img/bot-w.png';
import MobileVector from './img/mobile-vector.png';

import MobileGrafic from './img/mobile-grafic.png';
import MixIcon from './img/mix-icon.svg';
import MatrixImg1 from './img/matrix-img1.png';
import MatrixImg2 from './img/matrix-img2.png';
import MatrixImg3 from './img/matrix-img3.png';
import Grafic from './img/grafic.png';

import ExMac from './img/ex-mac-bg.png';
import ExMac1 from './img/ex-mac1.png';
import ExMac2 from './img/ex-mac2.png';
import ExMac3 from './img/ex-mac3.png';

import MobileMac from './img/mobile-mac.png';
import ExBtn from './img/ex-btn.svg';
import NoveltyIcon from './img/novelty-icon.svg';
import MobileStep from './img/mobile-steps.png';
import NoveltyBg from './img/novently-bg.png';
import NoveltyIcon1 from './img/novently-icon1.png';
import NoveltyIcon2 from './img/novently-icon2.png';
import NoveltyIcon3 from './img/novently-icon3.png';

import HowLinks1 from './img/how-links1.svg';
import HowLinks2 from './img/how-links2.svg';
import HowBtnIcon from './img/how-btn-iocn.svg';

import Pay1 from './img/pay1.svg';
import Pay2 from './img/pay2.svg';
import Pay3 from './img/pay3.svg';

import Soc1 from './img/soc1.svg';
import Soc2 from './img/soc2.svg';
import Soc3 from './img/soc3.svg';
import Soc4 from './img/soc4.svg';
import Soc5 from './img/soc5.svg';
import Soc6 from './img/soc6.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Scroll from 'react-scroll';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import useVisibility from './hooks';
import { DialogPolice } from './components/QDialogPolice';

let Link = Scroll.Link;
let Element = Scroll.Element;
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;

export default function LandingPage ({ setOpen, setOpenSigin, ...props }: {setOpen: any, setOpenSigin: any}) {
    const MacBanner = useRef(null);
    const [obj, setObj] = useState(false);

    const [openPolice0, setOpenPolice0] = useState(false);
    const [openPolice1, setOpenPolice1] = useState(false);

    setTimeout(() => {
        Array.from(
            document.getElementsByClassName('main_section-banner_img'),
        ).forEach((element) => {
            element.classList.add('is-active');
        });
    }, 300);

    const [
        beforeCheckoutSubmitShown,
        beforeCheckoutSubmitRef,
    ] = useVisibility();
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        if (beforeCheckoutSubmitShown) setIsVisible(true);
    }, [beforeCheckoutSubmitShown]);

    const [
        beforeCheckoutSubmitShownArrow,
        beforeCheckoutSubmitRefArrow,
    ] = useVisibility();

    const [isVisibleArrow, setIsVisibleArrow] = useState(false);
    useEffect(() => {
        if (beforeCheckoutSubmitShownArrow)
            setTimeout(() => setIsVisibleArrow(true), 100);
    }, [beforeCheckoutSubmitShownArrow]);

    const [countImage, setCountImage] = useState(new Set());
    const LazyComponent = useCallback((props) => {
        return <LazyLoadImage effect="opacity" {...props} />;
    }, []);

    const LazyComponent2 = useCallback((props) => {
        return <img effect="opacity" {...props} />;
    }, []);

    const toGoElement = (id: string) => {
        const element = document.getElementById(id);
        return () => {
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        };
    };

    const LinkToBottom = ({ className, children }: {className: string, children: any }) => (
        <a
            className={className}
            onClick={toGoElement('main_bottom')}
            style={{ cursor: 'pointer' }}
        >
            {children}
        </a>
    );

    const LinkToVideo = ({ className, children }: {className: string, children: any }) => (
        <a
            className={className}
            onClick={toGoElement('main_video')}
            style={{ cursor: 'pointer' }}
        >
            {children}
        </a>
    );

    const LinkToStep = ({ className, children }: {className: string, children: any }) => (
        <a
            className={className}
            onClick={toGoElement('main_step')}
            style={{ cursor: 'pointer' }}
        >
            {children}
        </a>
    );

    // useEffect(() => {
    //   Events.scrollEvent.register('begin', function (to, element) {
    //     console.log('begin', arguments)
    //   })

    //   Events.scrollEvent.register('end', function (to, element) {
    //     console.log('end', arguments)
    //   })

    //   scrollSpy.update()
    // }, [])

    const LinkToTop = ({ className = '', children}: { className?: string, children?: any }) => (
        <Link
            to="main_header"
            spy={true}
            smooth={true}
            containerId="containerElement"
            className={className}
            style={{ cursor: 'pointer' }}
        >
            {children}
        </Link>
    );

    return (
        <Element
            name="containerElement"
            id="containerElement"
            style={{
                overflowY: 'scroll',
            }}
        >
            <DialogPolice
                open={openPolice0}
                setOpen={setOpenPolice0}
                type={0}
            />
            <DialogPolice
                open={openPolice1}
                setOpen={setOpenPolice1}
                type={1}
            />
            <div className="wrapper" style={{ position: 'relative' }}>
                {/* <!-- HEADER --> */}
                <header className="header" id="main_header">
                    <div className="container">
                        <Link className="header_logo" to="/">
                            <img src={LogoSvg} />
                            <span>Solutions</span>
                        </Link>
                        <a
                            className="header_login-btn header_registration-btn"
                            onClick={(e) => setOpen(true)}
                            style={{ cursor: 'pointer' }}
                        >
                            Регистрация
                        </a>
                        <a
                            className="header_login-btn"
                            onClick={(e) => setOpenSigin(true)}
                            style={{ cursor: 'pointer' }}
                        >
                            Вход
                        </a>
                    </div>
                </header>
                {/* <!-- HEADER-END --> */}

                <main className="main">
                    {/* <!-- MAIN_SECTION --> */}
                    <section className="main_section">
                        <LazyComponent
                            className="lazy main_section-bg mobile"
                            src={MainBgPhone}
                        />
                        <LazyComponent
                            className="lazy main_section-bg descktop"
                            src={MainBg}
                        />

                        <div className="container">
                            <div className="main_section-content">
                                <h2>
                                    Первая интеллектуальная платформа{' '}
                                    <span className="nowrap">
                                        для подготовки
                                    </span>{' '}
                                    <span className="nowrap">к тестам</span>{' '}
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
                                            <img src={Arrow} />
                                        </LinkToVideo>
                                        <p>Формула успеха</p>
                                    </div>
                                </div>
                            </div>
                            <LinkToTop
                                className="main_section-banner"
                            >
                                <img
                                    className="main_section-banner_img is-active lazy"
                                    src={Mac1}
                                />
                                <img
                                    className="main_section-banner_img is-active lazy"
                                    src={Mac2}
                                />
                                <img
                                    className="main_section-banner_img is-active lazy"
                                    src={Mac3}
                                />
                                <img
                                    className="main_section-banner_img is-active lazy"
                                    src={Mac4}
                                />
                            </LinkToTop>
                        </div>

                        <div className="main_section-next_btn">
                            <LinkToStep className="next-link">
                                <img src={NextArrow} />
                            </LinkToStep>
                        </div>
                    </section>
                    {/* <!-- MAIN_SECTION-END --> */}

                    {/* <!-- STEPS_SECTION --> */}
                    <section className="steps_section" id="main_step">
                        <div className="container">
                            <div className="steps_section-line"></div>
                            <div className="steps_section-title_wrap">
                                <h2 className="steps_section-title">
                                    <b className="raleway">Talent Q:</b> 6 шагов
                                    к успеху
                                </h2>
                                <h2 className="steps_section-title">
                                    <b className="raleway">Talent Q:</b> 6 шагов
                                    к успеху
                                </h2>
                            </div>
                        </div>

                        {/* <!-- VIDEO --> */}
                        <div className="video_block" id="main_video">
                            <div className="video_block-figur">
                                <div></div>
                                <div></div>
                            </div>
                            <div className="container">
                                <h2>Изучите видеоуроки</h2>
                                <div className="video_block-content_wrapper">
                                    <div className="video_block-content">
                                        <div className="video_block-iframe">
                                            <LazyComponent
                                                className="lazy video_block-banner"
                                                src={VideoBg}
                                            />
                                            <LinkToBottom className="video_block-play">
                                                <LazyComponent
                                                    src={VideoPlay}
                                                />
                                                <span>
                                                    Смотреть <br /> видеоуроки
                                                </span>
                                            </LinkToBottom>
                                        </div>
                                        <div className="video_block-desc">
                                            <LazyComponent
                                                wrapperClassName={
                                                    'display_content'
                                                }
                                                src={MacIcon}
                                            />
                                            <span>
                                                Удобно смотреть в любого
                                                устройства
                                            </span>
                                        </div>
                                    </div>
                                    <div className="video_block-bar">
                                        <LazyComponent
                                            wrapperClassName={'display_block'}
                                            src={Number1}
                                            className="video_block-number lazy"
                                        />
                                        <div className="video_block-item">
                                            <div>
                                                <img src={VideoIcon1} />
                                                <img src={PlaySmall} />
                                                <span>07:51</span>
                                            </div>

                                            <p>
                                                Как успевать{' '}
                                                <span className="nowrap">
                                                    в отведенное
                                                </span>{' '}
                                                время?
                                            </p>
                                        </div>

                                        <div className="video_block-item">
                                            <div>
                                                <img src={VideoIcon2} />
                                                <img src={PlaySmall} />
                                                <span>07:51</span>
                                            </div>
                                            <p>
                                                Что читать сначала:{' '}
                                                <span className="nowrap">
                                                    текст или
                                                </span>{' '}
                                                вопрос?
                                            </p>
                                        </div>

                                        <div className="video_block-item">
                                            <div>
                                                <img src={VideoIcon3} />
                                                <img src={PlaySmall} />
                                                <span>07:51</span>
                                            </div>
                                            <p>
                                                Как быстро находить верные
                                                ответы?
                                            </p>
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
                                                Об этом и не только расскажет{' '}
                                                <b>
                                                    практикующий эксперт Антон
                                                    Добрышин.
                                                </b>{' '}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- VIDEO-END --> */}

                        {/* <!-- TEST_BLOCK --> */}
                        <div className="test_block">
                            <div className="test_block-figur"></div>
                            <div className="container">
                                <div className="test_block-images">
                                    <div className="test_block-images_heading">
                                        <h2>Тест вашего работадателя</h2>
                                        <div className="test_block-images_logo">
                                            <img src={Logo2} />
                                            <span>Solutions</span>
                                        </div>
                                    </div>
                                    <div
                                        className="test_block-images_content"
                                        // ref={beforeCheckoutSubmitRefArrow}
                                    >
                                        <LazyComponent src={TestImg} />
                                        <LazyComponent
                                            src={Arrow1}
                                            className={[
                                                'lazy test_block-images_arrow test_block-images_arrow-1 revealator-slideleft revealator-once revealator-delay1',
                                                isVisibleArrow &&
                                                    'revealator-within',
                                            ].join(' ')}
                                        />
                                        <LazyComponent
                                            src={Arrow2}
                                            className={[
                                                'lazy test_block-images_arrow test_block-images_arrow-2 revealator-slideright revealator-once revealator-delay1',
                                                isVisibleArrow &&
                                                    'revealator-within',
                                            ].join(' ')}
                                        />
                                    </div>
                                </div>
                                <div className="test_block-desc">
                                    <LazyComponent
                                        src={Number2}
                                        className="test_block-number lazy"
                                        wrapperClassName={'display_block'}
                                    />
                                    <h2>Попробуйте реальные тесты</h2>
                                    <p>
                                        Наши и реальные тесты идентичны по
                                        сложности, тематике и формату вопросов.
                                    </p>
                                    <LinkToBottom className="">
                                        <span>Пройти тест</span>
                                        <b></b>
                                    </LinkToBottom>
                                </div>
                            </div>
                        </div>
                        {/* <!-- TEST_BLOCK-END --> */}

                        {/* <!-- SITUATION_BLOCK --> */}
                        <div className="situation_block">
                            <div className="situation_block-figur-1"></div>
                            <div className="situation_block-figur-2"></div>
                            <div className="container">
                                <h2>Разберите нестандартные ситуации</h2>
                                <div className="situation_block-container">
                                    <LinkToTop className="situation_block-item">
                                        <span></span>
                                        <p>
                                            Ноутбук начал <b>перезагружаться</b>{' '}
                                            прямо посреди теста
                                        </p>
                                        <LazyComponent2
                                            src={CMac1}
                                            className={
                                                'display_content video_mac'
                                            }
                                        />
                                    </LinkToTop>

                                    <LinkToTop className="situation_block-item">
                                        <span></span>
                                        <p>
                                            Не удается запустить тестирование —{' '}
                                            <b>техническая ошибка</b>
                                        </p>
                                        <LazyComponent2
                                            className={
                                                'display_content video_mac'
                                            }
                                            src={CMac2}
                                        />
                                    </LinkToTop>

                                    <LinkToTop className="situation_block-item">
                                        <span></span>
                                        <p>
                                            <b>
                                                Оборвалось интернет соединение
                                            </b>{' '}
                                            в самый ответственный момент
                                        </p>
                                        <img src={CMac3} />
                                    </LinkToTop>

                                    <LinkToTop className="situation_block-item">
                                        <span></span>
                                        <p>
                                            Загрузился вопрос, <br />{' '}
                                            <b>но не загрузилась таблица</b>
                                        </p>
                                        <img src={CMac4} />
                                    </LinkToTop>
                                </div>
                            </div>
                        </div>
                        {/* <!-- SITUATION_BLOCK-END --> */}
                    </section>
                    {/* <!-- STEPS_SECTION-END --> */}

                    {/* <!-- EVACUATION_BLOCK --> */}
                    <div className="evacuation_block">
                        <div className="container">
                            <div className="evacuation_block-wrap">
                                <div className="evacuation_block-content">
                                    <h2>Без паники!</h2>
                                    <p>
                                        У нас есть план эвакуации из любой
                                        проблемной ситуации.
                                    </p>
                                    <LazyComponent src={Man} />
                                </div>
                                <div className="evacuation_block-more">
                                    <LazyComponent
                                        wrapperClassName={'display_content'}
                                        src={Number3}
                                        className="lazy evacuation_block-number"
                                    />
                                    <LinkToBottom className="evacuation_block-link">
                                        <span>Прокачать реакцию</span>
                                        <LazyComponent src={EvIcon} />
                                    </LinkToBottom>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- EVACUATION_BLOCK-END --> */}

                    {/* <!-- BOTTOM_SECTION --> */}
                    <div className="bottom_section">
                        {/* <!-- BOTTOM_SECTION-TOP_BG --> */}
                        <div className="bottom_section-figur_wrapper">
                            <div className="situation_block-figur-3"></div>
                        </div>

                        <LazyComponent2
                            className="bottom_section-top_image-2 bottom_section-top_image lazy"
                            src={BotSection}
                        />

                        <LazyComponent2
                            className="bottom_section-top_image bottom_section-top_image-descktop lazy"
                            src={BotW}
                        />
                        <LazyComponent2
                            className="bottom_section-top_image bottom_section-top_image-mobile lazy"
                            src={MobileVector}
                        />
                        {/* <!-- BOTTOM_SECTION-TOP_BG-END --> */}

                        {/* <!-- METRIX --> */}
                        <div className="metrix">
                            <div className="container">
                                <div className="metrix-content">
                                    <LazyComponent2
                                        src={Number4}
                                        className="display_content metrix-number lazy"
                                    />
                                    <h2>Посмотрите глазами работодателя</h2>
                                    <p>
                                        По результатам наших тестов вы получите
                                        отчёты, идентичные тем, что получает
                                        работодатель после реального теста.{' '}
                                    </p>
                                    <p>
                                        Это поможет вам оценить собственные силы
                                        в глазах будущего босса.
                                    </p>
                                    <LazyComponent
                                        src={MobileGrafic}
                                        className="metrix-mobile_grafic lazy"
                                    />
                                    <div className="metrix-content_btn">
                                        <LinkToBottom className="">
                                            <span>Скачать отчеты</span>
                                            <LazyComponent
                                                wrapperClassName={
                                                    'display_content'
                                                }
                                                src={MixIcon}
                                            />
                                        </LinkToBottom>
                                    </div>
                                </div>
                                <div className="metrix-grafic">
                                    <div className="metrix-grafic_figur"></div>
                                    <LazyComponent
                                        src={MatrixImg1}
                                        className="lazy metrix-grafic-img metrix-grafic-img1  revealator-once revealator-delay1"
                                    />
                                    <LazyComponent
                                        src={MatrixImg2}
                                        className="lazy metrix-grafic-img metrix-grafic-img2  revealator-once revealator-delay2"
                                    />
                                    <LazyComponent
                                        src={MatrixImg3}
                                        className="lazy metrix-grafic-img metrix-grafic-img3  revealator-once revealator-delay3"
                                    />
                                    <LazyComponent
                                        src={Grafic}
                                        className="lazy metrix-grafic-img metrix-grafic-img4  revealator-once revealator-delay1"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <!-- METRIX-END --> */}

                        {/* <!-- EXCLUSIVE --> */}
                        <div className="exclusive">
                            <div className="container">
                                <LinkToTop className="exclusive-mac">
                                    <img
                                        className="exclusive-mac-bg lazy"
                                        src={ExMac}
                                    />
                                    <img
                                        src={ExMac1}
                                        className="lazy exclusive-mac_img1 exclusive-mac_img"
                                    />
                                    <img
                                        src={ExMac2}
                                        className="lazy exclusive-mac_img2 exclusive-mac_img"
                                    />
                                    <img
                                        src={ExMac3}
                                        className="lazy exclusive-mac_img3 exclusive-mac_img"
                                    />
                                </LinkToTop>
                                <div className="exclusive-content">
                                    <div className="exclusive-title">
                                        <span>ЭКСКЛЮЗИВ</span>
                                    </div>
                                    <h2>
                                        Пройдите верификацию{' '}
                                        <span className="nowrap">
                                            и прокторинг
                                        </span>
                                    </h2>
                                    <p>
                                        Иногда работодатели устанавливают{' '}
                                        <span className="nowrap">
                                            за кандидатами
                                        </span>{' '}
                                        роботизированное наблюдение или просят
                                        пройти{' '}
                                        <span className="nowrap">
                                            повторное тестирование.
                                        </span>
                                    </p>
                                    <p>
                                        Узнайте, что именно отслеживает система.
                                        Опробуйте верификацию и прокторинг{' '}
                                        <span className="nowrap">на нашей</span>{' '}
                                        платформе!
                                    </p>
                                    <img
                                        src={Number5}
                                        className="exclusive-number lazy"
                                    />
                                    <div className="exclusive-mobile_mac">
                                        <img src={MobileMac} />
                                    </div>
                                    <div className="metrix-content_btn">
                                        <LinkToBottom className="exclusive-btn">
                                            <span>Пройти верификацию</span>
                                            <LazyComponent
                                                wrapperClassName={
                                                    'display_content'
                                                }
                                                src={ExBtn}
                                            />
                                        </LinkToBottom>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- EXCLUSIVE-END --> */}

                        {/* <!-- NOVELTY --> */}
                        <div className="novelty">
                            <div className="container">
                                <div className="novelty-content">
                                    <div className="novelty-title">
                                        <span>Новинка!</span>
                                    </div>
                                    <h2>Получите нужный курс за минуту.</h2>
                                    <p>
                                        Скопируйте текст письма о назначении
                                        тестов
                                        <span className="nowrap">
                                            и ответьте
                                        </span>{' '}
                                        на несколько вопросов. <br />
                                        Наш алгоритм определит систему
                                        тестирования, сформирует курс и укажет
                                        цену.
                                    </p>

                                    <LazyComponent
                                        wrapperClassName={'display_content'}
                                        src={Number6}
                                        className="novelty-number lazy"
                                    />
                                    <div className="metrix-content_btn">
                                        <LinkToBottom className="exclusive-btn">
                                            <span>Хочу и беру!</span>
                                            <LazyComponent
                                                wrapperClassName={
                                                    'display_content'
                                                }
                                                src={NoveltyIcon}
                                            />
                                        </LinkToBottom>
                                    </div>
                                </div>

                                <LazyComponent
                                    src={MobileStep}
                                    className="novelty-mobile_steps lazy"
                                />

                                <div className="novelty-steps">
                                    <LazyComponent
                                        src={NoveltyBg}
                                        className="lazy novelty-steps-bg"
                                    />
                                    <LazyComponent
                                        src={NoveltyIcon1}
                                        className="lazy novelty-img novelty-img-1 revealator-once revealator-delay1"
                                    />
                                    <LazyComponent
                                        src={NoveltyIcon2}
                                        className="lazy novelty-img novelty-img-2 revealator-once revealator-delay2"
                                    />
                                    {/* <img
                  src={NoveltyIcon2}

                /> */}
                                    <LazyComponent
                                        src={NoveltyIcon3}
                                        className="lazy novelty-img novelty-img-3 revealator-once revealator-delay3"
                                    />
                                    {/* <img
                  src={NoveltyIcon3}

                /> */}
                                    {/* </LazyLoadImage> */}
                                    {/* </LazyLoad> */}
                                </div>
                            </div>
                        </div>
                        {/* <!-- NOVELTY-END --> */}

                        {/* <!-- HOW_BLOCK --> */}
                        <div
                            className="how_block"
                            //ref={beforeCheckoutSubmitRef}
                        >
                            <div className="container">
                                <h2>Как воспользоваться платформой</h2>
                                <div className="how_block-flex">
                                    <div
                                        className={[
                                            'how_block-item revealator-slideleft revealator-once revealator-delay3',
                                            isVisible && 'revealator-within',
                                        ].join(' ')}
                                    >
                                        <div className="how_block-item_content">
                                            <span>01</span>
                                            <h2>Проверка и подбор курса</h2>
                                            <p>
                                                Ответьте на несколько вопросов{' '}
                                                <b className="nowrap">
                                                    и вставьте
                                                </b>{' '}
                                                в специальное окно текст письма
                                                о назначении тестов.{' '}
                                            </p>
                                            <p>
                                                Наш алгоритм определит,
                                                действительно ли у вас Talent Q,
                                                чтобы вы зря не тратили деньги.
                                                Затем система сформирует
                                                необходимый курс и укажет цену.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="how_block-item">
                                        <div className="how_block-item_active-content">
                                            <span>02</span>
                                            <h2>Регистрация в системе</h2>
                                            <p>
                                                Войдите на платформу, используя
                                                код из СМС. Процедура займёт{' '}
                                                <br />
                                                не больше минуты.
                                            </p>

                                            <ul className="how_block-links">
                                                <li>
                                                    <LinkToTop>
                                                        <LazyComponent
                                                            wrapperClassName={
                                                                'display_content'
                                                            }
                                                            src={HowLinks1}
                                                        />
                                                    </LinkToTop>
                                                </li>

                                                <li>
                                                    <LinkToTop>
                                                        <LazyComponent
                                                            wrapperClassName={
                                                                'display_content'
                                                            }
                                                            src={HowLinks2}
                                                        />
                                                    </LinkToTop>
                                                </li>
                                            </ul>

                                            <div className="how_block-btn_wrap">
                                                <a
                                                    className="how_block-btn"
                                                    onClick={(e) =>
                                                        setOpen(true)
                                                    }
                                                    style={{
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    <span>Поехали</span>
                                                    <LazyComponent
                                                        wrapperClassName={
                                                            'display_content'
                                                        }
                                                        src={HowBtnIcon}
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={[
                                            'how_block-item  revealator-once revealator-delay3 revealator-slideright',
                                            isVisible && 'revealator-within',
                                        ].join(' ')}
                                    >
                                        <div className="how_block-item_content">
                                            <span>03</span>
                                            <h2>Оплата подпсики</h2>
                                            <p>
                                                Выберите удобный способ
                                                онлайн-оплаты и не беспокойтесь:
                                                соединение защищено!{' '}
                                            </p>

                                            <ul className="how_block-pay">
                                                <li>
                                                    <LinkToTop>
                                                        <img src={Pay1} />
                                                    </LinkToTop>
                                                </li>

                                                <li>
                                                    <LinkToTop>
                                                        <img src={Pay2} />
                                                    </LinkToTop>
                                                </li>

                                                <li>
                                                    <LinkToTop>
                                                        <img src={Pay3} />
                                                    </LinkToTop>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* </LazyLoad> */}
                                </div>
                            </div>
                        </div>
                        {/* <!-- HOW_BLOCK-END --> */}

                        {/* <!-- FOOTER --> */}
                        <footer className="footer">
                            <div className="container" id="main_bottom">
                                <div className="footer-line"></div>
                                <div className="footer-text">
                                    <a
                                        onClick={() => setOpenPolice0(true)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Политика конфиденциальности
                                    </a>
                                    <a
                                        onClick={() => setOpenPolice1(true)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Пользовательское соглашение
                                    </a>
                                    <p>Copyright 2020 Q solutions</p>
                                    <p className="footer-phone">
                                        <span>Добрышин Антон</span>{' '}
                                        <a href="tel:+79999999999">
                                            +7 (999) 999 99 99
                                        </a>
                                    </p>
                                </div>

                                <ul className="footer-soc">
                                    <li>
                                        <LinkToTop>
                                            <img src={Soc1} />
                                        </LinkToTop>
                                    </li>
                                    <li>
                                        <LinkToTop>
                                            <img src={Soc2} />
                                        </LinkToTop>
                                    </li>
                                    <li>
                                        <LinkToTop>
                                            <img src={Soc3} />
                                        </LinkToTop>
                                    </li>
                                    <li>
                                        <LinkToTop>
                                            <img src={Soc4} />
                                        </LinkToTop>
                                    </li>
                                    <li>
                                        <LinkToTop>
                                            <img src={Soc5} />
                                        </LinkToTop>
                                    </li>
                                    <li>
                                        <LinkToTop>
                                            <img src={Soc6} />
                                        </LinkToTop>
                                    </li>
                                </ul>
                            </div>
                        </footer>
                        {/* <!-- FOOTER-END --> */}
                    </div>
                    {/* <!-- BOTTOM_SECTION-END --> */}
                </main>
            </div>
        </Element>
    );
}
