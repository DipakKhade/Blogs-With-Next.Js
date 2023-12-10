import React from 'react'
import Image from 'next/image'
import nextjslogo from '../_localdata/nextjslogo.png'
import Link from 'next/link'
const imglink=[
 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTo16cvJrw15AhXcRZWrFmXG9tkZBIhb31EaaHB_GynaJPDVA4LIUj7ZpOcIESN-_muxw&usqp=CAU'
  
]
const Cards = () => {
  return (
  <>
<div className=' items-center align-middle'>
<div className="card card-compact w-[300px] bg-base-100 shadow-xl mr-8">
  <figure> <Image
      src= {nextjslogo}
      width={200}
      height={200}
      alt="Picture of the author"
      quality={100}
    /></figure>
  <div className="card-body">
    <h2 className="card-title">Next js</h2>
    <p> The React Framework for Production - Seamless SSR, Zero Configuration, and Ultimate Developer Experience</p>
    <div className="card-actions justify-end">


    <button className="btn btn-info"><Link href="https://nextjs.org/docs">Visit docs</Link></button>
    </div>
  </div>
</div></div></>
  )
}

export default Cards
