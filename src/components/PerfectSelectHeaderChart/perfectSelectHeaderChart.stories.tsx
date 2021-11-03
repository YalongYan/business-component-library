import React from 'react'
import { storiesOf } from '@storybook/react'

import PerfectSelectHeaderChart from './perfectSelectHeaderChart'

const activityTitleGroup = [
  {
    key: "businessIncome",
    value: "指标1",
  },
  {
    key: "arpu",
    value: "指标2"
  },
  {
    key: "ROI",
    value: "指标3"
  }
]
const resultActivity = [
  {
    ROI: 0.1637,
    arpu: 0.0018,
    businessIncome: 41236.63,
    pDay: "2021-10-31",
  },
  {
    ROI: 0.257,
    arpu: 0.0022,
    businessIncome: 54345.87,
    pDay: "2021-10-30",
  },
  {
    ROI: 0.098,
    arpu: 0.0008,
    businessIncome: 43216.83,
    pDay: "2021-10-29",
  },
  {
    ROI: 0.1133,
    arpu: 0.0007,
    businessIncome: 54315.79,
    pDay: "2021-10-28",
  },
  {
    ROI: 0.1091,
    arpu: 0.0006,
    businessIncome: 43214.22,
    pDay: "2021-10-27",
  },
  {
    ROI: 0.1084,
    arpu: 0.0006,
    businessIncome: 23113.59,
    pDay: "2021-10-26",
  },
  {
    ROI: 0.0828,
    arpu: 0.0003,
    businessIncome: 31226.88,
    pDay: "2021-10-25",
  },
  {
    ROI: 0.0362,
    arpu: 0.0002,
    businessIncome: 3323.08,
    pDay: "2021-10-24",
  },
]

// 数据展示类型的映射，目前只有数值和百分比
const Target_Format_Map: Record<string, 'number' | 'percent'> = {
  joinUser: 'number',
  withdrawAmount: 'number',
  avgCost: 'number',
  withdrawUser: 'number',
  sumScore: 'number',
  businessIncome: 'number',
  userPenetrance: 'percent',
  withdrawRate: 'percent',
  arpu: 'percent',
  ROI: 'percent',
};

const defaultComponent = () => (
  <PerfectSelectHeaderChart
    title="活动指标"
    titleConfig={activityTitleGroup}
    data={resultActivity}
    Target_Format_Map={Target_Format_Map}
  />
)

const perfectComponent = () => (
  <PerfectSelectHeaderChart
    title="活动指标"
    titleConfig={activityTitleGroup}
    data={resultActivity}
  />
)

storiesOf('PerfectSelectHeaderChart Component', module)
  .add('PerfectSelectHeaderChart', defaultComponent)
  .add('没有Target_Format_Map的状态', perfectComponent);