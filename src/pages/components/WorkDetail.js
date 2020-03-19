import React, { useState } from 'react';
import './WorkDetail.css';
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

export default function WorkDetail(){
    let [work, setWork] = useState([{name:'',description:'',cms:'', image:'/images/loading.gif'}]);
    let { workId } = useParams();
    console.log(workId);
    if (work[0].name === '') fetch('/works.json')
        .then(r=>r.json())
        .then(works => {
            work = works.works.filter(el => el.detail_link === workId);
            setWork(work);
        });
    return (
        <div className="workdetail">
            <div className="breadcrumb">
                <div className="breadcrumb-item">
                    <Link to="/">Главная</Link>
                </div>
                <div className="breadcrumb-item">
                    <Link to="/works">Мои работы</Link>
                </div>
                <div className="breadcrumb-item">
                    {work[0].name}
                </div>
            </div>
            <h1>{work[0].name}</h1>
            <h2>Описание</h2>
            <img src={work[0].image} className="detail-picture" alt="work[0].name"/>
            <div className="description mb-5" dangerouslySetInnerHTML={{__html: work[0].description}}>

            </div>
            <h2>CMS</h2>
            <p className="mb-5">{work[0].cms}</p>
            <h2>Ссылка</h2>
            <a href={work[0].external_link} target="_blank">{work[0].external_link}</a>
        </div>
    );
}