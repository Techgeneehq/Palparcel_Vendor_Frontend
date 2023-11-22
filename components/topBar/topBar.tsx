import { AppBar, Container } from '@mui/material';
import Icon from '../global/Icons';
import Logo from '../logo/logo';
import Link from 'next/link';

const TopBar = () => {
  return (
    <AppBar position="static" elevation={0} className="bg-[#001128] py-5">
      <Container
        className="hidden md:flex justify-between font-normal text-sm text-white"
        fixed
      >
        <div className="flex">
          <p className="flex pr-4 border-r-[0.5px] border-[#969696]">
            <Icon.PhoneIcon className="mr-2" />
            <a href="tel:+23480000012345">080000012345</a>
          </p>
          <p className="flex pl-4 border-l-[0.5px] border-[#969696]">
            <Icon.EnvelopeIcon className="mr-2" />
            <a href="mailto:info@techgene.com">info@techgene.com</a>
          </p>
        </div>
        <div className="flex">
          <p className="flex pr-4 border-r-[0.5px] border-[#969696]">
            <select className="bg-transparent">
              <option value="Nigeria">Nigeria</option>
              <option value="U.K">U.K</option>
              <option value="U.S.A">U.S.A</option>
            </select>
          </p>
          <p className="flex pl-4 border-l-[0.5px] border-[#969696]">
            <select className="bg-transparent">
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="Spanish">Spanish</option>
            </select>
          </p>
        </div>
      </Container>
      <Container className='flex md:hidden lg:hidden xl:hidden' fixed>
        <Link href='/'>
          <Logo variant='white' />
        </Link>
      </Container>
    </AppBar>
  );
};

export default TopBar;
