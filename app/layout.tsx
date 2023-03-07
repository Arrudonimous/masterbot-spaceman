import './globals.css'
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  weight: ["400", "700"],
  subsets : ["latin"],
  variable: '--font-poppins',
})

import AdminProvider from '../contexts/adminContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${poppins.className}`} id="root">
        <AdminProvider>
          {children}
        </AdminProvider>
      </body>
    </html>
  )
}
