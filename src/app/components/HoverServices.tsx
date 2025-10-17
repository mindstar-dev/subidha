
import { Service } from "@/types/services";
import React from "react";

interface OurServicesProps{
  services: Service[]
}

const OurServices: React.FunctionComponent<OurServicesProps> = ({services}) => {
  return (
    <section className="bg-white px-6 py-16 text-center">
      <h2 className="text-5xl font-bold mb-8">Our Services</h2>
      <div className="w-full flex items-center justify-center p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {services.map((service) => (
            <div
              key={service._id}
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              {/* Background image */}
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay text */}
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-2xl font-bold mb-2">{service.name}</h2>
                <p className="text-gray-200 max-w-xs">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
