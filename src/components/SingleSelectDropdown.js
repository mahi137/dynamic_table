import React from 'react';
import { MenuItem, Select, Chip, Box } from '@mui/material';

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

const SingleSelectDropdown = ({ selectedValue, usedOptions, onChange }) => {
  const availableOptions = options.filter(option => !usedOptions.includes(option) || option === selectedValue);

  const handleRemove = () => {
    onChange('');
  };

  return (
    <Box>
      {selectedValue && (
        <Chip
          label={selectedValue}
          onDelete={handleRemove}
          color="primary"
          sx={{ marginBottom: '10px' }}
        />
      )}
      <Select
        fullWidth
        value={selectedValue || ''}
        onChange={e => onChange(e.target.value)}
        displayEmpty
      >
        <MenuItem value="" disabled>
          Select an option
        </MenuItem>
        {availableOptions.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default SingleSelectDropdown;
