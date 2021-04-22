import React, { FC, useState, useEffect, HtmlHTMLAttributes } from 'react';
import { 
  message, 
  Input,
  Select,
  Icon,
  InputNumber,
} from 'antd';

import 'antd/dist/antd.css'

const { Option } = Select;

interface listItem {
  id?: string,
  left: string,
  middle: string,
  right: string,
  relation: string,
}
interface featerItem {
  cnValue: string,
  id: number,
  value: string,
}

interface symbolItem {
  type: string,
  id: number,
  value: string,
}

interface expressProps {
  featuresList: featerItem[],
  symbolList: symbolItem[]
  onChange?: (obj: any) => void,
  value?: string,
  disabled?: boolean,
  codeExpression?: string,
}

export const Expression: FC<expressProps> = (props: expressProps) => {
  const {
    featuresList = [], symbolList = [], onChange, value = '',
    codeExpression = '', disabled = false } = props
  const [list, setList] = useState<listItem[]>([
    {
      left: "",
      middle: "",
      relation: "",
      right: "",
      id: '别删我 我只是占个位'
    },
  ])

  useEffect(() => {
    console.log(value)
    if (value) {
      if (value !== '新建数据' && typeof value === 'string') {
        setList(JSON.parse(value))
      }
    }
  }, [value])

  const handleReduce = (i: number) => {
    if (disabled) {
      return false
    }
    if (list.length === 1) {
      message.warning('不能再删除了')
      return false
    }
    let arr = [...list]
    arr.splice(i, 1)
    setList(arr)
    onChange && onChange(JSON.stringify(arr))
  }

  const handleAdd = (i: number) => {
    if (disabled) {
      return false
    }
    let arr = [...list]
    arr.splice(i + 1, 0, {
      id: `${i + 1}`,
      left: '',
      middle: '',
      right: '',
      relation: '',
    })
    setList(arr)
    onChange && onChange(JSON.stringify(arr))
  }

  const handExpValueChange = (value: string, i: number, flag: 'left' | 'middle' | 'right' | 'relation') => {
    let newArr = [...list]
    newArr[i][flag] = value
    setList(newArr)
    onChange && onChange(JSON.stringify(newArr))
  }
  return (
    <div>
      {
        list.map((item, index) => {
          return <div key={item.id || index} style={{ position: 'relative', padding: '3px 0' }}>
            <span>特征{index + 1}</span>
            {
              item.left === '' ?
              <Select
                onChange={(v: string) => handExpValueChange(v, index, 'left')}
                showSearch={true}
                placeholder="请选择"
                disabled={disabled}
                filterOption={
                  (input, option: any) => {
                    return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                }
                style={{display: 'inline-block', width: '250px', margin: '0 10px 0 10px'}}>
                {
                  featuresList.map(item => {
                    return <Option key={item.value} value={item.value}>{item.cnValue}</Option>
                  })
                }
              </Select>: 
              <Select
                onChange={(v: string) => handExpValueChange(v, index, 'left')}
                value={item.left}
                showSearch={true}
                disabled={disabled}
                filterOption={
                  (input, option: any) => {
                    return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                }
                style={{display: 'inline-block', width: '250px', margin: '0 10px 0 10px'}}>
                {
                  featuresList.map(item => {
                    return <Option key={item.value} value={item.value}>{item.cnValue}</Option>
                  })
                }
              </Select>
            }
            符号
            {
              item.middle === '' ?
              <Select
                onChange={(v: string) => handExpValueChange(v, index, 'middle')}
                placeholder="请选择"
                disabled={disabled}
                style={{display: 'inline-block', width: '100px', margin: '0 10px 0 10px'}}>
                {
                  symbolList.map(item => {
                    return <Option key={item.id} value={item.value}>{item.value}</Option>
                  })
                }
              </Select> : 
              <Select
                onChange={(v: string) => handExpValueChange(v, index, 'middle')}
                value={item.middle}
                placeholder="请选择"
                disabled={disabled}
                style={{display: 'inline-block', width: '100px', margin: '0 10px 0 10px'}}>
                {
                  symbolList.map(item => {
                    return <Option key={item.value} value={item.id}>{item.value}</Option>
                  })
                }
              </Select>
            }
            值
            {
              item.right === '' ?
              <InputNumber
                key="inputNumber1"
                disabled={disabled}
                placeholder = "请输入"
                onChange={(v: any) => handExpValueChange(v, index, 'right')}
                style={{display: 'inline-block', width: '100px', margin: '0 10px 0 10px'}} /> :
              <InputNumber
                key="inputNumber2"
                disabled={disabled}
                defaultValue={parseInt(item.right)}
                placeholder = "请输入"
                onChange={(v: any) => handExpValueChange(v, index, 'right')}
                style={{display: 'inline-block', width: '100px', margin: '0 10px 0 10px'}} />
            }
            {
              index !== 0 &&
              <span>
                特征关系
                <Select
                  onChange={(v: string) => handExpValueChange(v, index, 'relation')}
                  value={item.relation}
                  disabled={disabled}
                  style={{display: 'inline-block', width: '100px', margin: '0 10px 0 10px'}}>
                  <Option key="1" value="and">且</Option>
                  <Option key="2" value="or">或</Option>
                </Select>
              </span>
            }
            <span style={{ width: '50px', position: 'absolute', left: list.length > 1 ? '770px' : '600px'}}>
              {index === list.length -1 &&
                <Icon
                  type="plus-circle"
                  onClick={() => {handleAdd(index)}}
                  style={{fontSize: '20px', cursor: 'pointer', marginTop: '6px'}}
                />}
              <Icon
                type="minus-circle"
                onClick={() => {handleReduce(index)}}
                style={{fontSize: '20px', float: 'right', cursor: 'pointer', marginTop: '6px'}} />
            </span>
          </div>
        })
      }
    </div>
  );
}
export default Expression;