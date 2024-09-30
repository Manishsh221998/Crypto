import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-md rounded-b-2xl">
    <div className="flex-1">
      <Link to='/' className="btn btn-ghost text-3xl text-transparent bg-clip-text bg-gradient-to-tr from-[#080808] to-[#ffe346]">Crypto</Link>
      <Link to='/cryptoList' className="btn btn-ghost text-lg font-medium text-[#104f65]">Coin chart</Link>

    </div>
    <div className="flex-none gap-2">
      <div className="form-control">
        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
      </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Header