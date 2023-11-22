import AuthNavSearch from '@/components/layout/authNavSearch';
import Logo from '@/components/logo/logo';
import TopBar from '@/components/topBar/topBar';
import { AppBar, Container, Grid } from '@mui/material';
import Icon from '../global/Icons';

const AuthNav = () => {
  return (
    <>
      <TopBar />
      <AppBar position="static" elevation={0} className="bg-[#510083] md:bg-white py-6">
        <Container fixed>
          <Grid
            className="flex justify-between items-center"
            container
          >
            <Grid item xs className='hidden md:flex lg:flex xl:flex'>
              <Logo variant="black" />
            </Grid>
            <Grid item xs className='flex md:hidden lg:hidden xl:hidden'>
              <button type='button' className='bg-transparent'>
                <Icon.MenuIcon /> 
              </button>
            </Grid>
            <Grid item xs={9} sm={8} md={4}>
              <AuthNavSearch />
            </Grid>
            <Grid
              className="flex justify-between items-center text-[#001128] text-base lg:ml-24 md:mt-3"
              item
              xs
              sm={12} 
              md 
              container
            >
              <Grid item xs className="hidden md:flex mx-1">
                <Icon.ProfileIcon />
                <select className="bg-transparent text-[#969696]">
                  <option value="Nigeria">Account</option>
                </select>
              </Grid>
              <Grid item xs className="hidden md:flex mx-1">
                <Icon.CategoryIcon />
                <select className="bg-transparent text-[#969696]">
                  <option value="Nigeria">Category</option>
                </select>
              </Grid>
              <Grid item xs className="hidden md:flex mx-1 text-[#969696]">
                <Icon.ProductIcon />
                <p>Cart</p>
                <p>(0)</p>
              </Grid>
              <Grid item xs className="flex md:hidden lg:hidden xl:hidden mx-1">
                <button type='button' className='flex bg-transparent ml-auto'>
                  <Icon.ShoppingBagWhiteIcon />
                </button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </>
  );
};

export default AuthNav;
