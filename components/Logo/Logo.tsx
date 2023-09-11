import Image from "next/image"
import pal from '@/public/palparcel.svg'
import tech from '@/public/techgene.svg'

type LogoProps = {
  palparcel?: boolean;
  techgene?: boolean;
}

const Logo = ({ palparcel, techgene }: LogoProps) => {
  
  return (
    <>
      {palparcel && <Image src={pal} alt="Palparcel brand logo" />}
      {techgene && <Image src={tech} alt="Techgene brand logo" />}
    </>
  )
}

export default Logo