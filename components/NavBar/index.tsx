"use client"

import { GiCommercialAirplane } from 'react-icons/gi';
import { MdOutlineExitToApp } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { deleteCookie } from 'cookies-next';


export default function NavBar(){
  const router = useRouter();

  function handleLogout(){
    deleteCookie('token');
    router.push('/')
  }

  return(
    <nav className="w-full bg-blue-800 h-20 md:px-16 flex items-center justify-between">
      <div className='flex flex-row items-center gap-5'>
        <GiCommercialAirplane size={50} color={'#2d8fff'}/>
        <h1 className='text-white text-xl font-semibold '>MasterBot - Aviator</h1>
      </div>

      <div>
        <button onClick={handleLogout}>
          <MdOutlineExitToApp size={40} color='#ffffff'/>
        </button>
      </div>
    </nav>
  )
}