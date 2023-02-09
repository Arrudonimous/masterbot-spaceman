import Form from '../../components/FormRegister'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/MASTERBOT-LOGO.png';


export default function Home() {
  return (
    <main className="flex items-center justify-center bg-base w-[100vw] h-[100vh]">
      <div className="bg-white max-w-7xl md:max-h-[35rem] w-full h-full md:rounded-tl-[3.75rem] md:rounded-br-[3.75rem] flex flex-col md:flex-row md:justify-between overflow-hidden">
        <div className=" w-full md:w-1/2 bg-black flex justify-center flex-col items-center gap-5 md:gap-16 py-5 md:py-0">
          <div className='flex justify-center flex-col items-center'>
            <Image src={Logo} alt="logo" className='w-full h-full'/>
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
