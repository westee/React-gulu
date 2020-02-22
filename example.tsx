import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from "react-router-dom";

import Icon from './lib/icon/icon.example';
import Button from './lib/button.example';
import Dialog from './lib/dialog/dialog.example';

ReactDOM.render(
    <Router>
        <div>
            <header>
                <div className="logo">
                    哈哈哈
                </div>
            </header>
            <div>
                <aside>
                    <h2>组件</h2>
                    <ul>
                        <Link to="/icon">
                            <li>Icon</li>
                        </Link>
                        <Link to="/button">
                            <li>Button</li>
                        </Link>
                        <Link to="/dialog">
                            <li>Dialog</li>
                        </Link>
                    </ul>
                </aside>
                <main>
                    <Route path="/icon" component={Icon}/>
                    <Route path="/button" component={Button}/>
                    <Route path="/dialog" component={Dialog}/>
                </main>
            </div>
        </div>
    </Router>
    ,
    document.getElementById("root"))