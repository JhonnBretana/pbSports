import React from 'react'
import {FaShoppingCart, FaSearch} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


function SubNavbar() {
  return (
     <>
        <div className='bg-[#F5A302] flex justify-between items-center px-2 py-3 text-white fixed top-[72px] w-full  mx-auto  '>

               
            <div className='flex items-center justify-between relative w-full mx-auto'>

                 {/*search bar to*/}
                <div className='relative '>
                    <input 
                    type="text"
                    placeholder='Search Items ' 
                    className='border border-[#222325] px-4 py-2 pr-12 rounded-lg placeholder-black w-70 
                     outline-none focus:ring-2 focus:ring-[#222325] '/>

                    <button
                    className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#222325] py-3 
                    px-4 rounded-lg rounded-l-none '
                    >
                        <FaSearch/>
                    </button>
                </div>

                <div className='flex items-center space-x-4 ml-4'>
                    <button className='text-[#222325]'>
                        <FaShoppingCart className='text-2xl' />
                    </button>

                    <button className='text-[#222325]'>
                        <CgProfile className='text-2xl' />
                    </button>
                </div>

                

            </div>

        </div>
    
    </>
  )
}

export default SubNavbar