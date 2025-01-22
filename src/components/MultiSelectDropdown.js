import React, { useState } from 'react';
import {
  MenuItem,
  Select,
  Checkbox,
  ListItemText,
  TextField,
  Button,
  Chip,
  Box,
} from '@mui/material';

const initialOptions = ['Option A', 'Option B', 'Option C', 'OptionD'];

const MultiSelectDropdown = ({ selectedValues, onChange }) => {
  const [options, setOptions] = useState(initialOptions);
  const [newOption, setNewOption] = useState('');

  const handleAddOption = () => {
    if (newOption.trim() && !options.includes(newOption.trim())) {
      const updatedOptions = [...options, newOption.trim()];
      const updatedSelectedValues = [...selectedValues, newOption.trim()];

      setOptions(updatedOptions);
      onChange(updatedSelectedValues);
      setNewOption(''); // Clear the input field
    }
  };

  const handleRemoveOption = (optionToRemove) => {
    const updatedSelectedValues = selectedValues.filter(
      (value) => value !== optionToRemove
    );
    onChange(updatedSelectedValues);
  };

  return (
    <div>
      {/* Display selected options as chips */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
          marginBottom: '10px',
        }}
      >
        {selectedValues.map((value) => (
          <Chip
            key={value}
            label={value}
            onDelete={() => handleRemoveOption(value)}
            color="primary"
          />
        ))}
      </Box>

      {/* Dropdown for selecting options */}
      <Select
        multiple
        value={selectedValues}
        onChange={(e) => onChange(e.target.value)}
        renderValue={(selected) => selected.join(', ')}
        fullWidth
        displayEmpty
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            <Checkbox checked={selectedValues.includes(option)} />
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>

      {/* Input field and button for adding new options */}
      <div style={{ marginTop: '10px', display: 'flex', gap: '8px' }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Add new option"
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleAddOption}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
