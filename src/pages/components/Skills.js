import React from 'react';
import './Skills.css';

export default function Skills() {
    return(
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Навыки</h2>
                    </div>
                    <div className="col-12">
                        <div className="skill-bar-wrapper">
                            <div className="skill-bar" data-value="95">
                                <div className="skill-box__bg"></div>
                                <span className="skill-bar__name">html</span>
                                <span className="skill-bar__value">95%</span>
                            </div>
                            <div className="skill-bar" data-value="95">
                                <div className="skill-box__bg"></div>
                                <span className="skill-bar__name">css</span>
                                <span className="skill-bar__value">95%</span>
                            </div>
                            <div className="skill-bar" data-value="95">
                                <div className="skill-box__bg"></div>
                                <span className="skill-bar__name">bootstrap</span>
                                <span className="skill-bar__value">95%</span>
                            </div>
                            <div className="skill-bar" data-value="95">
                                <div className="skill-box__bg"></div>
                                <span className="skill-bar__name">js</span>
                                <span className="skill-bar__value">95%</span>
                            </div>
                            <div className="skill-bar" data-value="80">
                                <div className="skill-box__bg"></div>
                                <span className="skill-bar__name">php</span>
                                <span className="skill-bar__value">80%</span>
                            </div>
                            <div className="skill-bar" data-value="80">
                                <div className="skill-box__bg"></div>
                                <span className="skill-bar__name">WordPress</span>
                                <span className="skill-bar__value">80%</span>
                            </div>
                            <div className="skill-bar" data-value="80">
                                <div className="skill-box__bg"></div>
                                <span className="skill-bar__name">Bitrix</span>
                                <span className="skill-bar__value">80%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}