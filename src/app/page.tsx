"use client";

import Image from "next/image";
import {
  barber_shop,
  hairdryer,
  img1,
  img2,
  img3,
  img4,
  img5,
  logo,
  logo_white,
  vacuum,
} from "../../public";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-[#F4F5FF]">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Logo" width={96} height={80} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#F4F5FF] px-6 py-10 flex flex-col md:flex-row items-center justify-between">
        <div className="w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Reliable <span className="text-[#283891]">Home Services</span> at
            Your Doorstep
          </h1>
          <p className="text-xl text-gray-700">
            We provide professional home service at a very friendly price. Easy
            service booking & scheduling. Get beauty parlor at your home and
            other grooming needs.
          </p>
        </div>
        <div className="flex gap-4 mt-6 md:mt-0 w-1/2 justify-end">
          <Image
            src={img3}
            alt="Facial"
            width={280}
            height={320}
            className="rounded-lg"
          />
          <div className="flex flex-col gap-4">
            <Image
              src={img4}
              alt="Cleaning"
              width={280}
              height={206}
              className="rounded-lg"
            />
            <Image
              src={img5}
              alt="Nail service"
              width={280}
              height={238}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* About Us */}
      <section
        id="about"
        className="px-6 py-16 bg-white flex flex-col md:flex-row justify-between items-center gap-8"
      >
        <div className="max-w-xl">
          <h2 className="text-5xl font-bold mb-4">About Us</h2>
          <p className="text-2xl text-gray-700">
            Subidha is a smart and simple solution for all your home service
            needs, proudly brought to you by SR Enterprise. Whether it's
            plumbing, electrical repairs, appliance servicing, home cleaning, or
            pest control – Subidha connects you with verified professionals at
            your convenience.
          </p>
        </div>
        <div className="flex gap-4">
          <Image
            src={img2}
            alt="Office Cleaning"
            width={305}
            height={296}
            className="rounded-lg"
          />
          <Image
            src={img1}
            alt="Salon"
            width={305}
            height={296}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Services */}
      <section className="bg-white px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 rounded-lg shadow-sm flex items-center justify-center flex-col gap-y-4">
            <Image
              src={hairdryer}
              alt="Salon"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <h3 className="font-semibold">Salon for Women</h3>
            <p className="text-sm text-gray-700">
              Step into a world of elegance and self-care designed exclusively
              for women.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-sm flex items-center justify-center flex-col gap-y-4">
            <Image
              src={barber_shop}
              alt="Salon"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <h3 className="font-semibold">Salon for Men</h3>
            <p className="text-sm text-gray-700">
              Step into a modern grooming experience tailored exclusively for
              men.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-sm flex items-center justify-center flex-col gap-y-4">
            <Image
              src={vacuum}
              alt="Salon"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <h3 className="font-semibold">Cleaning Service</h3>
            <p className="text-sm text-gray-700">
              We offer reliable and affordable residential and commercial
              cleaning services tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-[#1B2E8A] text-white px-6 py-10 flex flex-col md:flex-row justify-between"
      >
        <div className="mb-6 md:mb-0">
          <div className="flex items-center gap-2 mb-2">
            <Image src={logo_white} alt="Logo" width={163} height={134} />
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-2">Contact Us</h4>
          <p className="text-sm">
            Address: Khagragarh, Saraitikar, Burdwan 713104
          </p>
          <p className="text-sm">Phone: +91 7602572653</p>
          <p className="text-sm">Email: syedsamser@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}
