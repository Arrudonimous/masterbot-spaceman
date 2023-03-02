import Form from '../../components/FormRegister'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/SPACEMANLOGO.PNG';



export default function Home() {
  return (
    <main className="flex items-center justify-center bg-base md:w-[100vw] md:h-[100vh] w-full h-full md:flex-row flex-col">
      <div className="bg-white max-w-7xl md:max-h-[35rem] w-full h-full md:rounded-tl-[3.75rem] md:rounded-br-[3.75rem] flex flex-col md:flex-row md:justify-between overflow-hidden">
        <div className=" w-full md:w-1/2 bg-black flex justify-center flex-col items-center gap-5 md:gap-16 py-5 md:py-0">
          <div className='flex justify-center flex-col items-center'>
            <Image src={Logo} alt="logo" className='md:w-80 w-64'/>
              <h1 className='text-[#F2DAC3] backdrop-blur-sm md:text-2xl text-md italic font-semibold bg-[#07032B] rounded-b-lg px-3 -mt-2 md:w-72 w-56  items-center justify-center flex'>Alpha</h1>
          </div>

          <h1 className='text-white text-xl md:text-2xl'>Ou conecte-se <Link href={'/'} className='text-blue-200 underline decoration-solid'>aqui</Link></h1>
        </div>
        <div className=" w-full h-full md:w-1/2 bg-white px-8 py-5 md:py-10 text-black flex md:justify-between gap-3 flex-col items-center">
          <h1 className='text-lg md:text-2xl'>Cadastre-se em nossa plataforma</h1>
          <Form />
        </div>
      </div>
    </main>
  )
}
