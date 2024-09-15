import routes from '@/config/routes';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation';
import React, { PropsWithChildren } from 'react'

export const dynamic = "force-dynamic";

const DashboardLayout = async({children}:PropsWithChildren) => {

    const isAuthenticated=await getKindeServerSession().isAuthenticated();
    if(!isAuthenticated){
        redirect(routes.login);
    }
  return (
    <div>DashboardLayout</div>
  )
}

export default DashboardLayout