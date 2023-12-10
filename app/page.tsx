import Cards from '@/components/Cards';
import MaxWidthWrapper from '@/components/MaxwidthWrapper'
import { Button } from "@/components/ui/button"
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from 'next/link';

export default function Home() {
  return (
    <MaxWidthWrapper>
      
      <div className='text-4xl flex flex-col align-middle justify-center mt-28'>Beyond the Screen: Navigating the Coding Cosmos</div>

      <Link href={'/explore'}><Button variant="outline" className=' bg-indigo-500 text-white mt-4 p-4' >Explore <FaLongArrowAltRight/></Button></Link>

      <div className=' text-2xl mt-12 text-blue-400 shadow-sm'>Trending </div>


   <div className='lg:flex lg:flex-row m-12 lg:flex-wrap'> <Cards/>
    <Cards/>
    <Cards/>
    <Cards/></div>


    </MaxWidthWrapper>
  )
}
