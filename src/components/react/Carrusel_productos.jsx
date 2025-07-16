import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Carrusel_productos = () => {
  return (
    <div className="swiper h-100">
  <div className="swiper-wrapper">
    <div className="swiper-slide"> <img alt="imagen 1" /> </div>
    <div className="swiper-slide"> <img alt="imagen 2" /> </div>
    <div className="swiper-slide"> <img alt="imagen 3" /> </div>
  </div>
  <div className="swiper-pagination" />
  <div className="swiper-button-prev" />
  <div className="swiper-button-next" />
</div>


)}

export default Carrusel_productos
