import React from 'react'
import Home from '../Pages/Index.jsx'
import NavBar from '../Shared/Navbar.jsx'
import SubNavbar from '../Shared/SubNavbar.jsx'



function WebPages() {
  return (
    <>
    <div>
        <header>
            <section>
                <NavBar/>
            </section>

            <section>
                <SubNavbar/>
            </section>
            
        </header>

        <main>
            <section className='pt-34'>
                <Home/>
            </section>
        </main>

        <footer>


        </footer>
    </div>
    
    </>
  )
}

export default WebPages