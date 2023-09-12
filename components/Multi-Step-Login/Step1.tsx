'use client';
import { InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';

const LoginStep1 = () => {
  const [showPass, setShowPass] = useState(true);

  const handleShowPass = () => setShowPass(!showPass);

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
      <div className="w-full mb-6">
        <TextField
          type={showPass ? 'password' : 'text'}
          variant="outlined"
          label="Password"
          id="password"
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
      <div className="w-full mb-9">
        <p className="flex text-sm font-normal">
          <input type="checkbox" className="mr-2" required />Remember me
        </p>
      </div>
    </div>
  )
}

export default LoginStep1