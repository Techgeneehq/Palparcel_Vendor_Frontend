'use client';
import { InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';

const Step1 = () => {
  const [showPass, setShowPass] = useState(true);
  const [checked, setChecked] = useState(true);

  const handleShowPass = () => setShowPass(!showPass);

  return (
    <div className="w-full mx-auto">
      <div className="border border-[#F4F4F4] flex justify-center py-8 px-10 rounded-3xl w-full mb-9">
        <div>
          <input
            disabled
            type="radio"
            name="user_type"
            id="user"
            className="peer/user hidden"
          />
          <label
            htmlFor="user"
            className="bg-white font-medium px-8 py-4 rounded-3xl text-base text-[#969696] peer-checked/user:text-[#FE9900] peer-checked/user:bg-[rgba(254,152,0,0.1)]"
          >
            User
          </label>
        </div>
        <div>
          <input
            disabled
            type="radio"
            name="user_type"
            id="affiliate"
            className="peer/affiliate hidden"
          />
          <label
            htmlFor="affiliate"
            className="bg-white font-medium px-8 py-4 rounded-3xl text-base text-[#969696] peer-checked/affiliate:text-[#FE9900] peer-checked/affiliate:bg-[rgba(254,152,0,0.1)]"
          >
            Affiliate
          </label>
        </div>
        <div>
          <input
            defaultChecked
            type="radio"
            name="user_type"
            id="vendor"
            className="peer/vendor hidden"
          />
          <label
            htmlFor="vendor"
            className={`bg-white font-medium px-8 py-4 rounded-3xl text-base text-[#969696] peer-checked/vendor:text-[#FE9900] peer-checked/vendor:bg-[#FE9900]/[0.1] ${checked && "text-[#FE9900] bg-[#FE9900]/[0.1]"}`}
          >
            Vendor
          </label>
        </div>
      </div>
      <div className="w-full mb-6">
        <TextField
          type="text"
          variant="outlined"
          label="Full Name"
          id="full_name"
          size="small"
          fullWidth
        />
      </div>
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
      <div className="w-full mb-4">
        <TextField
          type={showPass ? 'password' : 'text'}
          variant="outlined"
          label="Confirm Password"
          id="cPassword"
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
          <input type="checkbox" className="mr-2" required />I agree to{' '}
          <span className="flex mx-1 font-semibold">terms</span> and{' '}
          <span className="flex mx-1 font-semibold"> condition</span>
        </p>
      </div>
    </div>
  );
};

export default Step1;
