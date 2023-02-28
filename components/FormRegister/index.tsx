"use client"

import { AiFillMail, AiFillLock } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';




export default function Form(){
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();


  function clearInputs(){
    setEmail('');
    setPassword1('');
    setPassword2('');
  }

  async function handleRegisterUser(e: React.SyntheticEvent){
    e.preventDefault()
    setIsLoading(true);

    try { 
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password1,
          password2
        }),
      };

      const data = await fetch(`/api/postUser`, options);
      const response = await data.json();
      if(!data.ok){
        setIsLoading(false)
        return toast.error(response.message)
      }

      clearInputs();
      setIsLoading(false)
      toast.success(response.message);
      
      setTimeout(()=>{
        router.push('/')
      }, 2500)


    } catch (error: any){
      setIsLoading(false)
      console.log(error)
      return toast.error(error)
    }
  }

  
  return(
    <>
      <form onSubmit={(e) => handleRegisterUser(e)} className='w-full mt-2 md:mt-0'>
        <label htmlFor="email" className='text-lg md:text-xl text-black'>Insira seu E-mail</label>
        <div className="flex flex-row border-2 border-[#7400ff] gap-5 px-4 py-3 rounded-3xl mb-6 mt-2">
          <AiFillMail size={30}/>
          <input 
            type="text" 
            id="email" 
            placeholder="Email..."
            className='bg-transparent text-lg md:text-xl w-full pl-2 text-black border-0 outline-none border-l-2'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <label htmlFor="password" className='text-lg md:text-xl text-black'>Insira sua Senha</label>
        <div className="flex flex-row border-2 border-[#7400ff] gap-5 px-4 py-3 rounded-3xl mb-6 mt-2">
          <AiFillLock size={30}/>
          <input 
            type="password" 
            id="password" 
            placeholder="Senha..."
            className='bg-transparent text-lg md:text-xl w-full pl-2 text-black border-0 outline-none border-l-2'
            onChange={(e) => setPassword1(e.target.value)}
            value={password1}
          />
        </div>

        <label htmlFor="password2" className='text-lg md:text-xl text-black'>Repita sua Senha</label>
        <div className="flex flex-row border-2 border-[#7400ff] gap-5 px-4 py-3 rounded-3xl mb-10 md:mb-12 mt-2">
          <AiFillLock size={30}/>
          <input 
            type="password" 
            id="password2" 
            placeholder="Senha..."
            className='bg-transparent text-lg md:text-xl w-full pl-2 text-black border-0 outline-none border-l-2'
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
          />
        </div>

        {!isLoading ? (
            <button className="text-white bg-[#7400ff] rounded-3xl w-full py-3 uppercase">
              <h1 className="font-medium text-lg md:text-xl">
                Cadastrar
              </h1>
            </button>
          ): (
           <button type="button" className="text-white bg-[#7400ff] rounded-3xl w-full py-3 uppercase flex items-center justify-center" disabled>
              <svg className="animate-spin h-7 w-7 border-t border-r border-t-green border-r-blue rounded-full" viewBox="20 20 24 24"></svg>
            </button>
          )}
      </form>
      <ToastContainer autoClose={2000}/>
    </>
  )
}