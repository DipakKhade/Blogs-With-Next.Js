
import { promises } from 'dns'
import { notFound } from 'next/navigation'
import React from 'react'
import { IoMdKey } from "react-icons/io";
export const dynamicparams = true

export async function generateStaticParams(){

  const res=await fetch('http://localhost:4000/tickets')

  const tickets=await res.json()

  return tickets.map((ticket)=>{
    id:ticket.id
  })
}


async function getTicket(id:string) {
  // await new Promise(resolve=>setTimeout(resolve,2000))

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
  <h4 className='text-black m-4 flex p-2'>Key Features <IoMdKey /></h4>
<ul className='p-4 bg-teal-300 text-black'>
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

<div className=' flex flex-col m-4 p-4'>
<div className=' text-black'>{ticket.usage_examples[0]}</div>
<div>{ticket.usage_examples[1]}</div>
<div className=' text-black'>{ticket.usage_examples[2]}</div>
<div>{ticket.usage_examples[3]}</div>
</div>


</>

  )
}

export default TicketDetails
