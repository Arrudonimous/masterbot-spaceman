import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/client'
import jwt from 'jsonwebtoken'

type Data = {
  message: string;
  user?:{
    id: number
    email: string;
  };
  token?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method === 'POST'){
    
    const { email, password } = req.body;


    if(!email.trim() || !password.trim()){
      return res.status(400).json({ message: 'Por favor, preencha todos os campos de login' })
    }

    const emailAlreadyExists = await prisma.user.findFirst({
      where:{
        email
      },
      select:{
        id: true,
        email: true,
        password: true,
      }
    })
    if(!emailAlreadyExists){
      return res.status(400).json({ message: 'Cadastro não encontrado em nossa plataforma' })
    }

    if(password !== emailAlreadyExists.password){
      return res.status(400).json({ message: 'Senha incorreta. Tente novamente!' })
    }

    const token = jwt.sign({ id: emailAlreadyExists.id }, process.env.JWT_PASS ?? '', { 
      expiresIn: '8h' 
    })

    return res.json({message: 'Usuário logado com sucesso', token })
  }

  if(req.method === 'PUT'){
    const { id, password } = req.body;

    const updatedPass = await prisma.user.update({
      data:{
        password,
      },
      where: {
        id,
      },
      select:{
        email:true,
        id:true,
        password: true,
      }
    })

    return res.json({message: "Senha alterada"})
  }
}
