import React from 'react';
import './ShortInfo.css';
import skype from "../../social-icons/skype.png";
import vk from "../../social-icons/vk.png";
import linkedin from "../../social-icons/in.png";
import google from "../../social-icons/google.png";
import phone from "../../social-icons/phone.png";

export default function ShortInfo() {
    return(
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Краткая информация</h2>
                    </div>
                    <div className="col-lg-6">
                        <p>Тимченко Артём Вячеславович, родился 29 марта 1992 года в городе Славянске, Украина.
                            Ещё в школе заинтересовался web-разработкой, в частности html, css. Моей первой
                            работой была золотая полоса рейтинга Вконтакте с 1000+ голосов - естественно,
                            сделанная в панеле разработчика.</p>
                        <p>Затем, играя в браузерные онлайн-игры, мне стало нудно просто нажимать на кнопочки, и
                            я стал писать свои пользовательские скрипты для автоматизации игрового процесса.
                            Теперь я мог не строить домики и обучать войска, а ставить стэк задач на
                            автоматическое выполнение.</p>
                        <p>Желая развиваться в программировании я поступил в ВУЗ на программную специальность. С
                            феноменальным успехом на протяжении 5ти лет я всеми доступными мне способами
                            отлынивал от учёбы. После выпуска я устроился в крупную торговую компанию -
                            грузчиком.</p>
                        <p>Именно здесь я и начал систематически и целенаправленно изучать javascript. После
                            года самоорганизованных курсов я устроился в IT фирму, где и начал свою карьеру.
                            Сейчас я имею за плечами более 3х лет опыта в вёрстке, front-end и back-end
                            программировании.</p>
                    </div>
                    <div className="col-lg-6">
                        <ol className="special">
                            <li>
                                <span className="list-item__name">Среднее образование</span>
                                <span className="list-item__description">СОШ №10 г.Славянск, Донецкая обл., Украина. 1999&nbsp;-&nbsp;2009&nbsp;гг.</span>
                            </li>
                            <li>
                                <span className="list-item__name">Высшее образование</span>
                                <span className="list-item__description">Донбасская государственная машиностроительная академия. <br />
                                            Факультет автоматизации машиностроения и информационных технологий. <br />
                                            Кафедра: системы и методы принятия решений. 2009&nbsp;-&nbsp;2014&nbsp;гг.</span>
                            </li>
                            <li>
                                <span className="list-item__name">Опыт работы</span>
                                <span className="list-item__description">Okman System, г. Тула, Россия. 2017&nbsp;-&nbsp;2018&nbsp;гг. (удалённо) <br />
                                            Team Market, г. Тула, Россия. 2018&nbsp;-&nbsp;2019 гг. (удалённо) <br />
                                            Illuminator, г. Иваново, Россия. 2019&nbsp;-&nbsp;по нынешнее время. (удалённо)</span>
                            </li>
                        </ol>
                        <div className="social-panel">
                            <div className="social-panel__item">
                                <a href="https://join.skype.com/invite/aDipL07GmZgC" target="_blank"><img src={skype} alt="skype"/></a>
                            </div>
                            <div className="social-panel__item">
                                <a href="https://vk.com/linkin____park" target="_blank"><img src={vk} alt="vk"/></a>
                            </div>
                            <div className="social-panel__item">
                                <a href="https://www.linkedin.com/in/artyom-timchenko-24b832134/" target="_blank"><img src={linkedin} alt="linkedin"/></a>
                            </div>
                            <div className="social-panel__item">
                                <a href="mailto:a.timchenko29@gmail.com" target="_blank"><img src={google} alt="gmail"/></a>
                            </div>
                            <div className="social-panel__item">
                                <a href="tel:+380660405146" target="_blank"><img src={phone} alt="tel"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </section>
    );
}