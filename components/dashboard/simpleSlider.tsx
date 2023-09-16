import '@coreui/coreui/dist/css/coreui.min.css';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

const SimpleSlider = () => {
  return (
    <CCarousel className="hidden md:block mb-[60px]" indicators dark>
      <CCarouselItem>
        <CImage
          className="d-block w-full object-contain"
          src="/assets/images/banner.png"
          alt="slide 1"
          width={'100%'}
          height={'100%'}
        />
      </CCarouselItem>
      <CCarouselItem>
        <CImage
          className="d-block w-full object-contain"
          src="/assets/images/banner.png"
          alt="slide 1"
        />
      </CCarouselItem>
      <CCarouselItem>
        <CImage
          className="d-block w-full object-contain"
          src="/assets/images/banner.png"
          alt="slide 1"
        />
      </CCarouselItem>
    </CCarousel>
  );
}

export default SimpleSlider
