'use client';
import { useState } from 'react';
import FormContainer from '../FormContainer/FormContainer';
import Step1 from '../Multi-Step-SignUp/Step1';
import Step2 from '../Multi-Step-SignUp/Step2';
import Step3 from '../Multi-Step-SignUp/Step3';
import Step4 from '../Multi-Step-SignUp/Step4';

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

const MultiStep = () => {
  const [formStep, setFormStep] = useState(0);

  const handleNextStep = () => setFormStep((prevStep) => prevStep + 1);

  const handlePrevStep = () => setFormStep((prevStep) => prevStep - 1);

  const CurrStep = formSteps[formStep];

  return (
    <form>
      <FormContainer
        fHeader={formHeaders[formStep].fHeader}
        fSub={formHeaders[formStep].fSub}
        login={false}
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
              type="button"
              className="bg-[#FE9900] flex font-medium items-center px-6 py-3 rounded-3xl text-center text-white text-base"
              onClick={handleNextStep}
            >
              Submit
            </button>
          )}
        </div>
      </FormContainer>
    </form>
  );
};

export default MultiStep;
