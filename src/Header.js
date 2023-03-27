import React from 'react'

const Header = () => {
  return (
    <div>
      <header className='header'>
     <h1>Welcome to my website!</h1>
     <nav className='nav-area'>
       <ul className='lists'>
         <li><a href="#">Home</a></li>
         <li><a href="#">About</a></li>
         <li><a href="#">Services</a></li>
         <li><a href="#">Contact</a></li>
       </ul>
     </nav>
   </header>

    </div>
  )
}

export default Header
