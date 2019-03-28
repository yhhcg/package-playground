# package-playground

#### Antd table performance

Avoid re-rendering all cell once one of the cells changed.

**Override table elements using component property.**

**OptimizedRow**

```jsx
  import React from 'react';

  class OptimizedRow extends React.Component {
    ...
    /* ShouldUpdate decides whether to re-render table row. */
    shouldComponentUpdate(nextProps) {
      return nextProps.shouldUpdate;
    }

    render() {
      const {shouldUpdate, ...others} = this.props;

      return (
        <tr {...others } />
      );
    }
  }

  export default OptimizedRow;
```

**OptimizedCell**

```jsx
  import React from 'react';

  class OptimizedCell extends React.Component {
    ...
    /* Avoid re-rendering table cell through comparing value prop. */
    shouldComponentUpdate(nextProps) {
      if (nextProps.value === this.props.value) {
        return false;
      }
      return true;
    }

    render() {
      const {value, ...others} = this.props;

      return (
        <td {...others} />
      );
    }
  }

  export default OptimizedCell;
```

**TableDemo**

```jsx
  import React from 'react';
  import { Form, Input, Table } from 'antd';
  const {
    Item: FormItem,
  } = Form;
  
  class TableDemo extends React.Component {
    ...
    
    render() {
      const { form } = this.props;
      const columns = [{
        dataIndex: 'name',
        title: 'name',
        render: (text, record, index) => {
          return {
            children: (
              <FormItem>
                {
                  form.getFieldDecorator(`data[${index}].name`)(<Input />)
                }
              </FormItem>
            ),
            /** Set custom props per each body cell that will be injected into OptimizedCell props. */
            props: {
              value: text,
            },
          };
        },
      }];

      return (
        <Table
          columns={columns}
          components={{
            body: {
              /** Override Body cell. */
              cell: OptimizedCell,
              /** Override Body row. */
              row: OptimizedRow,
            },
          }}
          dataSource={data}
          onRow={(record, index) => {
            /** The object will be injected into OptimizedRow props. */
            return {
              /** True or false. */
              shouldUpdate: true,
            };
          }}
        />
      );
    }
  }
```
