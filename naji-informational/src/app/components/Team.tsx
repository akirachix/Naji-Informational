"use client";
import Image from 'next/image';

const features = [
  {
    title: "Faith Wanyoike",
    description: "Software Developer",
    icon: "/images/faith.jpg"
  },
  {
    title: "Cynthia Matsitsa",
    description: "Software Developer",
    icon: "/images/cynthia.jpg"
  },
  {
    title: "Stephanie Wangui",
    description: "Software Developer",
    icon: "/images/stephanie.jpg"
  },
  {
    title: "Esther Naserian",
    description: "Software Developer",
    icon: "/images/naserian.jpg"
  }
];

export default function Features() {
  return (
    <section className="py-10 bg-white text-black">
      <div className="max-w-[1280px] is:mb-8 mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold font-serif text-center -mt-12 mb-12">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center">
              <div className="mb-4 flex justify-center">
                <Image 
                  src={feature.icon} 
                  alt={feature.title} 
                  width={298} 
                  height={298} 
                  className='rounded-full'
                />
              </div>
              <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-bold font-serif mb-2">
                {feature.title}
              </h3>
              <p className="text-[20px] sm:text-[22px] lg:text-[25px] font-serif text-red-900 font-semibold">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}