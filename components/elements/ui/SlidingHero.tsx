import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import Button from "./Button";
import HeaderImageUnderline from "./HeaderImageUnderline";

const SlidingHero = ({ heroData }: { heroData: any }) => {
  console.log(heroData, "gdg");
  return (
    <div className="md:mb-14 mb-8">
      <div className="md:block hidden  ">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
          slidesPerView={1}
          speed={600}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper flex md:h-[80vh] h-[80vh] w-full "
        >
          <div className="md:block hidden ">
            {heroData.desktopImages.data.map((image: any, idx: number) => {
              console.log(image, "image");
              return (
                <SwiperSlide
                  key={idx}
                  className="h-full md:h-[80vh] h-[80vh] w-full"
                >
                  <div
                    style={{
                      backgroundImage: `url(${image?.attributes?.url})`,
                    }}
                    className={`flex justify-center md:h-[80vh] h-[80vh]  relative flex items-end   bg-cover bg-no-repeat bg-center`}
                  >
                    {heroData.withButton && (
                      <Button
                        link={heroData.button.link}
                        variant={
                          heroData.button.button_variant.data?.attributes
                            .variant
                        }
                        className="uppercase mb-14"
                      >
                        {heroData.button.text}
                      </Button>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>

      <div className="md:hidden block">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
          slidesPerView={1}
          speed={600}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper flex md:h-[80vh] h-[80vh] w-full "
        >
          <div className="md:block hidden">
            {heroData.mobileImages.data.map((image: any, idx: number) => {
              console.log(image, "image");
              return (
                <SwiperSlide
                  key={idx}
                  className="h-full md:h-[80vh] h-[80vh] w-full"
                >
                  <div
                    style={{
                      backgroundImage: `url(${image?.attributes?.url})`,
                    }}
                    className={`flex justify-center md:h-[80vh] h-[80vh]  relative flex items-end   bg-cover bg-no-repeat bg-center`}
                  >
                    {heroData.withButton && (
                      <Button
                        link={heroData.button.link}
                        variant={
                          heroData.button.button_variant.data?.attributes
                            .variant
                        }
                        className="uppercase mb-14"
                      >
                        {heroData.button.text}
                      </Button>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>

      <HeaderImageUnderline />
    </div>
  );
};

export default SlidingHero;
