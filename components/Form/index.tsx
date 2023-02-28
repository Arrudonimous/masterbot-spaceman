"use client"

import { AiFillMail, AiFillLock } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';

import 'react-toastify/dist/ReactToastify.css';

export default function Form(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  function clearInputs(){
    setEmail('');
    setPassword('')  
  }

  async function handleLogin(e: React.SyntheticEvent){
    e.preventDefault();

    setIsLoading(true);

    try {
      // const options = {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     email,
      //     password
      //   }),
      // };

      // const data = await fetch('/api/login', options);
      // const response = await data.json();

      // if(!data.ok){
      //   setIsLoading(false)
      //   return toast.error(response.message)
      // }

      // clearInputs();
      // toast.success(response.message)
      // setCookie('token', response.token)
      setIsLoading(false)


      setTimeout(()=>{
        router.push('/home')
      }, 1600)


    } catch (error: any){
      setIsLoading(false)
      console.log(error)
      return toast.error(error)
    }
  }

  return(
    <>
      <form onSubmit={(e) => handleLogin(e)} className='w-full h-full flex flex-col justify-between'>
        <div className='mt-5 md:mt-20'>
          <label htmlFor="email" className='text-xl text-black'>Insira seu E-mail</label>
          <div className="flex flex-row border-2 border-[#7400ff] gap-5 px-4 py-3 rounded-3xl mb-5 md:mb-10 md:mt-2 mt-0">
            <AiFillMail size={30}/>
            <input 
              type="text" 
              id="email" 
              placeholder="Email..."
              className='bg-transparent text-xl w-full pl-2 text-black border-0 outline-none border-l-2'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <label htmlFor="password" className='text-xl text-black'>Insira sua Senha</label>
          <div className="flex flex-row border-2 border-[#7400ff] gap-5 px-4 py-3 rounded-3xl md:mb-20 mb-5 mt-2">
            <AiFillLock size={30}/>
            <input 
              type="password" 
              id="password" 
              placeholder="Senha..."
              className='bg-white text-xl w-full pl-2 text-black border-0 outline-none border-l-2'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
        </div>

        <div>
          {!isLoading ? (
            <button className="text-white bg-[#7400ff] rounded-3xl w-full py-3 uppercase">
              <h1 className="font-medium md:text-xl text-lg">
                Entrar
              </h1>
            </button>
          ): (
           <button type="button" className="text-white bg-[#7400ff] rounded-3xl w-full py-3 uppercase flex items-center justify-center" disabled>
              <svg className="animate-spin h-7 w-7 border-t border-r border-t-green border-r-red rounded-full" viewBox="20 20 24 24"></svg>
            </button>
          )}
        </div>
      </form>
      <ToastContainer autoClose={1500}/>
    </>
  )
}