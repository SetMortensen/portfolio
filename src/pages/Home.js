import React from 'react';
import './Home.css';
import MainSlider from './components/MainSlider';
import ShortInfo from './components/ShortInfo';
import Skills from './components/Skills';
import SomeWorks from './components/SomeWorks';
import Steps from './components/Steps';
import Order from './components/Order';
import {Link} from "react-router-dom";

export default class Home extends React.Component {
    componentDidMount() {
        window.$('.main-slider').slick({
            arrows: false,
            dots: true,
            infinite: false,
            speed: 700,
            edgeFriction: 0,
            dotsClass: 'slick-dots main-dots container'
        });
        window.$('.skill-box__bg').each((i,el)=>{
            window.$(el).css('width',el.parentNode.dataset.value+'%');
        });
    }

    render() {
        return (
            <div className="home">
                <MainSlider />
                <ShortInfo />
                <Skills />
                <section className="special">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2>Мои работы</h2>
                            </div>
                            <SomeWorks count="6" />
                            <div className="col-12 text-center">
                                <Link className="show-more" to="/works">Показать ещё</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <Steps />
                <Order />
            </div>
        );
    }
}