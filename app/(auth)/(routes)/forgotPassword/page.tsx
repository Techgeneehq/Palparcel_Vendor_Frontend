'use client';
import * as React from 'react';
import Link from 'next/link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Stack from '@mui/material/Stack';
import Icon from '@/components/global/Icons';
import FormContainer from '@/components/layout/formContainer';
import Step1 from '@/components/Multi-Step-ForgotPassword/Step1';
import Step2 from '@/components/Multi-Step-ForgotPassword/Step2';
import AuthSuccess from '@/components/authSuccess/authSuccess';
import AuthPageName from '@/components/authPageName/authPageName';

type CustomSeparatorProps = {
  bStep: number;
};

const formSteps = [Step1, Step2];

const formHeaders = [
  {
    id: 0,
    fHeader: 'Forget Password',
    fSub: 'Enter the email you use to register your account',
  },
  {
    id: 1,
    fHeader: 'Reset Password',
    fSub: 'Enter the code sent to sample@gmail.com to reset password',
  },
];

const handleClick = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
};

const CustomSeparator = ({ bStep }: CustomSeparatorProps) => {
  
  const breadcrumbs = [
    <Link
      key={0}
      href="#"
      onClick={handleClick}
      className={`relative after:content-[''] after:absolute after:top-[269%] after:left-0 after:w-full after:h-[1px] hover:no-underline`}
    >
      Homepage
      <NavigateNextIcon fontSize="small" />
    </Link>,
    <Link
      key={1}
      href="#"
      onClick={handleClick}
      className={`relative after:content-[''] after:absolute after:top-[269%] after:left-0 after:w-full after:h-[1px] hover:no-underline ${
        bStep === 0 && 'text-[#7132A5]'
      } ${bStep > 0 && 'text-[#CECECE]'}`}
      // ${!bStep && "hidden"}
    >
      Forget Password
      {bStep >= 1 ? <NavigateNextIcon fontSize="small" /> : null}
    </Link>,
    <Link
      key={2}
      href="#"
      className={`relative after:content-[''] after:absolute after:top-[269%] after:left-0 after:w-full after:h-[1px] hover:no-underline ${
        bStep < 1
          ? 'hidden'
          : bStep === 1
          ? 'visible text-[#7132A5]'
          : bStep > 1
          ? 'text-[#CECECE]'
          : ''
      }`}
    >
      Reset Password
      {bStep > 1 && <NavigateNextIcon fontSize="small" />}
    </Link>,
  ];

  return (
    <Stack spacing={2} className="mt-8 md:mt-0 mb-20">
      <section className="bg-[#FCFCFC] flex items-center font-normal p-6 md:px-28 md:py-4 text-[#CECECE] text-sm border-b border-[#DEDEDE] relative">
        <div className="flex flex-col">
          <AuthPageName title='Forgot Password' />
          <div className="flex">
            {breadcrumbs}
          </div>
        </div>
      </section>
    </Stack>
  );
};

const ForgotPassword = () => {
  const [formStep, setFormStep] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);

  const handleNextStep = () => setFormStep((prevStep) => prevStep + 1);

  const handlePrevStep = () => setFormStep((prevStep) => prevStep - 1);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const CurrStep = formSteps[formStep];

  return (
    <main className="p-0">
      <CustomSeparator bStep={formStep} />
      <form onSubmit={handleSubmit}>
        {!submitted && <FormContainer
          fHeader={formHeaders[formStep].fHeader}
          fSub={formHeaders[formStep].fSub}
          login={false}
        >
          <CurrStep />
          <div className="flex justify-between w-full">
            {formStep > 0 && (
              <button
                type="button"
                className="bg-[#7132A5] flex font-medium items-center px-6 py-3 rounded-3xl text-center text-white text-base"
                onClick={handlePrevStep}
              >
                Prev
              </button>
            )}
            {formStep === 0 && (
              <button
                type="button"
                className="bg-[#7132A5] flex font-medium items-center px-6 py-3 rounded-3xl text-center text-white text-base"
                onClick={handleNextStep}
              >
                Continue
              </button>
            ) }{formStep >= formSteps.length - 1 && (
              <button
                type="submit"
                className="bg-[#7132A5] flex font-medium items-center px-6 py-3 rounded-3xl text-center text-white text-base"
              >
                Submit
              </button>
            )}
          </div>
        </FormContainer>}
        {submitted && <AuthSuccess fHeader="Password Reset" fSub='Your have successfully reset your password' icon={<Icon.SuccessIcon />} btn="login"  />}
      </form>
    </main>
  );
};

export default ForgotPassword;
