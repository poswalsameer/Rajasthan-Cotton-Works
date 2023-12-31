
import Head from "next/head"
import Image from "next/image"

export default function Home() {
  return (
  
    <>

    <Head>
      <title>Rajasthan Cotton Works</title>
    </Head>
    
    <div className=" h-28 w-full bg-[#FFF7D8] text-black flex justify-between items-center" >

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
    <div className="w-full h-[40rem] relative">

      {/* a different div to cater the heading */}
      <div className="  flex justify-center items-center">
        <p className="absolute font-extrabold text-7xl text-center mt-[16rem] ">
            Sleep Well, Live Better
          </p>
      </div>

      {/* Image used by using the image component in next */}
      <Image src="/blanket.jpg" fill="true" alt="Main image of the website" className="opacity-40 " />

    </div>

    {/* WORKING ON THE OUR OFFERING SECTION FROM HERE */}

    <div className="w-full h-[44rem] bg-[#FFFCF2] text-black font-semibold" >

      <br />
      <br />

      <p className="text-2xl text-center p-6 font-extrabold" >At our shop, we provide you with the best quality mattresses and other home accessories. We make mattresses and other accessories on order.</p>
      <p className="text-xl p-6 text-center">We also take orders on call just for the sake of customer's convenience.</p>

      <p className="text-xl p-6 text-center font-extrabold " >At our shop, you'll find:</p>

      <ul className="text-xl p-6 text-center">

        <li>Foam Mattressses</li>
        <li>Cotton Mattresses</li>
        <li>Bedsheets</li>
        <li>Pillows</li>
        <li>Cushions</li>
        <li>Quilts (Jaipuri quilts made on order)</li>
        <li>Plywood Foldings</li>
        <li>Plastic Niwar Foldings</li>
        <li>Green Net (For shadow purposes) </li>

      </ul>

      <p className="text-xl p-6 text-center ">All the listed items are available at our shop on very reasonable and competitive price as compared to the general market.</p>

      <br />
      <br />

    </div>


    {/* WORKING ON THE IMAGE GALLERY FROM THIS SECTION */}

    <div className="flex flex-col items-center bg-[#FFF7D8] w-full h-[80rem] " >

        <div className="text-black text-6xl font-extrabold m-16" >
          IMAGE GALLERY
        </div>

        {/* THIS GRID WILL WORK AS THE MAIN IMAGE GALLERY */}
        <div className=" m-3 w-full grid grid-rows-3 grid-cols-3 gap-y-12 justify-items-center items-center " >

            <Image src="/bedsheet.jpg" width={300} height={300} className="h-80 w-80 border-4 border-[#5C4033] rounded-xl " />
          
            <Image src="/folding.jpg" width={200} height={200} className="h-80 w-80 border-4 border-[#5C4033] rounded-xl" />
          
            <Image src="/folding2.jpg" width={200} height={200} className="h-80 w-80 border-4 border-[#5C4033] rounded-xl" />
          
            <Image src="/folding3.jpg" width={200} height={200} className="h-80 w-80 border-4 border-[#5C4033] rounded-xl" />
          
            <Image src="/mattress.jpg" width={200} height={200} className="h-80 w-80 border-4 border-[#5C4033] rounded-xl" />   
          
            <Image src="/mattress2.jpg" width={200} height={200} className="h-80 w-80 border-4 border-[#5C4033] rounded-xl" />
          
            <Image src="/mattress3.jpg" width={200} height={200} className="h-80 w-80 border-4 border-[#5C4033] rounded-xl" />
          
            <Image src="/rack.jpg" width={200} height={200} className="h-80 w-80 border-4 border-[#5C4033] rounded-xl" />
          
            <Image src="/wholeshop.jpg" width={200} height={200} className="h-80 w-80 border-4 border-[#5C4033] rounded-xl" />
          
        </div>

    </div>

    {/* WORKING ON THE STORE LOCATOR PART FROM HERE */}

    <div className="w-full h-[44rem] bg-[#FFFCF2] text-black font-semibold ">




    </div>
    
    </>
    
  )
}
