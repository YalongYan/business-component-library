import React, { FC, useState, useEffect, useRef } from 'react';
import useClickOutside from './hook/useClickOutside'

interface itemProps {
  key: string,
  value: string,
}

interface mainProps {
  /** 样式 */
  style?: React.CSSProperties,
  placeholder?: string,
  /** 下拉选项的数据 */
  listData: itemProps[],
  /** 初始值 */
  value?: string,
  /** 选择完 或者输入完 触发 */
  handleActivitySelected?: Function,
  /** antd formItem 组件内用的 */
  onChange?: Function,
}

/**
 * 
 * ### 样式的引入按照如下 
 * ~~~js
 * import 'yd-business-library/dist/styles/spSelect.css'
 * ~~~
 */
export const SpSelect: FC<mainProps> = (props) => {
  const {
    style, placeholder, listData = [],
    value = '', handleActivitySelected, onChange
  } = props

  const [showCtn, setShowCtn] = useState<boolean>(false)
  const [selectedValue, setSelectedValue] = useState<string>('')
  const [inputValue, setInputValue] = useState<string>('')
  const [currentListData, setCurrentListData] = useState<itemProps[]>([])
  
  const componentRef = useRef<HTMLSpanElement>(null)
  useClickOutside(componentRef, () => { setShowCtn(false)})

  useEffect(() => {
    setSelectedValue(value)
    setInputValue(value)
    setCurrentListData(listData)
  }, [value, listData])

  const handleSelectItem = (v: string) => {
    setSelectedValue(v)
    setInputValue(v)
    setShowCtn(false)
    if (handleActivitySelected) {
      handleActivitySelected(v)
    }
    if (onChange) {
      onChange(v)
    }
  }

  const handleInputBlur = (v: string) => {
    if (handleActivitySelected) {
      handleActivitySelected(v)
    }
    if (onChange) {
      onChange(v)
    }
  }

  const handleInputValueChange = (v: string)=> {
    setInputValue(v)
    setSelectedValue(v)
  }

  return (
    <span id="spSelectCtn" style={style} ref={componentRef}>
      <input
        value={inputValue}
        className="spSelectInp"
        placeholder={placeholder}
        onFocus={() => {setShowCtn(true)}}
        onBlur={(e) => {handleInputBlur(e.currentTarget.value)}}
        onChange={(e) => {handleInputValueChange(e.currentTarget.value)}}
      />
      {
        showCtn &&
        <ul className="spUlCtn">
          {
            // handleFilterItem().map(item => {
            currentListData.map(item => {
              // if (item.value.indexOf(inputValue) > -1) {
                return <li
                  className={`spLiCtn ${selectedValue === item.key ? 'active' : ''}`}
                  key={item.key}
                  onClick={() => {handleSelectItem(item.key)}}
                  >
                    {item.value}
                  </li>
              // }
            })
          }
          {/* <li
            key="addItemBar"
            className="addItemCtn"
            >
              <span className="addIcon" onClick={() => {handleAddItem()}}>+</span>
              <input
                className="spSelectInp"
                value={addInputValue}
                onChange={(e) => {setAddInputValue(e.currentTarget.value)}} />
            </li> */}
        </ul>
      }
    </span>
  );
}

export default SpSelect;
