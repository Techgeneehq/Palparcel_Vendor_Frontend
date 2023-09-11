'use cliient';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { useState } from 'react';

const Step4 = () => {
  const [bankName, setBankName] = useState('');

  const handleSelectChange = (event: SelectChangeEvent) =>
    setBankName(event.target.value as string);

  return (
    <div className="w-full mx-auto">
      <div className="w-full mb-6">
        <TextField
          type="text"
          variant="outlined"
          label="Account Number"
          id="account_number"
          size="small"
          fullWidth
        />
      </div>
      <div className="w-full mb-6">
        <TextField
          type="text"
          variant="outlined"
          label="Account Name"
          id="account_name"
          size="small"
          fullWidth
        />
      </div>
      <div className="w-full mb-6">
        <FormControl fullWidth>
          <InputLabel id="bank_label">Bank</InputLabel>
          <Select
            labelId="bank_label"
            id="bank"
            label="Bank"
            value={bankName}
            onChange={handleSelectChange}
          >
            <MenuItem value={'0'}></MenuItem>
            <MenuItem value={'2'}>First Bank</MenuItem>
            <MenuItem value={'1'}>GTB</MenuItem>
            <MenuItem value={'3'}>Union Bank</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="w-full mb-10">
        <TextField
          type="text"
          variant="outlined"
          label="Tax Identification"
          id="tax_id"
          size="small"
          fullWidth
        />
      </div>
    </div>
  );
};

export default Step4;
