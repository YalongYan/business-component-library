import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import SpSelect from './spSelect'

const listData = [
  {
    key: 'newyear',
    value: '新年活动',
  },
  {
    key: 'baiwaigirl',
    value: '百万女友',
  },
]

const defaultSpSelect = () => (
  <SpSelect value="测试初始值" listData={listData} handleActivitySelected = {action('触发change')}></SpSelect>
)

storiesOf('SpSelect', module)
  .add('SpSelect', defaultSpSelect)