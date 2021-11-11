import React, { FC } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';

interface propType {
  /**chart的数据源 */
  data: any[];
  /** type 字段 */
  type: string;
  /**时间字段 */
  pDay: string;
  /**值字段 */
  value: string | number;
  /**高度 */
  height: number;
  /**type对应的数据类型， number会转成千分位、percent 会转成百分数 */
  Target_Format_Map: Record<string, 'number' | 'percent'>;
}

/**
 * 把数字或者字符串数字 转成  千分位的, 比如 12345 转成 12,345
 * @param v 数
 * @returns 千分位的数
 */
const formatNumber: (v: number | string) => string = (v) => {
  let regex = /(?!^)(?=(\d{3})+(\.|$))/g;
  let result = `${v}`.replace(regex, ',');
  return result;
};

/**
 * 把小数转为带两位小数点的百分数
 * @param v 小数
 * @returns 百分数
 */
const formatPercent: (v: number | string) => string = (v) => {
  let value = typeof v === 'number' ? v : parseFloat(v); // 转成 number 类型
  let result = (value * 100).toFixed(2) + '%';
  return result;
};

export const MultipleLine: FC<propType> = (props) => {
  const { data, type, pDay, value, height, Target_Format_Map } = props;

  return (
    <Chart padding="auto" appendPadding={[10, 0, 0, 0]} height={height} data={data} autoFit>
      <Legend position="bottom" />
      <Axis name={`${pDay}`} />
      <Tooltip shared>
        {(title, items = []) => (
          <div style={{ padding: '16px 8px 8px 8px' }}>
            <p>{title}</p>
            <div>
              {items.map(({ color, name, value }) => {
                let targetValue: string = value;
                switch (Target_Format_Map[name]) {
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
                    <span>
                      {name}: {targetValue}
                    </span>
                  </p>
                );
              })}
            </div>
          </div>
        )}
      </Tooltip>
      <Geom type="line" position={`${pDay}*${value}`} size={2} color={type} />
      <Geom
        type="point"
        position={`${pDay}*${value}`}
        size={4}
        shape={'circle'}
        color={type}
        style={{
          stroke: '#fff',
          lineWidth: 1,
        }}
      />
    </Chart>
  );
};

export default MultipleLine;
