'use client';
import { InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';

const Step2 = () => {
  const [showPass, setShowPass] = useState(true);

  const handleShowPass = () => setShowPass(!showPass);

  return (
    <div className="w-full mx-auto">
      <div className="w-full mb-6">
        <TextField
          type={showPass ? 'password' : 'text'}
          variant="outlined"
          label="Code"
          id="code"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={handleShowPass}>
                {showPass ? 'Show' : 'Hide'}
              </InputAdornment>
            ),
          }}
          fullWidth
        />
      </div>
      <div className="w-full mb-6">
        <TextField
          type={showPass ? 'password' : 'text'}
          variant="outlined"
          label="New Password"
          id="nPassword"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={handleShowPass}>
                {showPass ? 'Show' : 'Hide'}
              </InputAdornment>
            ),
          }}
          fullWidth
        />
      </div>
      <div className="w-full mb-6">
        <TextField
          type={showPass ? 'password' : 'text'}
          variant="outlined"
          label="Confirm New Password"
          id="cNPassword"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={handleShowPass}>
                {showPass ? 'Show' : 'Hide'}
              </InputAdornment>
            ),
          }}
          fullWidth
        />
      </div>
    </div>
  )
}

export default Step2