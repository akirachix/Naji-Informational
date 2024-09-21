"use client";

export default function Landingpage() {
  return (
    <main id="Home" className="relative w-full h-screen mt-30">
    
      <img
        src="/images/background.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-black/50"></div>

      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white font-serif">
          Early Detection of Pests, High Quality
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-white font-serif">
          And Rapid Growth of Coffee
        </h2>
        <button className="bg-white text-black px-6 py-3 rounded-bl-2xl hover:bg-gray-200 text-lg md:text-xl lg:text-3xl font-serif rounded-tr-2xl rounded-tl-2xl rounded-br-2xl font-bold mt-10">
          Get Demo
        </button>
      </div>
    </main>
  );
}