import { ScrollArea } from '@/components/ui/scroll-area'
import { getUserEvents } from '@/lib/server/get-user-events';
import React from 'react'

const MyEventsPage = async() => {
  const initialEvents = await getUserEvents();

  return (
    <ScrollArea className='w-full h-full px-4 py-2'>
        <h2 className='text-2xl font-bold mb-2 mt-4 ml-4'>Your Events</h2>
        <div className='h-full grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3'>


        </div>
    </ScrollArea>
  )
}

export default MyEventsPage