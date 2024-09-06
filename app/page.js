'use client'
import Navbar from "./component/Navbar";
import Link from 'next/link'; 
import Footer from './component/Footer'
export default function Home() {
  return (
    <div className="bg-[#D1CAC2]  w-full">
      {/**homepage whole */}
      <Navbar />
      <div className="min-h-screen text-black bg-slate-100 mx-6 sm:mx-2 md:mx-6 lg:mx-8 xl:mx-auto max-w-7xl border-4 p-2 sm:p-4 lg:p-6 xl:p-8 text-center">  {/**content whole */}
        <div>{/**headBanner  */}
          <div className="text-[22px] font-bold italic tracking-wide">
            {/* <h2 className="italic underline text-indigo-200 font-bold tracking-widest">Hanz</h2> */}
            <h1>`Your Premier All-In-One Home 🏡 Solutions Provider`</h1>
            </div>
        </div>{/**headBanner  */}
        {/* <div className="flex justify-center">
      <Link href='/Booking' className=" p-3 flex justify-center bg-green-200 rounded-xl shadow-xl font-bold w-1/3  m-3 duration-200 hover:bg-green-400 hover:text-green-100 hover:font-extrabold" > "BOOK TODAY" </Link>
      </div> */}

<div className="bouncing-div flex justify-center items-center my-4 sm:my-6 lg:my-8">
    <Link
        href="/Booking"
        className="bg-gradient-to-r from-teal-200 via-slate-200 to-amber-400 p-3 w-full max-w-md rounded-xl shadow-2xl font-bold duration-200 hover:bg-green-400 hover:text-green-100 hover:font-extrabold"
    >
        <span className="block text-center">BOOK TODAY</span>
    </Link>
</div>
        <div className="m-3">{/**text content  */}
          <p className="text-[24px] leading-relaxed italic tracking-wide noto-sans-indic">In today's fast-paced world, managing property maintenance and home care needs can be a daunting task for homeowners. Fortunately, We offer seamless solutions with Our comprehensive range of home services. From landscaping and Handy-Man needs to thorough cleaning and hassle-free moving, Hanz is your go-to platform for all-in-one home solutions. We ensure every service is delivered with unmatched quality and a personal touch.</p>
          <h2 className="font-bold text-[22px] mt-2 underline"> <a href="https://www.hanzhomesolutions.com/landscaping">Transform Your Outdoors with Hanz Landscaping</a></h2>
          <img className=' float-right w-48 h-44 object-cover mx-auto ml-4 my-2 border-2 border-black rounded' src='https://img.freepik.com/free-photo/unrecognizable-man-psushing-wheelbarrow-full-seedling_329181-20532.jpg?t=st=1710693774~exp=1710697374~hmac=c24e0cf1561ec782642004107a10258b4b92a064543fe993fd79e551d4aadb31&w=2000'/>
          <p className="font-light text-[24px] text-p[18px]  tracking-tight noto-znamenny">Envisioning a beautiful garden or a customized outdoor living space? Look no further than Hanz for your landscaping needs. Our skilled local providers excel at a range of services, including mowing lawns, trimming trees, planting, mulching, and more. Let us help your outdoor space flourish. Explore our Landscaping page to learn how we can bring your vision to life.</p>
          <h2 className="font-bold text-[22px] mt-2 underline"><a href="https://www.hanzhomesolutions.com/GeneralContract">Build Your Vision with Hanz Handy-Man Experts</a></h2>
          <p className="font-light text-p[18px]  text-[24px]  tracking-tight noto-znamenny">From minor repairs to transforming your space, Hanz's handyman services are here to meet your needs with attention to detail. Our skilled local workers handle tasks such as painting, door and window repairs, drywall patching, minor plumbing, and hanging and mounting. Visit our Handyman page to see how we can enhance your home</p>
          <h2 className="font-bold text-[22px] mt-2 underline"><a href="https://www.hanzhomesolutions.com/Cleaning">Keep Your Home Spotless with Hanz Cleaning Services</a></h2>
          <img className='float-left w-48 h-40 object-cover mx-3 my-2 border-2 border-black rounded' src='https://img.freepik.com/free-photo/professional-cleaning-service-people-working-together-office_23-2150520596.jpg?t=st=1710694272~exp=1710697872~hmac=a293b65938a76b19a3acb69f9f6b6465c0a56f886be9bbc69b04b43db0702852&w=2000'/>
          <p className="font-light text-p[18px] text-[24px]  tracking-tight noto-znamenny">Keeping your home clean is a breeze with Hanz's cleaning services. Our dedicated team handles everything from routine upkeep to deep cleaning, ensuring your home remains spotless and inviting. Learn more about our comprehensive cleaning solutions on our Cleaning page and let us help you maintain a clean and comfortable home.</p>
          <h2 className="font-bold text-[22px] mt-2 underline"><a href="https://www.hanzhomesolutions.com/Moving">Move with Confidence with Hanz Moving Services</a></h2>
          <p className="font-light text-p[18px]  text-[24px] tracking-tight noto-znamenny">Moving doesn't have to be a hassle when you choose Hanz. Our experienced movers take care of every detail, from loading and unloading to organizing and setting up in your new space. Visit our Moving page to discover how we can make your transition smooth and stress-free.</p>
        </div>{/**text content  */}
        <div className="flex justify-end gap-4">
      <table className="border-4 border-black m-4">{/**Table */}
        <thead>
          <tr className="border-4 border-black">
            <th className="border-r-4 border-black">Services</th>
            <th>Results</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-4 border-black">
            <td className="border-r-4 border-black">Landscaping</td>
            <td>Transform your outdoor space into a personal oasis with Hanz's landscaping services.</td>
          </tr>
          <tr className="border-4 border-black">
            <td className="border-r-4 border-black">Handy-Man</td>
            <td>Turn your home improvement and renovation ideas into reality with precision and passion.</td>
          </tr>
          <tr className="border-4 border-black">
            <td className="border-r-4 border-black">Cleaning </td>
            <td>Experience a cleaner, fresher home without lifting a finger.</td>
          </tr>
          <tr className="border-4 border-black">
            <td className="border-r-4 border-black">Moving </td>
            <td>Relocate with ease and efficiency, thanks to Hanz's expert moving solutions.</td>
          </tr>
        </tbody>
      </table>{/**Table */}
    </div>
        <div className="p-2 m-4 space-y-4">
        <p  className="font-light text-p[18px] tracking-tight text-[24px] noto-znamenny italic">"At Hanz, we connect you with reliable local providers for your home maintenance and improvement projects. Our platform bridges the gap between you and the skilled services you need, offering quality, efficiency, and satisfaction. Trust Hanz to handle your property care so you can focus on enjoying your home to the fullest."</p>
        <img className='w-52 h-48 object-cover  my-2 border-2 float-right   border-black rounded  ' src='https://img.freepik.com/free-photo/husband-wife-moving-new-apartment-together-unpacking-furniture-decorate-household-enjoying-relocation-after-buying-first-house-start-new-beginnings-celebrate-life-event_482257-49831.jpg?t=st=1710694409~exp=1710698009~hmac=55369a1b6542e48bcbbf2ddb3f84ab116557727bbda05370207c26a8d0d6e2cf&w=996'/>
          <p  className="font-light text-p[18px] tracking-tight text-[24px] noto-znamenny italic ">"Explore how Hanz can simplify your home maintenance and improvement tasks today. Let us be your partner in creating a home that reflects your style and meets your needs."</p>
        </div>
        <div className="bouncing-div flex justify-center items-center my-4 sm:my-6 lg:my-8">
    <Link
        href="/Booking"
        className="bg-gradient-to-r from-teal-200 via-slate-200 to-amber-400 p-3 w-full max-w-md rounded-xl shadow-2xl font-bold duration-200 hover:bg-green-400 hover:text-green-100 hover:font-extrabold"
    >
        <span className="block text-center">BOOK TODAY</span>
    </Link>
</div>
      </div>
      {/**homepage whole */}
      <Footer />
    </div>
  );
}
