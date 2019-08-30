import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

import '../component/Category.css';

import Weekend from '../image/weekend2.png';
import Youth from '../image/youth2.png';
import Dawn from '../image/dawn2.png';
import Special from '../image/special2.png';
import Choir from '../image/choir.png';
import Wednesday from '../image/wednesday2.png';

export default class Category extends Component {
    render() {
        return (
            <div className="categoryDiv">
                <h2 className="categoryFont1">설교 듣기</h2>
                <Grid columns={2} className="categoryGrid">
                    <Grid.Row stretched>
                        <Grid.Column>
                            <a href="http://www.jeongeui.com/%ec%84%a4%ea%b5%90%ed%8e%98%ec%9d%b4%ec%a7%80_%ec%a3%bc%ec%9d%bc%ec%98%88%eb%b0%b0/">
                                <img src={Weekend} style={{ width: '60%', height: '70%' }} />
                                <h4 className="categoryFont2">주일 예배</h4>
                            </a>
                            <a href='http://www.jeongeui.com/%ec%84%a4%ea%b5%90%ed%8e%98%ec%9d%b4%ec%a7%80_%ec%a3%bc%ec%9d%bc4%eb%b6%80%ec%98%88%eb%b0%b0/'>
                                <img src={Youth} style={{ width: '60%', height: '70%' }} />
                                <h4 className="categoryFont2">청년 예배</h4>
                            </a>
                            <a href="http://www.jeongeui.com/%ec%84%a4%ea%b5%90_%ec%83%88%eb%b2%bd%ea%b8%b0%eb%8f%84/">
                                <img src={Dawn} style={{ width: '60%', height: '70%' }} />
                                <h4 className="categoryFont2">새벽기도회</h4>
                            </a>
                        </Grid.Column>
                        <Grid.Column>
                            <a href="http://www.jeongeui.com/%ec%84%a4%ea%b5%90%ed%8e%98%ec%9d%b4%ec%a7%80_%ec%83%88%eb%b2%bd%ea%b8%b0%eb%8f%84%ed%9a%8c/">
                                <img src={Special} style={{ width: '60%', height: '70%' }} />
                                <h4 className="categoryFont2">특별 새벽기도회</h4>
                            </a>
                            <a href="http://www.jeongeui.com/310_%ec%84%b1%ea%b0%80%eb%8c%80-%ec%b0%ac%ec%96%91-2/">
                                <img src={Choir} style={{ width: '60%', height: '70%' }} />
                                <h4 className="categoryFont2">찬양대 찬양 듣기</h4>
                            </a>
                            <a href="http://www.jeongeui.com/%ec%84%a4%ea%b5%90%ed%8e%98%ec%9d%b4%ec%a7%80_%ec%88%98%ec%9a%94%ec%98%88%eb%b0%b0/">
                                <img src={Wednesday} style={{ width: '60%', height: '70%' }} />
                                <h4 className="categoryFont2">수요 예배</h4>
                            </a>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}