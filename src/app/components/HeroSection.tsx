import Image from "next/image";
import { img3, img4, img5 } from "../../../public";

const HeroSection: React.FunctionComponent = () => {
  return (
    <section className="bg-[#F4F5FF] px-6 py-10 flex flex-col md:flex-row items-center justify-between">
      <div className="w-1/2">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Reliable <span className="text-[#283891]">Home Services</span> at Your
          Doorstep
        </h1>
        <p className="text-xl text-gray-700">
          We provide professional home service at a very friendly price. Easy
          service booking & scheduling. Get beauty parlor at your home and other
          grooming needs.
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
  );
};

export default HeroSection;
