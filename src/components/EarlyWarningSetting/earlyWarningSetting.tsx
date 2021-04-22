import React, { FC, useState, useEffect } from 'react'
import { Table, Select, Popconfirm, Button, Checkbox } from 'antd'

interface Iprops {
  data?: any,
  parentOwlUserList?: any,
  onChange?: Function,
  disabled?: boolean
}

export const EarlyWarningSetting: FC<Iprops> = (props) => {
  const {
    data, parentOwlUserList, onChange, disabled
  } = props

  const [dataSource, setDataSource] = useState<any[]>([]);
  const [owlUserList, setOwlUserList] = useState<any[]>([]);

  const [loading, setLoading] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    setDataSource(data)
    if (data) {
      pushConfig(data)
    }
    if (parentOwlUserList) {
      const p = parentOwlUserList
      setOwlUserList(p)
    }
  }, [])

  const columns = [{
    title: '用户名',
    // width: 90,
    key: 'id',
    render: (text: any, record: any, index: number) => (
      <Select
        style={{ maxWidth: '150px' }}
        showSearch
        value={record.user}
        placeholder="请选择用户名"
        optionFilterProp="children"
        // onChange={value => handleTableChange(value, index, 'id')}
      >
        {
          (owlUserList || []).map((item) => {
            return (
              <Select.Option key={item.id} value={item.id}>
                {`${item.last_name}${item.first_name}(${item.username})`}
              </Select.Option>)
          })
        }
      </Select>
    ),
  }, {
    title: '报警方式',
    width: 280,
    key: 'type',
    render: (text: any, record:any, index: any) => (
      <Checkbox.Group
        value={record.type}
        onChange={value => handleTableChange(value, index, 'type')}
      >
        <Checkbox value="mail">邮件</Checkbox>
        <Checkbox value="sms">短信</Checkbox>
        <Checkbox value="phone">电话</Checkbox>
        <Checkbox value="ding">钉钉</Checkbox>
      </Checkbox.Group>
    ),
  },
  // {
  //   title: '操作',
  //   // width: 19,
  //   render: (text, record, index) => {
  //     return (
  //       <Popconfirm
  //         title="确定要删除吗？"
  //         placement="topRight"
  //         onConfirm={() => handleDeleteRow(index)}
  //       >
  //         <a disabled={disabled || record.need === true}>删除</a>
  //       </Popconfirm>
  //     )
  //   },
  // }
]

  const getTableData = () => {
    let arr = []
    arr = dataSource.filter((item) => {
      const { type, id } = item
      return id && type.length
    })
    return arr
  }

  const pushConfig = (option: any) => {
    setDataSource(option)
  }
  const handleNewData = (d: any) => {
    setDataSource(d)
  }
  const handleAddRow = () => {
    const newData = {
      id: undefined,
      type: ['mail', 'sms'],
    }
    setDataSource([...dataSource, newData])
    setVisible(true)
    if (onChange) {
      onChange([...dataSource, newData])
    }
  }
  const handleDeleteRow = (index: number) => {
    const d = [...dataSource]
    d.splice(index, 1)
    setDataSource(d)
    if (onChange) {
      onChange(d)
    }
  }

  const handleTableChange = (value: any, index: any, type: any) => {
    const data = JSON.parse(JSON.stringify(dataSource))
    // const { owlUserList } = this.props
    // 需要特殊处理
    if (type === 'id') {
      const current = owlUserList.filter(item => item.id == value)[0] // eslint-disable-line
      data[index] = {
        ...data[index],
        id: value,
        // username: current.username,
        user: current.username,
        firstName: current.first_name,
        lastName: current.last_name,
      }
      // dataSource[index][type] = value
    } else {
      data[index][type] = value
    }
    setDataSource(data)
    // console.log(data)
    if (onChange) {
      onChange(data)
    }
  }
  return (
    <div>
      <div
        style={{
          display: 'flex', position: 'relative',
        }}
      >
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          size="small"
          rowKey="id"
          loading={loading}
          style={{
            width: '100%',
            backgroundColor: '',
          }}
        />
        <Button
          size="small"
          type="primary"
          shape="circle"
          icon="plus"
          style={{
            position: 'absolute',
            top: '4px',
            right: '-33px',
          }}
          onClick={() => handleAddRow()}
        />
      </div>
      <div
        style={{
          display: visible === true ? 'none' : 'block',
          border: '1px solid #d9d9d9',
          borderRadius: 4,
          textAlign: 'center',
          lineHeight: '40px',
        }}
      >
        {/* <a onClick={() => this.setState({ visible: true })} >
          点击展开配置
        </a> */}
      </div>
      <div
        style={{
          lineHeight: '30px',
          display: dataSource.length === 0 ? 'none' : 'block',
          textAlign: 'center',
        }}
      >
        {/* <a
          style={{
            display: visible === true ? 'inline-block' : 'none',
          }}
          onClick={() => this.setState({ visible: false })}
        >
          折叠
        </a> */}
      </div>
    </div>
  )
}

export default EarlyWarningSetting;



// class EarlyWarningSetting11 extends React.Component {


//   // componentDidUpdate(prevProps) {
//   //   // console.log(prevProps)
//   //   if (!_.isEqual(prevProps.data, this.props.data)) {
//   //     this.pushConfig(this.props.data)
//   //   }
//   // }

 

//   render() {
//     const { dataSource, loading, visible } = this.state

//     // const { owlUserList } = this.props
//     const { owlUserList } = this.state
//     const columns = [{
//       title: '用户名',
//       // width: 90,
//       key: 'id',
//       render: (text, record, index) => (
//         <Select
//           style={{ maxWidth: '150px' }}
//           showSearch
//           value={record.user}
//           placeholder="请选择用户名"
//           optionFilterProp="children"
//           onChange={value => this.handleTableChange(value, index, 'id')}
//         >
//           {
//             (owlUserList || []).map((item) => {
//               return (
//                 <Select.Option key={item.id} value={item.id}>
//                   {`${item.last_name}${item.first_name}(${item.username})`}
//                 </Select.Option>)
//             })
//           }
//         </Select>
//       ),
//     }, {
//       title: '报警方式',
//       width: 280,
//       key: 'type',
//       render: (text, record, index) => (
//         <Checkbox.Group
//           value={record.type}
//           placeholder="请输入"
//           onChange={value => this.handleTableChange(value, index, 'type')}
//         >
//           <Checkbox value="mail">邮件</Checkbox>
//           <Checkbox value="sms">短信</Checkbox>
//           <Checkbox value="phone">电话</Checkbox>
//           <Checkbox value="ding">钉钉</Checkbox>
//         </Checkbox.Group>
//       ),
//     }, {
//       title: '操作',
//       // width: 19,
//       render: (text, record, index) => {
//         return (
//           <Popconfirm
//             title="确定要删除吗？"
//             placement="topRight"
//             onConfirm={() => this.handleDeleteRow(index)}
//           >
//             <a disabled={this.props.disabled || record.need === true}>删除</a>
//           </Popconfirm>
//         )
//       },
//     }]
//     return (
     
//    )
//   }
// }

