import React from 'react';
import './SomeWorks.css';
import {Link} from 'react-router-dom'

export default class SomeWorks extends React.Component{
    constructor(props){
        super(props);
        this.state = {works:[]};
    }

    UNSAFE_componentWillMount() {
        let self = this;
        let count = parseInt(this.props.count) || undefined;
        (async function(){
        let works = await fetch('/works.json');
        works = await works.json();
        works = works.works.slice(0,count);
        self.setState({works:works});
        })();
    }

    render(){
        let works = this.state.works;
        works = works.map((work,key)=>
            <div className="col-sm-6 col-lg-4" key={key}>
                <div className="some-work">
                    <img src={work.image} alt={work.name} className="some-work__image"/>
                    <div className="some-work__info">
                        <div className="some-work__links">
                            <Link title="Детальнее о проекте" className="some-work__detail-link" to={`/works/${work.detail_link}`}/>
                            <a title="Посмотреть сайт" target="_blank" className="some-work__external-link" href={work.external_link}></a>
                        </div>
                        <div className="some-work__name">{work.name}</div>
                    </div>
                </div>
            </div>
        );
        return (
            <div className="col-12">
                <div className="row">
                    {works}
                </div>
            </div>
        );
    }
}