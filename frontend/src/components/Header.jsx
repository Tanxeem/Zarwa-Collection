import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/Logo.png'
import Search from './Search'

function Header() {
  return (
    <header>
        <div className="top-strip py-2 border-t-[1px] border-b-[1px] border-gray-200">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="col1 w-[50%]">
                        <p className='text-[14px] font-[500]'>Get up to 50% off new season styles, limited time</p>
                    </div>

                    <div className="col2 flex items-center justify-end">
                        <ul className='flex items-center gap-3'>
                            <li className="list-none">
                                <Link to="/help-center" className='text-[13px] link font-[500] transition-all'>
                                Help Center
                                </Link>
                            </li>

                            <li className="list-none">
                                <Link to="/order-tracking" className='text-[13px] link font-[500] transition-all'>
                                Order Tracking
                                </Link>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        </div>

        <div className="header py-3">
            <div className="container flex items-center justify-between">
                <div className="col1 w-[30%]">
                    <Link to={"/"}><img src={Logo} className='w-[30%]' /></Link>
                </div>

                <div className="col2 w-[40%]">
                    <Search />
                </div>

                <div className="col3 w-[30%]"></div>
            </div>
        </div>


    </header>
  )
}

export default Header