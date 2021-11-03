import React, { FC, useState, useEffect } from 'react';
import { Chart, Line, Point, Tooltip } from 'bizcharts';

import  { formatNumber }  from './../../utils/formatNumber'
import  { formatPercent }  from './../../utils/formatPercent'

import { keyValueType } from './type';

interface propsType {
  /** 标题的数据 */
  titleConfig: keyValueType[];
  /** 标题 */
  title: string;
  /** chart 的数据 */
  data: any[];
  /** number 类型千分之展示 小数 百分之展示 */
  Target_Format_Map?: Record<string, 'number' | 'percent'>
}
/**
 * 
 * ### 样式的引入按照如下 
 * ~~~js
 * import 'yd-business-library/dist/styles/selectHeaderChart.css'
 * ~~~
 */

export const SelectHeaderChart: FC<propsType> =((props) => {
  const { titleConfig, title, data, Target_Format_Map } = props;
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
        {
          Target_Format_Map ?
          <Tooltip shared={true} showCrosshairs={true} crosshairs={{ type: 'xy', line: { style: { fill: '#bbbbbb' } } }}>
            {(title, items = []) => (
              <div style={{ padding: '16px 8px 8px 8px' }}>
                <p>{title}</p>
                <div>
                  {items.map(({ color, name, value }) => {
                    let targetValue: string = value;
                    switch (Target_Format_Map[currentType]) {
                      case 'percent':
                        targetValue = formatPercent(value);
                        break;
                      case 'number':
                        targetValue = formatNumber(value);
                        break;
                    }

                    return (
                      <p key={name} style={{ marginBottom: 0, paddingBottom: 8 }}>
                        <span
                          style={{
                            display: 'inline-block',
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: color,
                            marginRight: 8,
                          }}
                        ></span>
                        <span>{targetValue}</span>
                      </p>
                    );
                  })}
                </div>
              </div>
            )}
          </Tooltip> :
          <Tooltip showCrosshairs />
        }
      </Chart>
    </div>
  );
});

export default SelectHeaderChart;
