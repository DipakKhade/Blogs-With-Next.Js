
import MaxWidthWrapper from '@/components/MaxwidthWrapper'
import React from 'react'
import Link from 'next/link'

async function getTickets() {
  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 0 // use 0 to opt out of using cache
    }
  })

  return res.json()
}
const page =async () => {
  const tickets = await getTickets()
  return (
    
   <MaxWidthWrapper>
   
     
     {tickets.map((ticket) => (
          <Link href={`/explore/${ticket.id}`}>
        <div key={ticket.id} className="card my-5">
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0, 200)}...</p>
         
        </div>
        </Link>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets, yay!</p>
      )}
   
   </MaxWidthWrapper>
  )
}

export default page
