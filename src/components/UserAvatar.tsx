import { PropsWithClassName } from '@/lib/utils/ui-utils'
import React from 'react'
import { Avatar, AvatarFallback } from './ui/avatar';

type Props=PropsWithClassName<{
    displayName:string;
    color:string;
}>


const getFullNameInitials=(name:string)=>{
    const initials=name.match(/\b\w/g) || [];
    return initials.join("").toUpperCase();
}

const UserAvatar = ({displayName,color,className}:Props) => {
  return (
   <Avatar className={className}>
    <AvatarFallback style={{backgroundColor:color}} className='text-white text-xs'>
        {getFullNameInitials(displayName)}

    </AvatarFallback>

   </Avatar>
  )
}

export default UserAvatar