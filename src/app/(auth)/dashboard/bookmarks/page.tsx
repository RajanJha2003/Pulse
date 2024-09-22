import { BookMarkedEventList } from '@/components/EventsList';
import { NoContent } from '@/components/Illustrations';
import { ScrollArea } from '@/components/ui/scroll-area'
import { getUserBookmarkedEvents } from '@/lib/server/get-user-bookmarked-events';
import React from 'react'

const page = async() => {

  const initialBookmarkedEvent=await getUserBookmarkedEvents();
  return (
    <ScrollArea className='w-full h-full px-4 py-2'>
      <h2 className='text-2xl font-bold mb-8 mt-4 ml-4'>Bookmarked Events</h2>
      <div className='relative h-full grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {
          initialBookmarkedEvent.length===0 ?(
            <NoContent>
              You havent't bookmarked any event yet.
            </NoContent>
          ):(
            <BookMarkedEventList initialEvents={initialBookmarkedEvent} />
          )
        }
       

      </div>
    </ScrollArea>
  )
}

export default page