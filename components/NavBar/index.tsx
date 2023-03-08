"use client"

import { MdOutlineExitToApp } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { useState, useContext } from 'react';
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
    deleteCookie('admin');
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
    <nav className="w-full bg-transparent h-14 md:px-16 flex items-center justify-end ">
      {/* <div className='md:flex flex-row items-center gap-5 hidden '>
        <h1 className='text-white text-xl font-semibold '>MasterBot - Spaceman</h1>
      </div> */}

      <div>
        {modalIsOpen?(
          <button onClick={handleChangeModal} className="bg-purple-800 rounded-lg">
            <MdOutlineExitToApp size={40} color='#ffffff'/>
          </button>
        ):(
          <button onClick={handleChangeModal}>
            <MdOutlineExitToApp size={40} color='#ffffff'/>
          </button>
        )}
      </div>
    </nav>
    <Modal 
      isOpen={modalIsOpen}
      onRequestClose={handleChangeModal}
      contentLabel="Example modal"
      overlayClassName="modal-overlay"
      className="absolute top-12 px-10 py-6 md:right-16 right-2 justify-between bg-white rounded-xl"
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