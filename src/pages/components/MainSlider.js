import React from 'react';
import './MainSlider.css';
import slide1 from "../../images/slider-1.jpg";
import slide2 from "../../images/slider-2.jpg";
import slide3 from "../../images/slider-3.jpg";

export default function MainSlider() {
    return(
        <div className="main-slider">
            <div className="main-slide">
                <img src={slide1} alt="welcome"/>
                <div className="slide-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="slide-name">Добро пожаловать!</h1>
                                <div className="slide-description">
                                    Давайте знакомиться поближе. <br/>
                                    Меня зовут Артём, я занимаюсь разработкой web-сайтов.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-slide">
                <img src={slide2} alt="coding"/>
                <div className="slide-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="slide-name">Создание сайта</h2>
                                <div className="slide-description">
                                    В создание сайта входит составление разметки на html,
                                    оформление стилей на css, <br/>
                                    написание функционала на javascript
                                    и серверная поддержка на php.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-slide">
                <img src={slide3} alt="coding"/>
                <div className="slide-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="slide-name">Интеграция сайта</h2>
                                <div className="slide-description">
                                    Внедрение CMS.<br/>
                                    WordPress - для блогов, сайтов-визиток, интернет-витрин, лэндинга.<br/>
                                    Bitrix - для крупных интернет-магазинов.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}