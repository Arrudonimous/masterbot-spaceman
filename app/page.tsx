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
          <div className=" w-full md:w-1/2 bg-black px-8 py-10 flex justify-between flex-col">
            <div className='flex justify-center flex-col items-center'>
              <Image src={Logo} alt="logo" className='w-80'/>
            </div>

            <div className='flex gap-3 flex-col md:mt-0 mt-5 '>
              <div className='flex items-center justify-center'>
                <h2 className='text-white md:text-2xl text-xl'>Ainda não tem acesso?</h2>
              </div>

              <div>
                <a href={'https://pepper.com.br/checkout/index.html?p=16166&o=9056'} target="_blank" rel="noreferrer">
                  <button className="text-white bg-[#7400ff] rounded-3xl w-full py-3 uppercase">
                    <h1 className="font-medium md:text-lg text-base">
                      Cadastre-se
                    </h1>
                  </button>
                </a>

                <div className='flex justify-center items-center mt-5'>
                  <h1 className='text-white'>Crie a conta <a href="/register" className="underline text-blue-100" >aqui</a></h1>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-full md:w-1/2 bg-white px-8 py-10 text-black flex justify-between flex-col items-center">
            <h1 className=' text-lg md:text-2xl'>Conecte-se para ter acesso aos sinais</h1>
            <Form />
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
