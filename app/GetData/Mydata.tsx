
import React from 'react'


async function getdata(){
    const res=await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json()
}
const Mydata = async() => {

    const setdata=await getdata()
  return (
    <>
    {setdata.map((data)=>(
        <div className='flex bg-blue-200 flex-col text-orange-500 border-y m-12' >Our Consumer name : <span className=' text-gray-700'>{data.name}</span>
        <div className='text-green-600'>email - {data.email}</div>
        <div className='text-black'> city - {data.address.city}</div>
        </div>
    ))}
    </>
  )
}

export default Mydata
