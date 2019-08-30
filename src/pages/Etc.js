import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import '../component/Etc.css';

import Notice from '../image/notice.png';
import Weekly from '../image/weekly.png';
import Ministry from '../image/ministry.png';
import Offering from '../image/offering.png';

export default class Etc extends Component {
  render() {
    return (
      <div className="etcDiv">
        <h2 className="etcFont1">교회 생활</h2>
        <Grid columns={2} className="etcGrid">
          <Grid.Row stretched>
            <Grid.Column>
              <a href="http://www.jeongeui.com/notice/">
                <img src={Notice} style={{ width: '60%', height: '60%' }} />
                <h4 className="etcFont2">공지 사항</h4>
              </a>
              <a href="http://www.jeongeui.com/service/#_worship">
                <img src={Ministry} style={{ width: '60%', height: '60%' }} />
                <h4 className="etcFont2">사역 안내</h4>
              </a>
            </Grid.Column>
            <Grid.Column>
              <a href='http://www.jeongeui.com/weekly/'>
                <img src={Weekly} style={{ width: '60%', height: '60%' }} />
                <h4 className="etcFont2">주보</h4>
              </a>
              <a href="http://www.jeongeui.com/">
                <img src={Offering} style={{ width: '60%', height: '60%' }} />
                <h4 className="etcFont2">정의 헌금</h4>
              </a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}