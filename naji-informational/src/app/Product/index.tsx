
import Image from 'next/image';

export default function Products() {
  return (
    <div className="bg-white flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold mb-8 text-center font-serif">Product</h1>
      <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12 max-w-6xl mx-auto">
        <div className="text-center w-4/5 lg:w-1/2">
          <p className="text-lg text-gray-700 text-start md:text-[24px] font-serif sm:text-xl ">
            PestGuard is a solution that assists coffee farmers in monitoring and
            managing pest populations. The service will provide immediate notifications
            about pest threats, along with actionable recommendations for targeted pest
            management strategies, helping farmers respond quickly to infestations.
          </p>
        </div>
        <div className="justify-center lg:w-1/2">
          <img 
            src="/images/box.png" 
            alt="PestGuard Device" 
            className="max-w-xs md:max-w-md mx-auto border border-gray-300 rounded-lg p-6  shadow" 
          />
        </div>
      </div>
    </div>
  );
}