import React, { useState } from 'react';
import SingleSelectDropdown from './SingleSelectDropdown';
import MultiSelectDropdown from './MultiSelectDropdown';
import '../styles/Table.css';

const Table = () => {
  const [rows, setRows] = useState([{ id: 1, singleSelect: '', multiSelect: [] }]);
  const [usedOptions, setUsedOptions] = useState([]);

  const addRow = () => {
    setRows([...rows, { id: rows.length + 1, singleSelect: '', multiSelect: [] }]);
  };

  const handleSingleSelectChange = (rowId, value) => {
    const updatedRows = rows.map(row =>
      row.id === rowId ? { ...row, singleSelect: value } : row
    );

    const allSelected = updatedRows
      .filter(row => row.singleSelect)
      .map(row => row.singleSelect);

    setRows(updatedRows);
    setUsedOptions(allSelected);
  };

  return (
    <div>
      <h1 className="table-heading">Dynamic Table </h1>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Label 1</th>
            <th>Label 2</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id}>
              <td>
                <SingleSelectDropdown
                  selectedValue={row.singleSelect}
                  usedOptions={usedOptions}
                  onChange={value => handleSingleSelectChange(row.id, value)}
                />
              </td>
              <td>
                <MultiSelectDropdown
                  selectedValues={row.multiSelect}
                  onChange={values =>
                    setRows(
                      rows.map(r =>
                        r.id === row.id ? { ...r, multiSelect: values } : r
                      )
                    )
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-row-button fixed-bottom-right" onClick={addRow}>
        + Add New Row
      </button>
    </div>
  );
};

export default Table;
