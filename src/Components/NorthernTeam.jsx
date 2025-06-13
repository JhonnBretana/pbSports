import React from 'react'
import { nbaTeams } from './TeamLogos'

function NorthernTeam() {



    const northernTeams = nbaTeams.northwest
  return (
    <>
        <div className='container  pt-10'>
        <h2 className='text-3xl font-bold mb-4 text-center'>
            Noethern Conference Teams
        </h2>

        <div className='flex items-center space-x-4 
        mt-8 overflow-x-auto scrollbar-hide h-20 w-full
        border-4 border-x-0 border-[#F5A302] px-4 bg-white mx-auto
        md:items-center md:justify-center 
        '>
            {
                northernTeams.map((team,index )=>
                (
                    <a 
                    href={team.url}
                    key={index}
                    className='flex-shrink-0 group'
                    title=''
                    >
                        <img 
                        src={team.logo} 
                        alt=""
                        className='h-16 w-16 border-3 border-[#F5A302] rounded-full p-1' 
                        />

                    </a>
                )
            
            )
            }

        </div>
    </div>
    
    </>
  )
}

export default NorthernTeam