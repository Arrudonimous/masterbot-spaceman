'use client'

import { getCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import Logo from '../public/SPACEMANLOGO.png';
import Form from '../components/Form'

export default function Home() {
  const router = useRouter();
  const [isloading, setIsLoading ] = useState(true)

  useEffect(()=>{
    setIsLoading(true)
    const token = getCookie('token');
    if(token){
      setIsLoading(false)
      return router.push('/home')
    }
    setIsLoading(false)
  },[])

  if(!isloading){
    return (
      <main className="flex items-center justify-center bg-base w-full h-full md:w-[100vw] md:h-[100vh]">
        <div className="bg-white max-w-7xl md:max-h-[35rem] w-full h-full md:rounded-tl-[3.75rem] md:rounded-br-[3.75rem] flex flex-col md:flex-row md:justify-between overflow-hidden">
          <div className=" w-full md:w-1/2 bg-black px-8 py-8 flex justify-around flex-col gap-2">
            <div className='flex justify-center flex-col items-center'>
              <Image src={Logo} alt="logo" className='md:w-80 w-64'/>
            </div>

            <div className='flex gap-3 flex-col'>
              <div className='flex items-center justify-center'>
                <h2 className='text-white md:text-2xl text-xl'>Ainda não tem acesso?</h2>
              </div>

              <div>
                <a href='/register'>
                  <button className="text-white bg-[#7400ff] rounded-3xl w-full py-3 uppercase">
                    <h1 className="font-medium md:text-lg text-base">
                      Cadastre-se
                    </h1>
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full h-full md:w-1/2 bg-white px-8 py-5 text-black flex justify-between flex-col items-center">
            <h1 className=' text-md md:text-2xl'>Conecte-se para ter acesso aos sinais</h1>
            <Form />
            <h1 className='text-black mt-1'><a href="https://t.me/EspacemanAlphaSenhas" target="_blank" rel="noreferrer" className="underline text-black" >Esqueceu a senha?</a></h1>
          </div>
        </div>
      </main>
    )
  }
  else{
    return(
      <main className="flex items-center justify-center bg-base w-[100vw] h-[100vh]">
        <svg className="animate-spin h-12 w-12 border-t border-r border-t-green border-r-red rounded-full" viewBox="20 20 24 24"></svg>
      </main>
    )
  }
}
