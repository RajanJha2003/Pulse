import { EventDetail } from "@/lib/prisma/validators/event-validator"
import {EventCard} from "./EventCard"

type Props={
    initialEvents:EventDetail[]
}

export const UserEventsList=({initialEvents}:Props)=>{
    return initialEvents.map((event)=>(
        <EventCard key={event.id} event={event} className="h-36" />
        
    ))

}



export const BookMarkedEventList=({initialEvents}:Props)=>{
    return initialEvents.map((event)=>(
        <EventCard key={event.id} event={event} className="h-36" />
        
    ))

}