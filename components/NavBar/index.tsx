"use client"

import { MdOutlineExitToApp } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { deleteCookie } from 'cookies-next';

import Modal from 'react-modal';


Modal.setAppElement('#root')

export default function NavBar(){
  const [modalIsOpen, setIsOpen] = useState(false);
  const router = useRouter();

  function handleLogout(){
    deleteCookie('token');
    router.push('/')
  }

  function handleChangeModal(){
    if(modalIsOpen){
      return setIsOpen(false);
    }
    return setIsOpen(true);
  }

  return(
    <>
    <nav className="w-full bg-transparent h-20 md:px-16 flex items-center justify-end ">
      {/* <div className='md:flex flex-row items-center gap-5 hidden '>
        <h1 className='text-white text-xl font-semibold '>MasterBot - Spaceman</h1>
      </div> */}

      <div>
        <button onClick={handleChangeModal}>
          <MdOutlineExitToApp size={40} color='#ffffff'/>
        </button>
      </div>
    </nav>
    <Modal 
      isOpen={modalIsOpen}
      onRequestClose={handleChangeModal}
      contentLabel="Example modal"
      overlayClassName="modal-overlay"
    >
      oi
    </Modal>
    </>
  )
}