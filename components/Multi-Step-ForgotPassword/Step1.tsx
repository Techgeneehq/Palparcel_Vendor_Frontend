'use client';
import { TextField } from '@mui/material';

const Step1 = () => {
  return (
    <div className="w-full mx-auto">
      <div className="w-full mb-6">
        <TextField
          type="email"
          variant="outlined"
          label="Email Address"
          id="email_address"
          size="small"
          fullWidth
        />
      </div>
    </div>
  )
}

export default Step1