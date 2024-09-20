import Image from 'next/image';

export default function About() {
return (
<div >
<section id='about' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:text-[36px] ">
<h1 className="text-6xl font-semibold text-center mb-12 font-serif">About Us</h1>
<div className="grid grid-cols-1 is:px-6  lg:grid-cols-3  bg-white-400 gap-8  sm:justify-center items-center md:justify-center " >
<div className="bg-white p-10 rounded-lg shadow-2xl shadow-gray-385 text-center md:shadow-2xl shadow-gray-385 ">
<div className="mb-6">
<Image
src="/images/mission.png"
alt="Mission Icon"
width={100}
height={100}
className="mx-auto"
 />
</div>
<h2 className="text-2xl font-bold mb-4 md:text-4xl">Our Mission</h2>
<p className="text-gray-700 text-base text-left md:text-[24px] font-serif ">
To empower small-scale coffee farmers in Kenya by providing innovative, accessible, and affordable pest detection and management.
</p>
</div>
<div className="bg-white p-10 rounded-lg shadow-2xl text-center  ">
 <div className="mb-6">
<Image
src="/images/value.png"
alt="Values Icon"
width={100}
height={100}
className="mx-auto"
 />
 </div>
<h2 className="text-2xl font-bold mb-4 md:text-4xl">Our Values</h2>
 <p className="text-gray-700 text-base text-left md:text-[24px] font-serif ">
Integrity guides our actions, ensuring that our efforts are transparent, accountable, and focused on delivering real impact in the communities we serve.
</p>
</div>
<div className="bg-white p-7 rounded-lg shadow-2xl text-center">
<div className="mb-6">
<Image
src="/images/vision.png"
alt="Vision Icon"
width={100}
height={100}
className="mx-auto rounded-full" 
/>
</div>
<h2 className="text-2xl font-bold mb-4 font-serif md:text-4xl">Our Vision</h2>
<p className="text-gray-700 text-base  font-serif text-left md:text-[24px]">
To be a leading force in transforming pest management practices for smallholder coffee farmers in Kenya.
</p>
</div>
</div>
</section>
</div>
 );
}
