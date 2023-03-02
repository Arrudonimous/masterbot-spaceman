"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next'

import NavBar from "../../components/NavBar";
import AnimatedNumber from 'react-animated-number';
import Logo from '../../public/SPACEMANLOGO.PNG';
import Image from 'next/image';
import Sol from '../../public/SOL.png';

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [number1, setNumber1 ] = useState(0)
  const [number2, setNumber2 ] = useState(0)

  useEffect(()=>{
    setIsLoading(true)
    const token = getCookie('token');
    if(!token){
      setIsLoading(false)
      return router.push('/')
    }
    setIsLoading(false)
  },[])

  function getRandomInt(min: number, max: number) {
    return ((Math.random() * (max - min + 1)) + min).toFixed(2);
  }

  function getValues(){
    const randomNumber1 = Math.floor(Math.random() * 10)
    const randomNumber2 = Math.floor(Math.random() * 10)
    setNumber1(0);
    setNumber2(0);

    setIsSearching(true);

    setTimeout(()=>{
      setIsSearching(false);

      if(randomNumber1 < 8){
        const value1 = getRandomInt(1, 2);
        setNumber1(parseFloat(value1))
      }
      else if(randomNumber1 >= 8){
        const value1 = getRandomInt(5, 5);
        setNumber1(parseFloat(value1))
      }

      if(randomNumber2 < 8){
        const value2 = getRandomInt(1, 2);
        setNumber2(parseFloat(value2))
      }
      else if(randomNumber2 >= 8){
        const value2 = getRandomInt(5, 5);
        setNumber2(parseFloat(value2))
      }
    }, 2700)
  }


  if(!isLoading){
    return (
      <div className='bg-base'>
        <main className="flex flex-col">
        <NavBar />

        <div className='w-full flex justify-center items-center flex-col mb-12'>
          <Image src={Logo} alt="logo" className='w-80'/>
          <h1 className='text-[#F2DAC3] backdrop-blur-sm text-2xl italic font-semibold bg-[#07032B] rounded-b-lg px-3 -mt-2 w-72 items-center justify-center flex'>Alpha</h1>
        </div>

        <div className='md:px-20'>
          <div className='flex items-center justify-center flex-col'>
            <h1 className='flex text-white mb-4 text-2xl'>Clique aqui para gerar sinais</h1>
            {isSearching ? (
              <div>
                <Image src={Sol} width={200} height={200} className="w-20 h-20 animate-spin duration-1000" alt='helice'/>
              </div>
            ):(
              <button 
                onClick={()=>{
                  getValues();
                }}
                id='neonButton'
                className='bg-transparent px-24 py-6 text-lg rounded-xl text-white drop-shadow-md border-2 border-pink-500 hover:border-pink-300 ease-in-out transition-colors active:border-blue-600'>
                DECOLAR
              </button>
            )}

            <div className='flex flex-col md:flex-row mt-4 text-black mb-20 md:mb-32 justify-center items-center md:justify-around w-full gap-5 md:gap-0'>
              <div className='w-3/4 md:w-1/3 bg-background-botao bg-contain h-60 bg-center bg-no-repeat rounded-3xl px-3 py-16 flex flex-col  drop-shadow-lg items-center'>
                <h1 className='text-xl'>Primeiro Valor</h1>
                <div className='w-full h-full flex justify-center items-center'>
                  <AnimatedNumber 
                    value={number1}
                    className='text-5xl md:text-7xl'
                    formatValue={(n: number) => n.toFixed(2)}
                    duration={800}
                  />
                </div>
              </div>

              <div className='w-3/4 md:w-1/3 bg-background-botao bg-contain h-60 bg-center bg-no-repeat rounded-3xl px-3 py-16 flex flex-col  drop-shadow-lg items-center'>
                <h1 className='text-xl'>Segundo Valor</h1>
                <div className='w-full h-full flex justify-center items-center'>
                  
                  <AnimatedNumber 
                    value={number2}
                    className='text-5xl md:text-7xl'
                    formatValue={(n: number) => n.toFixed(2)}
                    duration={800}
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      </div>
    )
  }
  else if (isLoading){
    return (
      <main className="bg-base w-[100vw] h-[100vh]">
        
      </main>
    )
  }
}
