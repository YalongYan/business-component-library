import React from 'react'
import { storiesOf } from '@storybook/react'

import SelectHeaderTable from './selectHeaderTable'

const enterDataArr = [
  {
    "id": "encourage_read_ad_card",
    "name": "阅读宝箱弹窗广告"
  },
  {
    "id": "encourage_signin_ad_card",
    "name": "签到成功弹窗广告"
  },
  {
    "id": "floating_ad_card",
    "name": "浮窗广告"
  },
  {
    "id": "play_get_gold_card",
    "name": "试玩广告位广告"
  }
]

const tableData = [
  {
    "clickUv": 322,
    "clickPv": 493,
    "viewUv": 841,
    "viewPv": 1121,
    "pDay": "2021-10-31",
    "key": 1
  },
  {
    "clickUv": 235,
    "clickPv": 819,
    "viewUv": 549,
    "viewPv": 750,
    "pDay": "2021-11-01",
    "key": 2
  },
  {
    "clickUv": 129,
    "clickPv": 263,
    "viewUv": 746,
    "viewPv": 1082,
    "pDay": "2021-11-02",
    "key": 3
  },
  {
    "clickUv": 395,
    "clickPv": 1200,
    "viewUv": 477,
    "viewPv": 687,
    "pDay": "2021-11-03",
    "key": 4
  }
]

const columnsData = [
  {
    title: '日期',
    dataIndex: 'pDay',
    key: 'pDay',
  },
  {
    title: '广告位曝光pv',
    dataIndex: 'viewPv',
    key: 'viewPv',
  },
  {
    title: '广告位点击pv',
    dataIndex: 'clickPv',
    key: 'clickPv',
  },
  {
    title: '广告位曝光uv',
    dataIndex: 'viewUv',
    key: 'viewUv',
  },
  {
    title: '广告位点击uv',
    dataIndex: 'clickUv',
    key: 'clickUv',
  }
];

const handleAdChange = () => {
  console.log('test')
}

const defaultComponent = () => (
  <SelectHeaderTable
    title="点位指标"
    subTitle="入口选择"
    enterDataArr={enterDataArr}
    tableData={tableData}
    tableColumns={columnsData}
    handleSelectChange={handleAdChange}
  />
)

storiesOf('SelectHeaderTable', module)
  .add('SelectHeaderTable', defaultComponent);