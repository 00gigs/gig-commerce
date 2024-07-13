import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const page = () => {
  return (
    <div className="bg-slate-100 w-screen min-h-screen ">
      <Navbar/>
      <div className='text-black text-center'>
        <h1 className='mt-2 opacity-40'>ABOUT PAGE</h1>
      <div className='mt-3 flex justify-end mr-5'>{/**headBanner  */}
      <div className='flex items-center gap-2'>
      <p className="italic underline bg-clip-text text-transparent bg-gradient-to-l from-teal-200 via-slate-200 to-amber-200  font-bold tracking-widest">Hanz</p> -
      </div>
          <h1 className=" flex text-[22px] font-bold italic tracking-wide"> "Bringing Homes and Hearts Together"</h1>
        </div>{/**headBanner  */}
        <div className="m-3">{/**text content  */}
        <p className='m-4 font-extrabold text-[22px]  underline'>Where the Journey Began</p>
          <p className="font-medium text-[25px] italic  leading-relaxed tracking-wide noto-sans-indic">In the heart of 2024, a family with a vision to transform the way home services are delivered founded Hanz. Rooted in the Northeast region, we embarked on a mission not just to offer unparalleled home maintenance and improvement services, but to knit the very fabric of the community closer together. Hanz is more than a company; it's a family-owned and operated beacon for those seeking to enhance their living spaces while fostering community ties.</p>
          <h1 className="font-extrabold underline text-[22px] mt-2 ">Our Mission</h1>
        
          <p className="font-light text-[24px] leading-10  text-p[18px] tracking-tight my-3 noto-znamenny">At Hanz, we believe in the power of home. It's not just a place but it's where the heart finds peace, comfort, and belonging. Our mission is twofold: to provide top-tier, all-in-one solutions for every home need, from landscaping and Handy-Man needs to cleaning and moving, and to use our business as a platform for bringing the community together.</p>
          <h1 className="font-extrabold underline text-[24px]  leading-10 mt-2 ">A Family at Your Service</h1>
          <p className="font-light text-p[18px] text-[24px]  leading-10  tracking-tight my-3 noto-znamenny">Being family-owned and operated, we infuse every interaction with personal touch and warmth. Each member of the Hanz family shares a common vision – to exceed your expectations not just through the quality of our work, but through the depth of our relationships. We treat every home as if it were our own, ensuring that every project is handled with the utmost care and professionalism.</p>
          <h1 className="font-extrabold underline text-[24px]  leading-10 mt-2 ">Community at the Core</h1>
         
          <p className="font-light text-p[18px] text-[24px]  leading-10  tracking-tight my-3 noto-znamenny">Our commitment extends beyond the boundaries of individual homes. Hanz is dedicated to creating stronger, more vibrant communities. Through various initiatives and partnerships, we aim to bring people together, fostering a sense of unity and shared purpose. Whether it's through community service projects, supporting local events, or simply lending a helping hand to a neighbor in need, Hanz is here to build more than just homes , we're here to build a legacy of cooperative communities.</p>
          <h1 className="font-extrabold underline text-[24px]  leading-10 mt-2 ">Looking Ahead</h1>
          <p className="font-light text-p[18px] text-[24px]  leading-10  tracking-tight noto-znamenny">As we continue to grow and serve more families across the Northeast, our pledge remains the same: to provide exceptional home services while enriching the community fabric. The future is bright with Hanz, as we continue to innovate, expand, and deepen our community roots.</p>
        </div>{/**text content  */}
        <div className="p-2 m-4 space-y-4">
          <p  className="font-light text-p[18px] text-[24px]  leading-10  tracking-tight noto-znamenny">At Hanz, your home is our passion, and your community is our family. Join us in this journey of transformation, and let's create spaces that inspire, comfort, and bring us all closer together.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page
