import React from 'react'
import HomeSlider from '../components/HomeSlider'
import HomeCatSlider from '../components/HomeCatSlider'
import { LiaShippingFastSolid } from "react-icons/lia"

function Home() {
  return (
    <div>
      <HomeSlider />
      <HomeCatSlider />

      <section className='py-5 bg-white'>
        <div className="container">
          <div className="freeShipping w-full p-4 border rounded-md border-[#ff5252] flex items-center justify-between">
          <div className='col1 flex items-center gap-4'>
          <LiaShippingFastSolid className='text-[50px]' />
          <span className='text-[20px] font-[600]'>Free Shipping</span>
          </div>

          <div className="col2">
            <p className='mb-0 font-[500]'>Free Delivery now on your First order and over 3000 Pkr</p>
          </div>

          <p className='font-bold text-[25px]'>Only 3000/- PKR</p>
          </div>

        </div>

      </section>
    </div>
  )
}

export default Home