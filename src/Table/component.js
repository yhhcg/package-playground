import React from 'react';
import {
  array,
  func,
} from 'prop-types';
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from '@material-ui/core';
import {hot} from 'react-hot-loader';

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
   * @param {Object} props
   */
  constructor(props) {
    super(props);
    this.props = props;
  }

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
            {
              columns.map((column) => {
                return (<TableCell key={column.dataIndex}>{column.title}</TableCell>);
              })
            }
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
                        <TableCell key={`${row.key}-${column.dataIndex}`}>
                          <TextField
                            onChange={(event) => this.handleChange(column.dataIndex, index, event)}
                            value={row[`${column.dataIndex}`]}
                          />
                        </TableCell>
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
