import { Button } from '@mui/material'
import { RiMenu2Fill } from "react-icons/ri"
import { LiaAngleDownSolid } from "react-icons/lia"
import { Link } from 'react-router-dom'
import { GoRocket } from "react-icons/go"

function Navigation() {
  return (
    <nav className='py-2'>
        <div className="container flex items-center justify-end">
            <div className="col_1 w-[20%]">
                <Button className="!text-black !font-semibold gap-2 w-full">
                    <RiMenu2Fill className='text-[18px]'/>
                    Shop By Categories
                    <LiaAngleDownSolid className='text-[14px] ml-auto font-bold'/>
                    </Button>
            </div>

            <div className="col_2 w-[60%] ">
                <ul className='flex items-center gap-5 justify-center'>
                    <li className="list-none">
                        <Link to="/" className='link transition text-[14px] font-semibold' >HOME</Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className='link transition text-[14px] font-semibold' >FASHION</Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className='link transition text-[14px] font-semibold' >MEN</Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className='link transition text-[14px] font-semibold' >WOMEN</Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className='link transition text-[14px] font-semibold' >KIDS</Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className='link transition text-[14px] font-semibold' >BAGS</Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className='link transition text-[14px] font-semibold' >FOOTWARE</Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className='link transition text-[14px] font-semibold' >BEAUTY</Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className='link transition text-[14px] font-semibold' >JEWELLERY</Link>
                    </li>

                </ul>
            </div>

            <div className="col_3 w-[20%] pl-6">
                <p className='text-[14px] font-semibold flex items-center gap-3 mb-0 mt-0 justify-end'>
                    <GoRocket className='text-[18px]' />Free International Delivery</p>
            </div>
        </div>
    </nav>
  )
}

export default Navigation