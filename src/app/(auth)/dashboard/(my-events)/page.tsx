import { UserEventsList } from '@/components/EventsList';
import { ScrollArea } from '@/components/ui/scroll-area'
import { getUserEvents } from '@/lib/server/get-user-events';
import React from 'react'

const MyEventsPage = async() => {
  const initialEvents = await getUserEvents();

  return (
    <ScrollArea className='w-full h-full px-4 py-2'>
        <h2 className='text-2xl font-bold mb-2 mt-4 ml-4'>Your Events</h2>
       
          
      
       <div>
       <UserEventsList initialEvents={initialEvents} />
       </div>

    </ScrollArea>
  )
}

export default MyEventsPage