import React, {useState, useEffect} from 'react';
import './Contacts.css';
import about from '../images/about.jpg';
import {Link} from "react-router-dom";

export default function Contacts() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        window.$('.certificates-slider').slick({
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true,
            slidesToShow: 3,
            slidesToScroll: 1
        });
    });
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb">
                            <div className="breadcrumb-item">
                                <Link to="/">Главная</Link>
                            </div>
                            <div className="breadcrumb-item">
                                Контакты
                            </div>
                        </div>
                        <h1>Контакты</h1>
                        <img src={about} alt="author" className="about-image"/>
                        <p>Для оформления заказа или уточняющих вопросов в любое время можно связаться по <a
                            href="mailto:a.timchenko29@gmail.com" target="_blank">электронной почте</a>.</p>
                        <p>Либо написать сообщение <a href="https://vk.com/linkin____park" target="_blank">вконтакте</a> или <a
                                href="https://join.skype.com/invite/aDipL07GmZgC" target="_blank">скайпе</a>.</p>
                        <p>Так же всегда буду рад новым контактам в <a target="_blank"
                                                                       href="https://www.linkedin.com/in/artyom-timchenko-24b832134/">linkedIn</a>.
                        </p>
                        <p>Просьба совершать <a href="tel:+380660405146">телефонные звонки</a> только по будням с 10:00
                            до 17:00.</p>
                        <h2>Сертификаты</h2>
                        <div className="certificates-slider">
                            <div className="certificate">
                                <a href="/certificates/Битрикс контент-менеджер.pdf" target="_blank"
                                   className="certificate__link">
                                    <img src="/certificates/content.png" className="certificate__image"
                                         alt="certificate"/>
                                </a>
                            </div>
                            <div className="certificate">
                                <a href="/certificates/Битрикс Администратор.Базовый.pdf" target="_blank"
                                   className="certificate__link">
                                    <img src="/certificates/admin-base.png" className="certificate__image"
                                         alt="certificate"/>
                                </a>
                            </div>
                            <div className="certificate">
                                <a href="/certificates/Битрикс Администратор.Модули.pdf" target="_blank"
                                   className="certificate__link">
                                    <img src="/certificates/admin-modules.png" className="certificate__image"
                                         alt="certificate"/>
                                </a>
                            </div>
                            <div className="certificate">
                                <a href="/certificates/Битрикс Администратор.Бизнес.pdf" target="_blank"
                                   className="certificate__link">
                                    <img src="/certificates/admin-business.png" className="certificate__image"
                                         alt="certificate"/>
                                </a>
                            </div>
                            <div className="certificate">
                                <a href="/certificates/Битрикс Установка и настройка.pdf" target="_blank"
                                   className="certificate__link">
                                    <img src="/certificates/install-n-config.png" className="certificate__image"
                                         alt="certificate"/>
                                </a>
                            </div>
                            <div className="certificate">
                                <a href="/certificates/Разработчик Bitrix Framework.pdf" target="_blank"
                                   className="certificate__link">
                                    <img src="/certificates/developer.png" className="certificate__image"
                                         alt="certificate"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}