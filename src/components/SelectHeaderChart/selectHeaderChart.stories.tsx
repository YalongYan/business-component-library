import React from 'react'
import { storiesOf } from '@storybook/react'

import SelectHeaderChart from './selectHeaderChart'

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
    businessIncome: 36.63,
    pDay: "2021-10-31",
  },
  {
    ROI: 0.257,
    arpu: 0.0022,
    businessIncome: 45.87,
    pDay: "2021-10-30",
  },
  {
    ROI: 0.098,
    arpu: 0.0008,
    businessIncome: 16.83,
    pDay: "2021-10-29",
  },
  {
    ROI: 0.1133,
    arpu: 0.0007,
    businessIncome: 15.79,
    pDay: "2021-10-28",
  },
  {
    ROI: 0.1091,
    arpu: 0.0006,
    businessIncome: 14.22,
    pDay: "2021-10-27",
  },
  {
    ROI: 0.1084,
    arpu: 0.0006,
    businessIncome: 13.59,
    pDay: "2021-10-26",
  },
  {
    ROI: 0.0828,
    arpu: 0.0003,
    businessIncome: 6.88,
    pDay: "2021-10-25",
  },
  {
    ROI: 0.0362,
    arpu: 0.0002,
    businessIncome: 3.08,
    pDay: "2021-10-24",
  },
]

const defaultComponent = () => (
  <SelectHeaderChart
    title="活动指标"
    titleConfig={activityTitleGroup}
    data={resultActivity}
  />
)

storiesOf('SelectHeaderChart Component', module)
  .add('SelectHeaderChart', defaultComponent);