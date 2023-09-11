import Image from 'next/image'
import { AppBar, Container } from '@mui/material'
import Navbar from "@/components/Navbar/Navbar"
import phone from '@/public/assets/icons/phone.svg'
import envelope from '@/public/assets/icons/envelope.svg'

const Header = () => {
  return (
    <div>
      <AppBar position='static' elevation={0} className='bg-[#001128] py-5'>
        <Container className='flex justify-between font-normal text-sm text-white' fixed>
          <div className='flex'>
            <p className='flex pr-4 border-r-[0.5px] border-[#969696]'>
              <Image src={phone} alt="telephone icon" className='mr-2' />
              <a href="tel:+23480000012345">080000012345</a>
            </p>
            <p className='flex pl-4 border-l-[0.5px] border-[#969696]'>
              <Image src={envelope} alt="telephone icon" className='mr-2' />
              <a href="mailto:info@techgene.com">info@techgene.com</a>
            </p>
          </div>
          <div className='flex'>
          <p className='flex pr-4 border-r-[0.5px] border-[#969696]'>
            <select className='bg-transparent'>
              <option value="Nigeria">Nigeria</option>
              <option value="U.K">U.K</option>
              <option value="U.S.A">U.S.A</option>
            </select>
            </p>
            <p className='flex pl-4 border-l-[0.5px] border-[#969696]'>
            <select className='bg-transparent'>
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="Spanish">Spanish</option>
            </select>
            </p>
          </div>
        </Container>
      </AppBar>
      <Navbar />
    </div>
  )
}

export default Header