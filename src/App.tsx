import React from 'react';

import Expression from './components/Expression'
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

// import SpSelect from './components/SpSelect'
// const listData = [
//   {
//     key: 'newyear',
//     value: '新年活动',
//   },
//   {
//     key: 'baiwaigirl',
//     value: '百万女友',
//   },
// ]


const App: React.FC = () => {
  return (
    <div className="App">
      {/* <SpSelect value="测试初始值" listData={listData}></SpSelect> */}

      <Expression
        featuresList={featuresList}
        symbolList={symbolList}
        value='[{"left":"l1_ip_cnt_per_userid_1d","middle":">","relation":"","right":"55"},{"left":"l1_Ispreinstalld_per_userid_1d","middle":"=","relation":"or","right":"500"}]'
      />



    </div>
  );
}

export default App;
