import React from 'react';
import './Order.css';
import order from '../../images/order.jpg';

export default function Order() {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Как сделать заказ</h2>
                    </div>
                </div>
            </div>
            <img src={order} className="order-bg" alt="make-order"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <p className="request__title">Заполните данные</p>
                        <p>Чтобы оформить заявку, просто заполните форму. Ваши данные не будут переданы третьим лицам или
                            использованы в личных целях.</p>
                        <p>Если Вы не желаете оставлять свои данные либо предпочитаете живое общение, Вы можете
                            позвонить по номеру телефона <a href="tel:+380660405146">+38 (066) 04-05-146</a> по будням с 10:00 до 17:00.</p>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-wrapper">
                            <form className="form-request">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label>
                                            <span>Имя</span>
                                            <input type="text" name="name" required />
                                        </label>
                                    </div>
                                    <div className="col-sm-6">
                                        <label>
                                            <span>Почта</span>
                                            <input type="email" name="mail" required />
                                        </label>
                                    </div>
                                    <div className="col-12">
                                        <label>
                                            <span>Комментарий</span>
                                            <textarea name="comment"></textarea>
                                        </label>
                                    </div>
                                    <div className="col-12">
                                        <input type="submit" value="Отправить" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}