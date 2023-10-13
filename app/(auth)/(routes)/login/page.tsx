'use client';
import FormContainer from '@/components/layout/formContainer';
import Step1 from '@/components/Multi-Step-Login/Step1';
import Step2 from '@/components/Multi-Step-Login/Step2';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import * as React from 'react';

type CustomSeparatorProps = {
  bStep: number;
};

const formSteps = [Step1, Step2];

const formHeaders = [
  {
    id: 0,
    fHeader: 'Welcome Back!',
    fSub: 'Please log in to access your account',
  },
  {
    id: 1,
    fHeader: 'Account Verification',
    fSub: 'Enter the OTPin sent to your mail sample@gmail.com',
  },
];

const handleClick = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
};

const CustomSeparator = ({ bStep }: CustomSeparatorProps) => {
  console.log(bStep);
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
        bStep === 0 && 'text-[#FE9900]'
      } ${bStep > 0 && 'text-[#CECECE]'}`}
      // ${!bStep && "hidden"}
    >
      Login
      {bStep >= 1 ? <NavigateNextIcon fontSize="small" /> : null}
    </Link>,
    <Link
      key={2}
      href="#"
      className={`relative after:content-[''] after:absolute after:top-[269%] after:left-0 after:w-full after:h-[1px] hover:no-underline ${
        bStep < 1
          ? 'hidden'
          : bStep === 1
          ? 'visible text-[#FE9900]'
          : bStep > 1
          ? 'text-[#CECECE]'
          : ''
      }`}
    >
      Account Verification
      {bStep > 1 && <NavigateNextIcon fontSize="small" />}
    </Link>,
  ];

  return (
    <Stack spacing={2} className="mb-20">
      <section className="bg-[#FCFCFC] flex items-center font-normal px-28 py-9 text-[#CECECE] text-sm border-b border-[#DEDEDE] relative">
        {breadcrumbs}
      </section>
    </Stack>
  );
};

const Login = () => {
  const [formStep, setFormStep] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);

  const handleNextStep = () => setFormStep((prevStep) => prevStep + 1);

  const handlePrevStep = () => setFormStep((prevStep) => prevStep - 1);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const CurrStep = formSteps[formStep];
  console.log(formStep < formSteps.length - 1, formSteps.length - 1, formStep);

  return (
    <main className="p-0">
      <CustomSeparator bStep={formStep} />
      <form onSubmit={handleSubmit}>
        <FormContainer
          fHeader={formHeaders[formStep].fHeader}
          fSub={formHeaders[formStep].fSub}
          login={true}
        >
          <CurrStep />
          <div className="flex justify-between w-full">
            {formStep > 0 && (
              <button
                type="button"
                className="bg-[#FE9900] flex font-medium items-center px-6 py-3 rounded-3xl text-center text-white text-base"
                onClick={handlePrevStep}
              >
                Prev
              </button>
            )}
            {formStep < formSteps.length - 1 ? (
              <button
                type="button"
                className="bg-[#FE9900] flex font-medium items-center px-6 py-3 rounded-3xl text-center text-white text-base"
                onClick={handleNextStep}
              >
                Continue
              </button>
            ) : (
              <button
                type="submit"
                className="bg-[#FE9900] flex font-medium items-center px-6 py-3 rounded-3xl text-center text-white text-base"
              >
                Submit
              </button>
            )}
          </div>
        </FormContainer>
      </form>
    </main>
  );
};

export default Login;