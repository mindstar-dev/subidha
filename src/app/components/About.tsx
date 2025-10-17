import Image from "next/image";
import { img1, img2 } from "../../../public";

const AboutUs: React.FunctionComponent = () => {
  return (
    <section
      id="about"
      className="px-6 py-16 bg-white flex flex-col md:flex-row justify-between items-center gap-8"
    >
      <div className="max-w-xl">
        <h2 className="text-5xl font-bold mb-4">About Us</h2>
        <p className="text-2xl text-gray-700">
          Subidha is a smart and simple solution for all your home service
          needs, proudly brought to you by SR Enterprise. Whether it&apos;s
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
  );
};

export default AboutUs;
