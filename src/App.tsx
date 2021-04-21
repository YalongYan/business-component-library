import React from 'react';
import SpSelect from './components/SpSelect'

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

const App: React.FC = () => {
  // const [ show, setShow ] = useState(true)
  return (
    <div className="App">
      <SpSelect value="测试初始值" listData={listData}> ddd </SpSelect>
    </div>
  );
}

export default App;
