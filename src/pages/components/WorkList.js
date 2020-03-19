import React from 'react';
import './WorkList.css';
import SomeWorks from './SomeWorks';
import {Link} from "react-router-dom";

export default function WorkList(){
    return (
        <div className="worklist">
            <div className="breadcrumb">
                <div className="breadcrumb-item">
                    <Link to="/">Главная</Link>
                </div>
                <div className="breadcrumb-item">
                    Мои работы
                </div>
            </div>
            <h1>Мои работы</h1>
            <div className="row">
                <SomeWorks />
            </div>
        </div>
    );
}