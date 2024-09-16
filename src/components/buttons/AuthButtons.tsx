import { PropsWithClassName } from '@/lib/utils/ui-utils'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import React from 'react'

const AuthButtons = async({className}:PropsWithClassName) => {
    const kindeUser=await getKindeServerSession().getUser();
    const user=kindeUser && (await getUserInfo(kindeUser.id));
    
  return (
    <div>AuthButtons</div>
  )
}

export default AuthButtons