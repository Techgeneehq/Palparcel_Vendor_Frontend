import '@/app/globals.css'
import { CssBaseline } from '@mui/material'
import AuthNav from '@/components/layout/authNav';
import AuthFooter from '@/components/layout/authFooter';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='h-full w-full font-mont auth-main'>
      <CssBaseline />
      <AuthNav />
      {children}
      <AuthFooter />
    </main>
  );
};
export default AuthLayout;
