"use client";

import { cn, PropsWithClassName } from "@/lib/utils/ui-utils"
import { Skeleton } from "./ui/skeleton"




export const Loader=()=>{
    return(
        <div>

        </div>
    )
}


export const AuthLoader=({className}:PropsWithClassName)=>{
    return(
        <Skeleton className={cn("bg-gray-100/50 w-32 h-10", className)} />
    )

}