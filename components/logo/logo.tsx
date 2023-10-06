import Image from "next/image"
import black from '@/public/logo.png'
import white from '@/public/logo-white.png'

type LogoProps = {
  variant: string;
}

const Logo = ({ variant }: LogoProps) => {
  
  return (
    <>
      {variant === 'white' && <Image src={white} alt="Palparcel brand logo" />}
      {variant === 'black' && <Image src={black} alt="Palparcel brand logo" />}
    </>
  )
}

export default Logo