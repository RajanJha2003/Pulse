import routes from '@/config/routes'
import { cn } from '@/lib/utils/ui-utils'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '../ui/button'
import {
  RegisterLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";

const btnClasses=cn(buttonVariants(),"p-6 text-sm rounded-sm lg:p-8 lg:text-xl")

const GetStartedButton = () => {
  // const {isAuthenticated}=useKindeBrowserClient();

  // if(!isAuthenticated){
  //   return  <RegisterLink className={btnClasses}>Get Started 👉</RegisterLink>;
  // }
  return (
    <Link href={routes.dashboard} className={btnClasses}>
         Get Started 👉
    </Link>
  )
}

export default GetStartedButton