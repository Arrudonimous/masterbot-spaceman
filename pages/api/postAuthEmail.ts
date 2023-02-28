import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/client'

type Data = {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method === 'POST'){
    
    const { email } = req.body;
    const emailAlreadyExists = await prisma.autorizedEmail.findFirst({
      where:{
        email
      }
    })
    if(emailAlreadyExists){
      return res.status(400).json({ message: 'Email já cadastrado na nossa plataforma' })
    }

    const createdAuthEmail = await prisma.autorizedEmail.create({
      data:{
        email
      }
    })

    return res.status(201).json({ message: 'Email cadastrado com sucesso' });
  }
}
