import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Main from './pages/Main';
import Category from './pages/Category';
import Etc from './pages/Etc';

import Navbar from './Navbar';

export default class App extends Component {
    render() {
        return (
            <div>
                {/* <Navbar /> */}
                <Route exact path='/' component={Main} />
                <Route path='/category' component={Category} />
                <Route path='/etc' component={Etc} />
            </div>
        );
    }
}