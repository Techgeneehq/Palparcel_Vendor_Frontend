'use client';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import * as React from 'react';
import Icon from '@/components/global/Icons';
import FormContainer from '@/components/layout/formContainer';
import Step1 from '@/components/Multi-Step-SignUp/Step1';
import Step2 from '@/components/Multi-Step-SignUp/Step2';
import Step3 from '@/components/Multi-Step-SignUp/Step3';
import Step4 from '@/components/Multi-Step-SignUp/Step4';
import AuthSuccess from '@/components/authSuccess/authSuccess';

type CustomSeparatorProps = {
  bStep: number;
};

const formSteps = [Step1, Step2, Step3, Step4];

const formHeaders = [
  {
    id: 0,
    fHeader: 'personal information',
    fSub: 'Enter your personal information below',
  },
  {
    id: 1,
    fHeader: 'business information',
    fSub: 'Enter your business information below',
  },
  {
    id: 2,
    fHeader: 'contact information',
    fSub: 'Enter your contact information below',
  },
  {
    id: 3,
    fHeader: 'payment information',
    fSub: 'Enter your payment information below',
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
      className={`relative after:content-[''] after:absolute after:top-[269%] after:left-0 after:w-full after:h-[1px] hover:no-underline ${
        bStep > 0 && 'after:bg-[#FE9900]'
      }`}
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
      } ${bStep > 0 && 'after:bg-[#FE9900] text-[#CECECE]'}`}
      // ${!bStep && "hidden"}
    >
      Sign Up
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
          ? 'text-[#CECECE] after:bg-[#FE9900]'
          : ''
      }`}
    >
      Business Information
      {bStep > 1 && <NavigateNextIcon fontSize="small" />}
    </Link>,
    <Link
      key={3}
      href="#"
      className={`relative after:content-[''] after:absolute after:top-[269%] after:left-0 after:w-full after:h-[1px] hover:no-underline ${
        bStep < 2
          ? 'hidden'
          : bStep === 2
          ? 'visible text-[#FE9900]'
          : bStep > 2
          ? 'text-[#CECECE] after:bg-[#FE9900]'
          : ''
      }`}
    >
      Contact Information
      {bStep > 2 && <NavigateNextIcon fontSize="small" />}
    </Link>,
    <Link
      key={4}
      href="#"
      className={`relative after:content-[''] after:absolute after:top-[269%] after:left-0 after:w-full after:h-[1px] hover:no-underline ${
        bStep < 3
          ? 'hidden'
          : bStep === 3
          ? 'visible text-[#FE9900]'
          : bStep > 3
          ? 'text-[#CECECE] after:bg-[#FE9900]'
          : ''
      }`}
    >
      Payment Information
      {bStep > 3 && <NavigateNextIcon fontSize="small" />}
    </Link>,
    <Link
      key={5}
      href="#"
      className={`relative after:content-[''] after:absolute after:top-[269%] after:left-0 after:w-full after:h-[1px] hover:no-underline ${
        bStep < 4
          ? 'hidden'
          : bStep === 4
          ? 'visible text-[#FE9900]'
          : bStep > 4
          ? 'text-[#CECECE] after:bg-[#FE9900]'
          : ''
      }`}
    >
      Success Information
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

const Register = () => {
  const [formStep, setFormStep] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);

  const handleNextStep = () => setFormStep((prevStep) => prevStep + 1);

  const handlePrevStep = () => setFormStep((prevStep) => prevStep - 1);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(!submitted);
  }

  const CurrStep = formSteps[formStep];
  console.log(formStep < formSteps.length - 1, formSteps.length - 1, formStep);

  return (
    <main className="p-0">
      <CustomSeparator bStep={formStep} />
      <form onSubmit={handleSubmit}>
        {!submitted && <FormContainer
          fHeader={formHeaders[formStep].fHeader}
          fSub={formHeaders[formStep].fSub}
          login={formStep < formSteps.length - 1 && false}
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
        </FormContainer>}
        {submitted && <AuthSuccess fHeader="Account Created" fSub='Your account have been successfully created' icon={<Icon.SuccessIcon />} btn="Verify Your Email Address"  />}
      </form>
    </main>
  );
}

export default Register