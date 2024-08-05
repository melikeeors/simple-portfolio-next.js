import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <h3>Logo</h3>
      </div>

      <div className='navbar__right-side'>
        <a>About</a>
        <a>Work</a>
        <a>Contact</a>
      </div>
    </div>

  )
}
