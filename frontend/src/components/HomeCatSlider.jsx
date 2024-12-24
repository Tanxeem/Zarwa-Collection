import p_img2_4 from "../assets/p_img2_4.png"
import p_img3 from "../assets/p_img3.png"
import p_img4 from "../assets/p_img4.png"
import p_img5 from "../assets/p_img5.png"
import p_img6 from "../assets/p_img6.png"
import p_img7 from "../assets/p_img7.png"
import p_img8 from "../assets/p_img8.png"
import p_img9 from "../assets/p_img9.png"
import p_img10 from "../assets/p_img10.png"
import p_img11 from "../assets/p_img11.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper/modules';

function HomeCatSlider() {
  return (
    <div className='homeCatSlider pt-4'>
      <div className='container'>

      <Swiper
        slidesPerView={8}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
            <img src={p_img2_4} alt="" />
            <h3>MEN</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
            <img src={p_img3} alt="" />
            <h3>KIDS</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
            <img src={p_img4} alt="" />
            <h3>SHIRTS</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
            <img src={p_img5} alt="" />
            <h3>WOMEN</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
            <img src={p_img6} alt="" />
            <h3>TOP</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
            <img src={p_img7} alt="" />
            <h3>JEANS</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
            <img src={p_img8} alt="" />
            <h3>MEN TOP</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
            <img src={p_img9} alt="" />
            <h3>KIDS TOP</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
            <img src={p_img10} alt="" />
            <h3>JEANS</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
            <img src={p_img11} alt="" />
            <h3>SHIRTS</h3>
          </div>
        </SwiperSlide>

      </Swiper>

      </div>

    </div>
  )
}

export default HomeCatSlider