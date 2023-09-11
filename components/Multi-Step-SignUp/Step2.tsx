'use client';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { useState } from 'react';

const Step2 = () => {
  const [bussType, setBussType] = useState('');

  const handleSelectChange = (event: SelectChangeEvent) =>
    setBussType(event.target.value as string);

  return (
    <div className="w-full mx-auto">
      <div className="w-full mb-6">
        <TextField
          type="text"
          variant="outlined"
          label="Business Name"
          id="business_name"
          size="small"
          fullWidth
        />
      </div>
      <div className="w-full mb-6">
        <TextField
          type="text"
          variant="outlined"
          label="Business Address"
          id="business_address"
          size="small"
          fullWidth
        />
      </div>
      <div className="w-full mb-6">
        <FormControl fullWidth>
          <InputLabel id="business_type_label">Business Type</InputLabel>
          <Select
            labelId="business_type_label"
            id="business_type"
            label="Business Type"
            value={bussType}
            onChange={handleSelectChange}
          >
            <MenuItem value={'0'}></MenuItem>
            <MenuItem value={'1'}>Food Stuff</MenuItem>
            <MenuItem value={'2'}>Household Items</MenuItem>
            <MenuItem value={'3'}>Clothing</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="w-full mb-10">
        <TextField
          type="text"
          variant="outlined"
          label="Registration NO (Optional)"
          id="reg_no"
          size="small"
          fullWidth
        />
      </div>
    </div>
  );
};

export default Step2;
