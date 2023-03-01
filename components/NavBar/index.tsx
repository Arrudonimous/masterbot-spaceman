"use client"

import { MdOutlineExitToApp } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { deleteCookie } from 'cookies-next';

import Modal from 'react-modal';


Modal.setAppElement('#root')

export default function NavBar(){
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  function handleLogout(){
    setIsLoading(true);
    deleteCookie('token');
    setIsLoading(false);
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
      className="absolute top-20 px-10 py-6 right-16 justify-between bg-white rounded-xl"
    >
      <div className='flex flex-col justify-between gap-5'>
        <h1>
          Deseja sair da conta?
        </h1>

        <div className='flex gap-2'>
          <button className='w-1/2 bg-gray-200 px-2 py-1 rounded-md' onClick={handleChangeModal}>
            Voltar
          </button>
          <button className='w-1/2 bg-red-500 px-2 py-1 rounded-md' onClick={handleLogout}>
            Sair
          </button>
        </div>
      </div>
    </Modal>
    </>
  )
}