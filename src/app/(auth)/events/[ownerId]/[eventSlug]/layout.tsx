import ParticipantsTooltip from '@/components/tooltips/ParticipantsTooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import UserAvatar from '@/components/UserAvatar';
import routes from '@/config/routes';
import { getEventDetail } from '@/lib/server/get-event-detail';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React, { PropsWithChildren } from 'react'

export const dynamic="force-dynamic";


type Props=PropsWithChildren<{
   params:{
    ownerId:string,
    eventSlug:string
   }
}>

const EventLayout= async({children,params:{ownerId,eventSlug}}:Props) => {

    const event=await getEventDetail({ownerId,eventSlug}); 

    if(!event){
        return notFound();
    }

    const {owner}=event;

    const showDescription =
    event.shortDescription && event.shortDescription.length > 0;

  return (
    <div className='flex flex-col items-start h-full pt-8 px-4 lg:px-8  '>
        <Link className='text-xs underline underline-offset-2' href={routes.dashboard}>
               <ArrowLeft className='w-3 h-3 inline-block mr-1' />
               <span>Back to events</span>
        </Link>


        <div className='w-full flex flex-col mt-3 lg:flex-row lg:shrink-0 lg:justify-between'>
            <div>
                <h2 className='font-bold text-2xl lg:text-3xl'>{event.displayName}</h2>

                {
                    showDescription &&(
                        <p className='line-clamp-1 text-sm text-muted-foreground mt-1.5'>{event.shortDescription}</p>
                    )
                }

                <div className='inline-flex items-center gap-x-2 mt-2'>
                    <span className='text-xs lg:text-sm'>
                        <span className='text-slate-600'>Organized by </span>
                        <span className='font-semibold'>{owner.displayName}</span>
                    </span>

                    <UserAvatar displayName={owner.displayName} color={owner.color} className='w-6 h-6' />
                </div>
            </div>


            {/* Participants, Event Action Buttons  */}


            <div className='flex items-baseline justify-between lg:items-center lg:mr-8 lg:self-end'>
                <ParticipantsTooltip className="mr-7" participantsCount={event._count.participants} />

            </div>
        </div>



        {/* Main content !&A and polls  */}
       <div className="w-full h-full overflow-auto pb-4">
          <ScrollArea className="relative h-full bg-white px-2.5 py-4 rounded-b-lg lg:rounded-lg lg:p-6">
            {children}
          </ScrollArea>
        </div>



  

    </div>
  )
}

export default EventLayout