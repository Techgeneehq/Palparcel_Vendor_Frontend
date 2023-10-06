import Image from 'next/image'
import apple from '@/public/assets/images/sponsors/apple.png'
import hp from '@/public/assets/images/sponsors/hp.png'
import intel from '@/public/assets/images/sponsors/intel.png'
import lenovo from '@/public/assets/images/sponsors/lenovo.png'
import samsung from '@/public/assets/images/sponsors/samsung.png'
import vivo from '@/public/assets/images/sponsors/vivo.png'

const brandImg = [apple, hp, intel, lenovo, samsung, vivo]

const Brands = () => {
  return (
    <>
      <h5 className='font-montserrat font-medium mb-8 text-center text-lg text-black w-full'>Our Partners</h5>
      <div className="w-full grid grid-cols-6 gap-8 py-12">
        {brandImg.map((b, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image className='h-full' src={b} alt="brand images of sponsors" />
          </div>
        ))}
      </div>
    </>
  )
}

export default Brands