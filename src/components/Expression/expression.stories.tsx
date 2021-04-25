import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Expression from './expression'

const featuresList = [
  {
    cnValue: "user_id1天关联的ip数",
    id: 1,
    value: "l1_ip_cnt_per_userid_1d",
  },
  {
    cnValue: "user_id是否为预装用户",
    id: 19,
    value: "l1_Ispreinstalld_per_userid_1d",
  }
]
const symbolList = [
  {
    id: 15,
    type: "symbol",
    value: ">",
  },
  {
    id: 16,
    type: "symbol",
    value: "==",
  },
  {
    id: 17,
    type: "symbol",
    value: "<",
  }
]

const defaultExpression = () => (
  <Expression
    featuresList={featuresList}
    symbolList={symbolList}
    onChange={action('触发数据改变')}
  />
)

const havedValueExpression = () => (
  <Expression
    featuresList={featuresList}
    symbolList={symbolList}
    onChange={action('触发数据改变')}
    value='[{"left":"l1_ip_cnt_per_userid_1d","middle":">","relation":"","right":"55"},{"left":"l1_Ispreinstalld_per_userid_1d","middle":"=","relation":"or","right":"500"}]'
  />
)

const disableExpression = () => (
  <Expression
    featuresList={featuresList}
    symbolList={symbolList}
    disabled={true}
    onChange={action('触发数据改变')}
    value='[{"left":"l1_ip_cnt_per_userid_1d","middle":">","relation":"","right":"55"},{"left":"l1_Ispreinstalld_per_userid_1d","middle":"=","relation":"or","right":"500"}]'
  />
)

storiesOf('Expression Component', module)
  .add('Expression', defaultExpression)
  .add('有初始值状态', havedValueExpression)
  .add('不可编辑状态', disableExpression)