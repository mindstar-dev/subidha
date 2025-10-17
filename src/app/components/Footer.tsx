import Image from "next/image";
import { logo_white } from "../../../public";

const Footer: React.FunctionComponent = () => {
  return (
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
  );
};

export default Footer