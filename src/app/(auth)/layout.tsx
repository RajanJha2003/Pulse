import Navbar from '@/components/layout/Navbar';
import React, { PropsWithChildren } from 'react'

export const dynamic = "force-dynamic";

const Authlayout = ({children}:PropsWithChildren) => {
  return (
    <>
    <Navbar />


<main className="h-[calc(100vh-68px)]">{children}</main>

    </>
  )
}

export default Authlayout