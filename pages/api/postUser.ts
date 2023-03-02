import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/client'

type Data = {
  message: string;
  createdUser?: {
    id: number;
    email: string;
    password: string;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method === 'POST'){
    
    const { email, password1, password2 } = req.body;

    if(!email.trim() || !password1.trim() || !password2.trim()){
      return res.status(400).json({ message: 'Por favor, preencha todos os campos de registro' })
    }

    if(password2 !== password1){
      return res.status(400).json({ message: 'As senhas precisam ser iguais' })
    }

    const authEmailExists = await prisma.autorizedEmail.findFirst({
      where:{
        email
      }
    })
    if(!authEmailExists){
      return res.status(400).json({ message: 'Email não tem acesso ao cadastro na nossa plataforma' })
    }

    const emailAlreadyExists = await prisma.user.findFirst({
      where:{
        email
      }
    })
    if(emailAlreadyExists){
      return res.status(400).json({ message: 'Email já cadastrado na plataforma' })
    }

    const createdUser = await prisma.user.create({ 
      data:{
        email,
        password: password1
      },
      select:{
        id: true,
        email: true,
        password: true,
      }
    })

    return res.status(201).json({ message: 'Email cadastrado com sucesso', createdUser });
  }
  else{
    return res.status(500).json({ message: 'Método não disponível para essa requisição' })
  }
}
