import Image from 'next/image'
import apple from '@/public/assets/icons/sponsors/apple.svg'
import hp from '@/public/assets/icons/sponsors/hp.svg'
import intel from '@/public/assets/icons/sponsors/intel.svg'
import lenovo from '@/public/assets/icons/sponsors/lenovo.svg'
import samsung from '@/public/assets/icons/sponsors/samsung.svg'
import vivo from '@/public/assets/icons/sponsors/vivo.svg'

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