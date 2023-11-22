'use client';
import FormContainer from '@/components/layout/formContainer';
import Step1 from '@/components/Multi-Step-Login/Step1';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import * as React from 'react';
import AuthPageName from '@/components/authPageName/authPageName';

const CustomSeparator = () => {
  const breadcrumbs = [
    <Link
      key={0}
      href="#"
      className={`relative after:content-[''] after:absolute after:top-[269%] after:left-0 after:w-full after:h-[1px] hover:no-underline`}
    >
      Homepage
      <NavigateNextIcon fontSize="small" />
    </Link>,
    <span
      key={1}
      className={`relative after:content-[''] after:absolute after:top-[269%] after:left-0 after:w-full after:h-[1px] hover:no-underline text-[#7132A5]`}
    >
      Login
    </span>,
  ];

  return (
    <Stack spacing={2} className="mt-8 md:mt-0 mb-20">
      <section className="bg-[#FCFCFC] flex items-center font-normal p-6 md:px-28 md:py-4 text-[#CECECE] text-sm border-b border-[#DEDEDE] relative">
        <div className="flex flex-col">
          <AuthPageName title='Login' />
          <div className="flex">
            {breadcrumbs}
          </div>
        </div>
      </section>
    </Stack>
  );
};

const Login = () => {


  return (
    <main className="p-0">
      <CustomSeparator />
      <FormContainer
          fHeader='Welcome Back!'
          fSub='Login to your Palparcel account'
          login={true}
        >
          <Step1 />
        </FormContainer>
    </main>
  );
};

export default Login;