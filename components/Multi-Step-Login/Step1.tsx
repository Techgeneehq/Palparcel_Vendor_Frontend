'use client';
import facebook from '@/public/assets/images/facebook_signup.png';
import google from '@/public/assets/images/google_signup.png';
import microsoft from '@/public/assets/images/microsoft_signup.png';
import { InputAdornment, TextField } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LoginStep1 = () => {
  const router = useRouter();

  const [showPass, setShowPass] = useState(true);

  const handleShowPass = () => setShowPass(!showPass);

  return (
    <form className="w-full mx-auto">
      <div className="flex justify-between gap-1 py-8 md:px-10 w-full">
        <div>
          <button
            type="button"
            className="w-20 h-[50px] flex justify-center items-center rounded-xl border border-[#DEDEDE]"
          >
            <Image src={google} alt="facebook icon" width={18} height={18} />
          </button>
        </div>
        <div>
          <button
            type="button"
            className="w-20 h-[50px] flex justify-center items-center rounded-xl border border-[#DEDEDE]"
          >
            <Image src={microsoft} alt="facebook icon" width={18} height={18} />
          </button>
        </div>
        <div>
          <button
            type="button"
            className="w-20 h-[50px] flex justify-center items-center rounded-xl border border-[#DEDEDE]"
          >
            <Image src={facebook} alt="facebook icon" width={18} height={18} />
          </button>
        </div>
      </div>
      <div className="w-full md:w-11/12 mx-auto text-center relative mb-8 before:absolute before:top-1/2 before:left-0 before:translate-y-[-50%] before:h-0 before:w-full before:border before:border-[#DEDEDE]">
        <span className="flex mx-auto px-[14px] bg-white text-[10px] text-[#8A8A8A] font-normal leading-normal relative w-fit">
          OR
        </span>
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
      <div className="w-full mb-9 flex justify-between text-sm font-normal leading-normal">
        <p className="flex text-[#001128] border">
          <input type="checkbox" className="mr-2" required />
          Remember Password
        </p>
        <Link href="forgotPassword" className="text-[#7132A5] border">
          Forget Password?
        </Link>
      </div>
      <div className="flex justify-between w-full">
        <button
          type="submit"
          className="bg-[#7132A5] flex font-medium items-center px-6 py-3 rounded-3xl text-center text-white text-base"
          onClick={() => router.push('/dashboard')}
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default LoginStep1;
