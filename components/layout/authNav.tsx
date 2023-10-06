import TopBar from "@/components/topBar/topBar"
import { AppBar, Container, Grid } from "@mui/material"
import Icon from '../global/Icons'
import Logo from "@/components/logo/logo"
import AuthNavSearch from "@/components/layout/authNavSearch"

const AuthNav = () => {
  return (
    <>
      <TopBar />
      <AppBar position="static" elevation={0} className="bg-white py-6">
        <Container fixed>
          <Grid className="flex justify-between items-center" container>
            <Grid item xs>
            <Logo variant='black' />
            </Grid>
            <Grid item xs={4}>
              <AuthNavSearch />
            </Grid>
            <Grid className="flex justify-between items-center text-[#001128] text-base ml-24" item xs container>
              <Grid item xs className='flex mx-1'>
                <Icon.ProfileIcon />
                <select className="bg-transparent text-[#969696]">
                  <option value="Nigeria">Account</option>
                </select>
              </Grid>
              <Grid item xs className='flex mx-1'>
                <Icon.CategoryIcon />
                <select className="bg-transparent text-[#969696]">
                  <option value="Nigeria">Category</option>
                </select>
              </Grid>
              <Grid item xs className="flex mx-1 text-[#969696]">
                <Icon.ProductIcon />
                <p>Cart</p>
                <p>(0)</p>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </>
  )
}

export default AuthNav