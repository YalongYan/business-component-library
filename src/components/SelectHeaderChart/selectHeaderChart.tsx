import React, { FC, useState, useEffect } from 'react';
import { Chart, Line, Point, Tooltip } from 'bizcharts';

import { keyValueType } from './type';

interface propsType {
  /** 标题的数据 */
  titleConfig: keyValueType[];
  /** 标题 */
  title: string;
  /** chart 的数据 */
  data: any[];
}
/**
 * 
 * ### 样式的引入按照如下 
 * ~~~js
 * import 'yd-business-library/dist/styles/selectHeaderChart.css'
 * ~~~
 */

export const SelectHeaderChart: FC<propsType> =((props) => {
  const { titleConfig, title, data } = props;
  const [currentType, setCurrentType] = useState<string>('');
  const [aliasValue, setAliasValue] = useState<string>('');

  useEffect(() => {
    if (titleConfig.length) {
      setCurrentType(titleConfig[0].key);
      setAliasValue(titleConfig[0].value);
    }
  }, [titleConfig]);

  return (
    <div className="chartCtn">
      <span className="title">{title}：</span>
      <ul className="titleList">
        {titleConfig.map((item) => {
          return (
            <li
              className={`item ${currentType === item.key ? 'active' : ''}`}
              key={item.key}
              onClick={() => {
                setCurrentType(item.key);
                setAliasValue(item.value);
              }}
            >
              {item.value}
            </li>
          );
        })}
      </ul>
      <Chart
        appendPadding={[10, 0, 0, 10]}
        autoFit
        height={400}
        data={data}
        scale={{ [currentType]: { min: 0, alias: aliasValue, type: 'linear-strict' }, pDay: { range: [0, 1] } }}
      >
        <Line position={`pDay*${currentType}`} />
        <Point position={`pDay*${currentType}`} />
        <Tooltip showCrosshairs />
      </Chart>
    </div>
  );
});

export default SelectHeaderChart;
