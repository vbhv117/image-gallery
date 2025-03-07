import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ImageCarousel.scss';

const ImageCarousel = ({ images }) => {
  return (
    <section className="image-carousel">
      <Swiper
        modules={[Navigation]} //pagination not included as dots not included in figma file. Can be added if required
        spaceBetween={40}
        slidesPerView={3}
        navigation
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {images.map((image) => (
         <SwiperSlide key={image.id}>
         <div className="image-carousel__item">
           <div className="image-carousel__image-container">
             <img src={image.src} alt={image.alt} />
           </div>
           <div className="image-carousel__content">
             <h3 className="image-carousel__title">{image.title || `Image ${image.id}`}</h3>
           </div>
         </div>
       </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ImageCarousel;