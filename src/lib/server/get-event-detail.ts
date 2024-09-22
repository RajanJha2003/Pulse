import "server-only";

import { Event, User } from "@prisma/client"
import { cache } from "react"
import { prisma } from "../prisma/client";
import { eventDetail } from "../prisma/validators/event-validator";



type Params={
    ownerId:User["id"],
    eventSlug:Event["slug"],
}



export const getEventDetail=cache(async({ownerId,eventSlug}:Params)=>{

    return await prisma.event.findUnique({
        where:{
            slug_ownerId:{
                ownerId,
                slug:eventSlug
            }
        },
        ...eventDetail
    })

})


