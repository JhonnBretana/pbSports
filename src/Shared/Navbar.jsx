import React, { useState, useEffect } from 'react'
import Logo from '../assets/Others/FinalLogo.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import { MdAccountCircle } from "react-icons/md";


function Navbar() {

    const [isMenuOpen , setIsMenuOpen] = useState(false);


    {/* Menu button toggle flips between open and close state */}
    const toggleMenu  = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    {/*para ma prevent ung body scroll*/}

    useEffect(() =>{
        if(isMenuOpen){
            document.body.style.overflow = 'hidden'; //means no scroll
        }else{
            document.body.style.overflow = 'unset'; //means normal scroll
        };

        // yung return function na ito is used to clean up the effect
        return () => {
            document.body.style.overflow = 'unset';  // mareset sa normal scroll
        }
    }, [isMenuOpen]);

    //close side bar pag clinick ung link 
    const closeSidebar = () => {
        setIsMenuOpen(false);
    };





  return (
        <>
        <nav className='bg-[#222325] flex justify-between items-center px-4 py-5 text-white  fixed top-0 left-0 right-0 z-50'>
            {/*Logo*/}

            
            <div>
                <img src={Logo} alt="Logo" className='h-8' />
            </div>

            {/*Menu */}
            <button className='text-2xl md:hidden' 
            onClick={toggleMenu}
            aria-label='Open Menu'> {/*aria-label para sa accessibility ng button*/}
                
                {/* If menu is open, show close icon, otherwise show bars icon */}
                {!isMenuOpen && <FaBars />} 

                
            </button>

            {/*Desktop Menu*/}
            <div className='hidden md:flex space-x-4 text-white font-bold'
            style={{ fontFamily: 'Roboto, sans-serif' }}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Shop by Team</a>
                <a href="#">Jersey</a>
                <a href="#">Shoes</a>
            </div>
        </nav>

        {/*backdrop*/}
        {isMenuOpen && (
        
            <div
                className='fixed inset-0 bg-transparent bg-opacity-50 z-40  space-y-4 md:hidden'
                onClick={closeSidebar} //para ma close pag click sa background
            >
            </div>
        )}

        {/*Sidebar*/}
        <div className={`
            fixed top-18 right-0 w-60 bg-[#222325] h-full z-100
            transform transition-transform duration-300 ease-in-out  
              
            ${isMenuOpen ? 'translate-x-0 shadow-xl shadow-gray-800 ' : 'translate-x-full '}

         `}>


                {/*sidebar header*/}
            <div className='flex  justify-between items-center text-2xl px-5 bg-[#222325] text-white'>
               <img src={Logo} alt="Logo" className='h-6' />
                <button className=' p-4 text-white'
                onClick={closeSidebar}>
                <FaTimes/>
                </button>  
            </div>


                {/*mobile links nato*/}

            <div className='flex flex-col items-center mt-10  h-full space-y-5 text-white font-bold' 
            style={{ fontFamily: 'Roboto, sans-serif' }}>
                <a href="#" className='text-lg text-white hover:bg-[#F5A302]  '> Home </a>
                <hr  className='text-gray-500 opacity-50 w-40 '/>
                <a href="#" className='text-lg text-white hover:bg-[#F5A302]'> About </a>
                <hr  className='text-gray-500 opacity-50 w-40'/>
                <a href="#" className='text-lg text-white hover:bg-[#F5A302]'> Shop by Team </a>
                <hr  className='text-gray-500 opacity-50 w-40'/>
                <a href="#" className='text-lg text-white hover:bg-[#F5A302]'> Jersey </a>
                <hr  className='text-gray-500 opacity-50 w-40'/>
                <a href="#" className='text-lg text-white hover:bg-[#F5A302]'> Shoes </a>

            </div>
        </div>
      </>
            
        

  )
}

export default Navbar