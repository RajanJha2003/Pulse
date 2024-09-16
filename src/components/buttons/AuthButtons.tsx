import routes from '@/config/routes';
import { getUserInfo } from '@/lib/server/get-user-info';
import { cn, PropsWithClassName } from '@/lib/utils/ui-utils'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { Bell } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import UserAvatar from '../UserAvatar';

const AuthButtons = async({className}:PropsWithClassName) => {
    const kindeUser=await getKindeServerSession().getUser();
    const user=kindeUser && (await getUserInfo(kindeUser.id));
    
  return user ? (
    <div className={cn("inline-flex gap-x-7 items-center",className)}>
        <Bell className='h-5 w-5' />
        <Link href={routes.dashboard} prefetch={false}>
        <UserAvatar className="ring-2 ring-white" displayName={user.displayName} color={user.color} />

        </Link>
    </div>
  ):null
}

export default AuthButtons