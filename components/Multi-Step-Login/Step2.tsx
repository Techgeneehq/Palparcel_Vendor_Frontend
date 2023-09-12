'use client';
import { InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';

const LoginStep2 = () => {
  const [showPass, setShowPass] = useState(true);

  const handleShowPass = () => setShowPass(!showPass);
  return (
    <div className="w-full mx-auto">
      <div className="w-full mb-6">
        <TextField
          type={showPass ? 'password' : 'text'}
          variant="outlined"
          label="Password"
          id="OTP_password"
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

export default LoginStep2