import React from 'react';
import {
  array,
  func,
  object,
  string,
} from 'prop-types';
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from '@material-ui/core';
import {
  Input,
} from 'antd';
import {hot} from 'react-hot-loader';

/**
 * MyTableHeadCell
 */
class MyTableHeadCell extends React.PureComponent {
  static propTypes = {
    title: string.isRequired,
  };

  /**
   * Render
   * @return {Element}
   */
  render() {
    const {
      title,
    } = this.props;

    return (
      <TableCell>{title}</TableCell>
    );
  }
}

/**
 * MyTableCell
 */
class MyTableCell extends React.Component {
  static propTypes = {
    children: object,
    value: string.isRequired,
  };

  /**
   * shouldComponentUpdate
   * @param  {Object} nextProps
   * @return {boolean}
   */
  shouldComponentUpdate(nextProps) {
    if (this.props.value === nextProps.value) return false;
    return true;
  }

  /**
   * Render
   * @return {Element}
   */
  render() {
    const {
      children,
    } = this.props;

    return (
      <TableCell>{children}</TableCell>
    );
  }
}

/**
 * Table
 */
@hot(module)
class Table extends React.Component {
  static propTypes = {
    columns: array.isRequired,
    data: array.isRequired,
    onChange: func.isRequired,
  };

  /**
   * @param  {string} columnKey
   * @param  {number} rowIndex
   * @param  {Object} event
   */
  handleChange = (columnKey, rowIndex, event) => {
    const {
      onChange,
    } = this.props;

    onChange({
      columnKey,
      rowIndex,
      value: event.target.value,
    });
  }

  /**
   * @return {Element}
   */
  render() {
    const {
      columns,
      data,
    } = this.props;

    return (
      <MuiTable>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <MyTableHeadCell key={column.dataIndex} title={column.title} />
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map((row, index) => {
              return (
                <TableRow key={row.key}>
                  {
                    columns.map((column) => {
                      return (
                        <MyTableCell key={`${row.key}-${column.dataIndex}`} value={row[`${column.dataIndex}`]}>
                          <Input
                            onChange={(event) => this.handleChange(column.dataIndex, index, event)}
                            value={row[`${column.dataIndex}`]}
                          />
                        </MyTableCell>
                      );
                    })
                  }
                </TableRow>
              );
            })
          }
        </TableBody>
      </MuiTable>
    );
  }
}

export default Table;
