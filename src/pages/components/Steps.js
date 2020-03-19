import React from 'react';
import './Steps.css';
import clock from '../../step-icons/clock.png';
import pencil from '../../step-icons/pencil.png';
import cogs from '../../step-icons/cogs.png';
import mobile from '../../step-icons/mobile.png';

export default function Steps(){
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Этапы работы</h2>
                    </div>
                    <div className="col-xl-3">
                        <div className="step">
                            <img src={clock} alt="step-icon" className="step__image"/>
                            <div className="step__name text-center">Обсуждение</div>
                            <div className="step__description text-center">
                                Обсуждение проекта. Тип сайта, количество страниц, наличие дизайна,
                                требования к работе, условия оплаты и др.
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="step">
                            <img src={pencil} alt="step-icon" className="step__image"/>
                            <div className="step__name text-center">Разработка</div>
                            <div className="step__description text-center">
                                Создание сайта: вёрстка, при необходимости javascript функционал.
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="step">
                            <img src={mobile} alt="step-icon" className="step__image"/>
                            <div className="step__name text-center">Адаптация</div>
                            <div className="step__description text-center">
                                После согласования десктопной версии приступаем к адаптации сайта под ноутбуки,
                                планшеты, смартфоны.
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="step">
                            <img src={cogs} alt="step-icon" className="step__image"/>
                            <div className="step__name text-center">Интеграция</div>
                            <div className="step__description text-center">
                                WordPress - для блогов, сайтов-визиток, интернет-витрин, лэндинга. Bitrix - для крупных
                                интернет-магазинов.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </section>
    );
}