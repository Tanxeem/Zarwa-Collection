import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { GoRocket } from "react-icons/go"

function Navigation() {
  return (
    <nav className='py-2'>
        <div className="container flex items-center justify-end">

            <div className="col_2 w-[80%] ">
                <ul className='flex items-center gap-5 justify-center nav'>
                    <li className="list-none">
                        <Link to="/" className='link transition text-[14px] font-semibold' >HOME</Link>
                    </li>
                    <li className="list-none relative">
                        <Link to="/" className='link transition text-[14px] font-semibold' >FASHION</Link>
                        
                        <div className="submenu absolute top-[120%] opacity-0 transition-all left-[0%] min-w-[200px] bg-white shadow-md">
                            <ul>
                                <li className='list-none w-full relative'>
                                    <Link to="/men">
                                    <Button className='!text-[rgba(0,0,0,0.8)] !rounded-none w-full !text-left !justify-start !font-semibold'>Men</Button>

                                    {/* Subcategory Add */}

                                    <div className="submenu absolute top-[0%] opacity-0 transition-all left-[100%] min-w-[200px] bg-white shadow-md">
                            <ul>
                                <li className='list-none w-full'>
                                    <Link to="/t-shirt">
                                    <Button className='!text-[rgba(0,0,0,0.8)] !rounded-none w-full !text-left !justify-start !font-semibold'>T-Shirt</Button>
                                    </Link>
                                </li>
                                <li className='list-none w-full'>
                                    <Link to="/jeans">
                                    <Button className='!text-[rgba(0,0,0,0.8)] !rounded-none w-full !text-left !justify-start !font-semibold'>Jeans</Button>
                                    </Link>
                                </li>
                                <li className='list-none w-full'>
                                    <Link to="/footwear">
                                    <Button className='!text-[rgba(0,0,0,0.8)] !rounded-none w-full !text-left !justify-start !font-semibold'>Footwear</Button>
                                    </Link>
                                </li>
                                <li className='list-none w-full'>
                                    <Link to="/watch">
                                    <Button className='!text-[rgba(0,0,0,0.8)] !rounded-none w-full !text-left !justify-start !font-semibold'>Watch</Button>
                                    </Link>
                                </li>
                                <li className='list-none w-full'>
                                    <Link to="/trouser">
                                    <Button className='!text-[rgba(0,0,0,0.8)] !rounded-none w-full !text-left !justify-start !font-semibold'>Trouser</Button>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                                    </Link>
                                </li>
                                <li className='list-none w-full'>
                                    <Link to="/women">
                                    <Button className='!text-[rgba(0,0,0,0.8)] !rounded-none w-full !text-left !justify-start !font-semibold'>Women</Button>
                                    </Link>
                                </li>
                                <li className='list-none w-full'>
                                    <Link to="/kids">
                                    <Button className='!text-[rgba(0,0,0,0.8)] !rounded-none w-full !text-left !justify-start !font-semibold'>Kids</Button>
                                    </Link>
                                </li>
                                <li className='list-none w-full'>
                                    <Link to="/girls">
                                    <Button className='!text-[rgba(0,0,0,0.8)] !rounded-none w-full !text-left !justify-start !font-semibold'>Girls</Button>
                                    </Link>
                                </li>
                                <li className='list-none w-full'>
                                    <Link to="/boys">
                                    <Button className='!text-[rgba(0,0,0,0.8)] !rounded-none w-full !text-left !justify-start !font-semibold'>Boys</Button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
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