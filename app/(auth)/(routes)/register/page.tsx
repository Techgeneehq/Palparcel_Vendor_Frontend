'use client';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import * as React from 'react';
import FormContainer from '@/components/layout/formContainer';
import Step1 from '@/components/Multi-Step-SignUp/Step1';
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
      className={`relative after:content-[''] after:absolute after:top-[269%] after:left-0 after:w-full after:h-[1px] text-[#7132A5] hover:no-underline`}
    >
      Sign Up
    </span>,
  ];

  return (
    <Stack spacing={2} className="mt-8 md:mt-0 mb-20">
      <section className="bg-[#FCFCFC] flex items-center font-normal p-6 md:px-28 md:py-4 text-[#CECECE] text-sm border-b border-[#DEDEDE] relative">
        <div className="flex flex-col">
          <AuthPageName title='Sign Up' />
          <div className="flex">
            {breadcrumbs}
          </div>
        </div>
      </section>
    </Stack>
  );
};

const Register = () => {

  return (
    <main className="p-0">
      <CustomSeparator />
      <FormContainer
        fHeader='Create your account'
        fSub='Set up a your Palparcel account in just few steps'
        login={false}
      >
          <Step1 />
        </FormContainer>
    </main>
  );
}

export default Register