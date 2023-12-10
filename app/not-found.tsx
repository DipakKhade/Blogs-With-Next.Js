import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='m-4 p-4'>
      <h2 className='text-blue-600'>Page Not Found</h2>
      <p className='m-4'>Could not find requested resource</p>
      <Link href="/" className=' border bg-slate-500 text-black p-2'>Return to Home</Link>
    </div>
  )
}