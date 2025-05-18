import React from 'react';
import {
  Paper,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  SelectChangeEvent,
} from '@mui/material';
import { Filter } from '../types/types';

interface GateFilterProps {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
}

const GateFilter: React.FC<GateFilterProps> = ({ filter, onFilterChange }) => {
  const handleChange = (field: keyof Filter, value: string) => {
    onFilterChange({
      ...filter,
      [field]: value,
    });
  };

  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField
          label="Search Gates"
          variant="outlined"
          size="small"
          value={filter.searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('searchQuery', e.target.value)}
          sx={{ flexGrow: 1 }}
        />
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Terminal</InputLabel>
          <Select
            value={filter.terminal}
            label="Terminal"
            onChange={(e: SelectChangeEvent) => handleChange('terminal', e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="A">Terminal A</MenuItem>
            <MenuItem value="B">Terminal B</MenuItem>
            <MenuItem value="C">Terminal C</MenuItem>
          </Select>
        </FormControl>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Status</InputLabel>
          <Select
            value={filter.status}
            label="Status"
            onChange={(e: SelectChangeEvent) => handleChange('status', e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="available">Available</MenuItem>
            <MenuItem value="occupied">Occupied</MenuItem>
            <MenuItem value="maintenance">Maintenance</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Paper>
  );
};

export default GateFilter; 