
import Head from "next/head"
import Image from "next/image"

export default function Home() {
  return (
  
    <>

    <Head>
      <title>Rajasthan Cotton Works</title>
    </Head>
    
    <div className=" h-28 w-screen bg-yellow-200 text-black flex justify-between items-center" >

      {/* First div containing the left side of navbar */}
      <div className="flex justify-items-start items-center">

        <div className=" mx-5 text-4xl font-bold hover:cursor-pointer" >Rajasthan Cotton Works</div>

        <ul className="flex flex-row" >
          <li className="list-none m-4 font-bold hover:cursor-pointer">About Us</li>
          <li className="list-none m-4 font-bold hover:cursor-pointer">Our Offerings</li>
          <li className="list-none m-4 font-bold hover:cursor-pointer">Store Locator</li>
          
        </ul>

      </div>

      {/* second div containing the right side of the navbar */}
      <div>

        <div className="flex flex-col mx-6">
          <p className="font-bold"> OWNER: Fakhruddin Khan </p>
           <p className="font-bold text-right">  Mobile No: 9891322991 </p>
        </div>

      </div>

    </div>

    {/* Working on the hero section from here */}
    <div className="w-screen h-[40rem] relative">

      {/* a different div to cater the heading */}
      <div className="  flex justify-center items-center">
        <p className="absolute font-extrabold text-7xl text-center mt-[16rem] ">
            Sleep Well, Live Better
          </p>
      </div>

      {/* Image used by using the image component in next */}
      <Image src="/blanket.jpg" fill="true" alt="Main image of the website" className="opacity-40 " />

    </div>
    
    </>
    
  )
}
