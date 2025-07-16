import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Carrusel_productos = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      navigation={true}         
      modules={[Navigation]}      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Producto 1</SwiperSlide>
      <SwiperSlide>Producto 2</SwiperSlide>
      <SwiperSlide>Producto 3</SwiperSlide>
      <SwiperSlide>Producto 4</SwiperSlide>
      <SwiperSlide>Producto 5</SwiperSlide>
      <SwiperSlide>Producto 6</SwiperSlide>
      <SwiperSlide>Producto 7</SwiperSlide>
      <SwiperSlide>Producto 8</SwiperSlide>
    </Swiper>
  );
};

export default Carrusel_productos;
