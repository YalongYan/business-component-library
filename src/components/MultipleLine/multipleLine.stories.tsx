import React from 'react'
import { storiesOf } from '@storybook/react'

import MultipleLine from './multipleLine'

const Target_Format_Map: Record<string, 'number' | 'percent'> = {
  西瓜: 'number',
  苹果: 'number',
};

const data = [
  {
    pDay: '2020-11-11',
    type: '西瓜',
    value: 123344
  },
  {
    pDay: '2020-11-10',
    type: '西瓜',
    value: 223344
  },
  {
    pDay: '2020-11-11',
    type: '苹果',
    value: 34212
  },
  {
    pDay: '2020-11-10',
    type: '苹果',
    value: 23121
  },
]

const defaultExpression = () => (
  <MultipleLine
    Target_Format_Map={Target_Format_Map}
    data={data}
    type="type"
    pDay="pDay"
    value="value"
    height={400}
  />
)

storiesOf('MultipleLine', module)
  .add('MultipleLine', defaultExpression)