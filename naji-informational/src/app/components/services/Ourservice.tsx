import React from 'react';

const Ourservice = () => {
  return (
    <div  id="services"className="container mx-auto px-4 py-12">
      <h1 className="text-[30px] sm:text-5xl font-bold text-center mb-16 text-black font-serif">Our Services</h1>
      
      <div className="grid lg:grid-cols-2 gap-12 px-4 md:px-8 lg:px-16">
        {[
          {
            title: "Early Detection System",
            content: "Utilizing advanced image processing and machine learning algorithms, the service will enable farmers to accurately identify pest infestations in their coffee crops."
          },
          {
            title: "Integrated Pest Management",
            content: "Offering guidance on sustainable pest management practices that combine biological, cultural, physical, and chemical methods, ensuring farmers can manage pests effectively while minimizing environmental impact."
          },
          {
            title: "Real-Time Alerts",
            content: "The service will provide immediate notifications about pest threats, along with actionable recommendations for targeted pest management strategies, helping farmers respond quickly to infestations."
          },
          {
            title: "Data Tracking and Analysis",
            content: "The application will track pest populations over time, providing insights into trends and potential outbreaks, which will help farmers make informed decisions based on historical data."
          }
        ].map((service, index) => (
          <div key={index} className="flex justify-center">
            <div className="bg-red-950 p-6 rounded-3xl w-[90%] h-[105%] sp:w-[50%]">
              <h2 className="text-[30px] sm:text-3xl font-semibold mb-4 text-white font-serif text-left">{service.title}</h2>
              <p className="text-white text-[9[px] md:text-2xl md: sm:text-lg font-serif text-left leading-relaxed">
                {service.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ourservice;