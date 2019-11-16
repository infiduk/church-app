import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Grid } from 'semantic-ui-react'

import '../component/Main.css';

import JeongeuiLogo from '../image/jeongeui_logo.png';
import Introduce from '../image/introduce.png';
import Sermon from '../image/sermon.png';
import Life from '../image/life.png';
import Home from '../image/home.png';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goCategory: false,
            goEtc: false
        }
    }

    setGoCategory = () => {
        this.setState({
            goCategory: true
        })
    }

    setGoEtc = () => {
        this.setState({
            goEtc: true
        })
    }

    goIntroduce = () => {
        window.open('http://www.jeongeui.com/400_%EA%B5%90%ED%9A%8C%EC%86%8C%EA%B0%9C-2/#_jeongeui', '_self');
    }

    renderRedirect = () => {
        if (this.state.goCategory) {
            return <Redirect to='/category' />
        }
        else if (this.state.goEtc) {
            return <Redirect to='/etc' />
        }
    }

    handleClick(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="mainDiv">
                <img alt='' src={JeongeuiLogo} style={{ display: 1, flexdirection: 'column', alignitems: 'center', width: '60%', height: '60%', marginBottom: '3rem' }} />
                <Grid columns={2} className="mainGrid">
                    <Grid.Row stretched>
                        <Grid.Column>
                            <a href="http://www.jeongeui.com/400_%EA%B5%90%ED%9A%8C%EC%86%8C%EA%B0%9C-2/#_jeongeui">
                                <img alt='' src={Introduce} style={{ width: '50%', height: '50%' }} />
                                <h4 className="mainFont2">교회 소개</h4>
                            </a>
                            <a href="/etc">
                                <img alt='' src={Life} style={{ width: '50%', height: '50%' }} />
                                <h4 className="mainFont2">교회 생활</h4>
                            </a>
                        </Grid.Column>
                        <Grid.Column>
                            <a href='/category'>
                                <img alt='' src={Sermon} style={{ width: '50%', height: '50%' }} />
                                <h4 className="mainFont2">설교 듣기</h4>
                            </a>
                            <a href="http://www.jeongeui.com/">
                                <img alt='' src={Home} style={{ width: '50%', height: '50%' }} />
                                <h4 className="mainFont2">홈페이지</h4>
                            </a>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                {/* {this.renderRedirect()}
                <button onClick={this.setGoCategory}>카테고리</button>
                <button onClick={this.setGoEtc}>다른거</button> */}
            </div>
        );
    }
}