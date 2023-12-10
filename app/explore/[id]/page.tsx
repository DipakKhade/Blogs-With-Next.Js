
import { notFound } from 'next/navigation'
import React from 'react'

export const dynamicparams = true

export async function generateStaticParams(){

  const res=await fetch('http://localhost:4000/tickets')

  const tickets=await res.json()

  return tickets.map((ticket)=>{
    id:ticket.id
  })
}


async function getTicket(id:string) {
    const res = await fetch('http://localhost:4000/tickets/'+id, {
      next: {
        revalidate: 60 
      }
    })

    
    if(!res.ok){
      notFound()
    }
  
    return res.json()
  }

const  TicketDetails = async({params}) => {
    const ticket=await getTicket(params.id)
    
  return (
    <>
  
   <div>
   <h2 className='m-12'>{ticket.title}</h2>

   </div>
   <p className=' text-slate-800 p-3'>{ticket.body}</p>

<div className={`pill ${ticket.priority}`}>
  <h4 className='text-black m-4'>Key Features</h4>
<ul className='p-4 bg-teal-300'>
  <li>{ticket.features[0]}</li>
  <li>{ticket.features[1]}</li>
  <li>{ticket.features[2]}</li>
  <li>{ticket.features[3]}</li>
  <li>{ticket.features[3]}</li>
  <li>{ticket.features[4]}</li>
  <li>{ticket.features[5]}</li>
  <li>{ticket.features[6]}</li>
 </ul>
</div>


</>

  )
}

export default TicketDetails
