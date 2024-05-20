// eslint-disable-next-line no-unused-vars
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./Carousel.css";
 
import Windmills from "./windmills.jpg";
import Palms from "./palms.jpg";
import Beach from "./Beach.jpg";


export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);


  return (
    <div className="flex content-center  justify-center">
      <div className="embla " ref={emblaRef}>
        <div className="embla__container">
          {/* <div className="embla__slide relative justify-center flex mx-0 mx-auto ;" >
          <img src={BgImg} alt="BgImg" width={1366} height={768} className='w-full h-screen  '   /></div> */}
         
          <div className="embla__slide ; relative   mx-auto flex justify-center">
            <img
              src={Windmills}
              alt="Windmills"
              className="h-screen w-full object-cover"
            />
          </div>
          <div className="embla__slide relative mx-auto flex justify-center object-cover">
            <img
              src={Palms}
              alt="Palms"
              loading="lazy"
              className="h-screen w-full object-cover"
            />
          </div>
          <div className="embla__slide relative   mx-auto flex justify-center">
            <img
              src={Beach}
              alt="Beach"
              loading="lazy"
              className="h-screen w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default EmblaCarousel;
