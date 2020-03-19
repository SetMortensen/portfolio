import React from 'react';
import './Works.css';
import WorkList from './components/WorkList'
import WorkDetail from './components/WorkDetail'
import {Switch,Route} from "react-router-dom";

export default function Works(){
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Switch>
                            <Route exact path="/works">
                                <WorkList />
                            </Route>
                            <Route path={'/works/:workId'}>
                                <WorkDetail />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </section>
    );
}