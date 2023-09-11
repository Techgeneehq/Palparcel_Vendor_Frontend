import { AppBar, Container, Grid } from "@mui/material"
import Image from "next/image"
import Logo from "@/components/Logo/Logo"
import Search from "@/components/Search/Search"
import profile from '@/public/assets/icons/profile.svg'
import bag from '@/public/assets/icons/shopping-bag.svg'
import Link from "next/link"

const Navbar = () => {
  return (
    <>
      <AppBar position="static" elevation={0} className="bg-white py-6 border">
        <Container fixed>
          <Grid className="flex justify-between items-center" container spacing={1}>
            <Grid item xs>
              <Logo palparcel={true} />
            </Grid>
            <Grid className="pt-0" item xs={8} container>
              <Grid className="mr-8" item xs>
                <Search />
              </Grid>
              <Grid className="flex items-center text-[#001128] text-base" item xs={4}>
                <p className='flex pr-4 border-r-[0.5px] border-[#969696]'>
                  <Image src={profile} alt="telephone icon" className='mr-2' />
                  <Link href="/Login">Login</Link> / <Link href="/">Register</Link>
                </p>
                <p className='flex pl-4 border-l-[0.5px] border-[#969696]'>
                  <Image src={bag} alt="telephone icon" className='mr-2' />
                  <a href="mailto:info@techgene.com">cart</a>
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </>
  )
}

export default Navbar