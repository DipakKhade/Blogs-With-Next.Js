import React from 'react'
import Image from 'next/image'
import mainlogo from '../_localdata/mainlogo.jpg'
import Link from 'next/link'
const NavBar = () => {
  return (
    <div className='rounded-md drop-shadow-md'>
    <div className="navbar bg-slate-300">
  <div className="flex-1">
    <Image
    src={mainlogo}
    width={50}
    height={50}
    alt='logo'
    quality={100}
    className=' rounded-full'
    ></Image>
    <a className="btn btn-ghost text-xl text-blue-500">Beyond Binary</a>
  </div>

 <Link
 href='/contact'>
 <div className=' hover:bg-blue-500 p-3 hover:rounded-md hover:text-black hover:cursor-pointer'>Contact</div></Link>

  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#000000" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h2v-2h-2v2zm0-4h2V7h-2v7z"/>
</svg>

          <span className="badge badge-sm indicator-item bg-blue-400">.</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">Get Update through Email</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">Turn On</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="data:image/png;base64,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" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
           New Blogs
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
</div>
  )
}

export default NavBar
