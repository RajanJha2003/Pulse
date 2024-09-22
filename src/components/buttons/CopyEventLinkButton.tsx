import { Event } from '@prisma/client'
import React from 'react'


type Props={
    ownerId:Event["ownerId"],
    eventSlug:Event["slug"]
}

const CopyEventLinkButton = ({ownerId,eventSlug}:Props) => {

    const handleCopy=()=>{
        copy
    }
  return (
    <div>CopyEventLinkButton</div>
  )
}

export default CopyEventLinkButton