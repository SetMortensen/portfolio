import React from 'react';
import './App.css';
import logo from './logo.png';
import linkedin from './social-icons/in.png';
import skype from './social-icons/skype.png';
import vk from './social-icons/vk.png';
import Home from './pages/Home';
import Works from './pages/Works';
import Contacts from './pages/Contacts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <Link to="/">
                  <img src={logo} alt="logo" className="logo"/>
                </Link>
              </div>
              <div className="col-sm-7">
                <nav>
                  <ul className="top-menu">
                    <li><NavLink exact activeClassName="active" to="/">Главная</NavLink></li>
                    <li><NavLink activeClassName="active" to="/works">Работы</NavLink></li>
                    <li><NavLink activeClassName="active" to="/contacts">Контакты</NavLink></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/works">
              <Works />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
          </Switch>
        </main>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-7 col-sm-9 col-md-7 col-lg-6">
                &copy; Артём Тимченко, 2020. Site is working on ReactJs.
              </div>
              <div className="col-5 col-sm-3 col-md-5 col-lg-6">
                <div className="social-icons">
                  <a href="https://join.skype.com/invite/aDipL07GmZgC" target="_blank" className="social-link">
                    <img src={skype} alt="skype"/>
                  </a>
                  <a href="https://vk.com/linkin____park" target="_blank" className="social-link">
                    <img src={vk} alt="vk"/>
                  </a>
                  <a href="https://www.linkedin.com/in/artyom-timchenko-24b832134/" target="_blank" className="social-link">
                    <img src={linkedin} alt="linkedIn"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;