import Image from 'next/image'
import aws from '@/public/sponsors/aws.svg'
import brand3 from '@/public/sponsors/fa-brands-3.svg'
import brand6 from '@/public/sponsors/fa-brands-6.svg'
import hooli from '@/public/sponsors/hooli.svg'
import lyft from '@/public/sponsors/lyft.svg'
import stripe from '@/public/sponsors/stripe.svg'

const brandImg = [aws, brand3, brand6, hooli, lyft, stripe]

const Brands = () => {
  return (
    <div className="w-full grid grid-cols-6 gap-8 py-12">
      {brandImg.map((b, index) => (
        <div key={index} className="flex justify-center items-center">
          <Image className='h-full' src={b} alt="brand images of sponsors" />
        </div>
      ))}
    </div>
  )
}

export default Brands