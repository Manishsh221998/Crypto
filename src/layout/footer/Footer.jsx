import React from 'react'

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content lg:p-1 sm:p-0">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Crypto || Made with <span className='text-[red]'>&hearts;</span> by Manish</p>
  </aside>
</footer>
  )
}

export default Footer