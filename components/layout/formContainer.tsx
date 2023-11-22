import { Grid } from '@mui/material';
import Link from 'next/link';

type FormContainerProps = {
  children: React.ReactNode;
  fHeader?: string;
  fSub?: string;
  login: boolean;
};

const FormContainer = ({
  children,
  fHeader,
  fSub,
  login,
}: FormContainerProps) => {
  return (
    <Grid className="flex justify-center" container>
      <Grid md={6} xs={10} item>
        <div className="border border-[#DEDEDE] px-5 md:px-32 py-[60px] md:py-20 rounded-3xl w-full">
          <h3 className="capitalize font-medium mb-4 text-2xl text-black text-center">
            {fHeader}
          </h3>
          <p className="font-normal mb-10 text-base text-[#969696] text-center">
            {fSub}
          </p>
          {children}
          {!login && (
            <p className="mt-[90px] text-center">
              Already have an account?{' '}
              <Link href="login" className="ml-1 text-[#7132A5]">
                Login
              </Link>
            </p>
          )}
          {login && (
            <p className="mt-[90px] text-center">
              Don{`'`}t have an account?{' '}
              <Link href="register" className="ml-1 text-[#7132A5]">
                Sign Up
              </Link>
            </p>
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default FormContainer;