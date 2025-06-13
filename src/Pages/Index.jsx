import React from 'react'
import bgOne from '../assets/Others/bg1.png'

function Home() {
  return (
    <>

    <div>

        <div className='relative w-full h-[400px] overflow-hidden flex items-center justify-center text-white'> 
           
            <img src={bgOne} alt="Jersey"
            className='absolute inset-0 w-full h-[400px]  object-cover'/>



            {/*dark overlay kolang tong xtra div*/}
            <div className='absolute inset-0 bg-black opacity-50'></div> 

            {/*content*/}

            <div className='relative z-10 flex flex-col items-center justify-center  ' style={{ fontFamily: 'Roboto, sans-serif' }}>

                <div>
                     <h1 className='text-5xl p-5 text-center  font-bold mb-4'>
                     Elevate Your Style Dominate the Court
                     </h1>
                </div>

                <div>
                    <button className='border border-2 px-4 py-3 rounded-lg w-40 max-w-[200px]'>
                        Shop Now
                    </button>
                </div>
               
            </div>
        </div>

        
        

    </div>
    
    
    
    </>
  )
}

export default Home