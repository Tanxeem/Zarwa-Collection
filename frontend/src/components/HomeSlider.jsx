import Banner2 from "../assets/banner2.jpg"
import Banner3 from "../assets/banner3.jpg"


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';
import { Navigation, Autoplay } from 'swiper/modules';


function HomeSlider() {
  return (
        <Swiper navigation={true} modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction:false,
        }}
        className="mySwiper">
        <SwiperSlide> <img src={Banner2} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={Banner3} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={Banner2} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={Banner3} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={Banner2} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={Banner3} alt="" /> </SwiperSlide>

      </Swiper>
  )
}

export default HomeSlider