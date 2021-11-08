import React from 'react';
import { Select, Table } from 'antd';
const { Option } = Select;

interface idNameType {
  id: string;
  name: string;
}

interface propType {
  /** 入口选择的下拉数据 */
  enterDataArr: idNameType[];
  /** 表格的数据 */
  tableData: any[];
  /** 表格的头 */
  tableColumns: any[];
  /** 标题 */
  title: string;
  /** 副标题 现在是<入口选择> */
  subTitle: string;
  /** 点击入口选择的时候 会触发数据请求，更新表格数据 */
  handleSelectChange: (v: string) => void;
}

const SelectHeaderTable: React.FC<propType> = (props) => {
  const { enterDataArr, tableData, tableColumns, title, subTitle, handleSelectChange } = props;

  const handleChange = (v: string) => {
    handleSelectChange(v);
  };

  return (
    <div className="selectTableContainer">
      <span className="title"> {title} </span>
      <span style={{ float: 'right' }}>
        <span style={{ marginRight: '10px' }}>{subTitle}</span>
        <Select defaultValue="" style={{ width: 160 }} onChange={handleChange}>
          <Option value="">全部</Option>
          {enterDataArr.map((item) => {
            return (
              <Option value={item.id} key={item.id}>
                {item.name}
              </Option>
            );
          })}
        </Select>
      </span>
      <br />
      <br />
      <Table key="table" dataSource={tableData} columns={tableColumns} />
    </div>
  );
};

export default SelectHeaderTable;
