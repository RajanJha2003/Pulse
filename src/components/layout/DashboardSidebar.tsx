"use client";


import routes from '@/config/routes';
import { cn, PropsWithClassName } from '@/lib/utils/ui-utils';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs';
import { BookMarked, Component, LogOut, User } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { buttonVariants } from '../ui/button';
import SidebarItem from './SidebarItem';


const sidebarItems=[
    {
        name:"Your Events",
        route:routes.dashboard,
        Icon:Component
    },
    {
        name:"Bookmarked",
        route:routes.bookmarked,
        Icon:BookMarked
    },

    {
        name:"Account",
        route:routes.account,
        Icon:User
    },

] as const;

export const DesktopDashboardSidebar = ({className}:PropsWithClassName) => {
  return (
    <aside className={cn("border-r-blue-500/30 h-full shrink-0 grow-0 bg-white border-r hidden lg:block lg:basis-[250px] ",className)}>
      <DashboardSidebarContent />

    </aside>
  )
}




export const MobileDashboardSidebar = () => {
  return (
    <div>MobileDashboardSidebar</div>
  )
}




export const DashboardSidebarContent=()=>{
    const router=useRouter();
    const pathname=usePathname();
    return(
        <div className='flex flex-col h-full py-8 px-3' >
            <nav className='flex flex-col gap-y-2'>
                {
                    sidebarItems.map((item)=>{
                        const isActive=item.route===pathname;
                        return(
                            <button key={item.name} onClick={()=>router.replace(item.route)}>
                              <SidebarItem icon={item.Icon} isActive={isActive} text={item.name} />

                            </button>
                        )
                    })
                }
            </nav>
            <div className='mt-auto w-full'>
                <LogoutLink className={cn(buttonVariants({
                    variant:"outline"
                }),"w-full")}>
                    <LogOut className='w-4 h-4' />
                    <span className='ml-2'>Logout</span>

                </LogoutLink>

            </div>

        </div>

    )

}
