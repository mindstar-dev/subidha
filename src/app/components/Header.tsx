import Image from "next/image";
import { logo } from "../../../public";

const Header: React.FunctionComponent = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-[#F4F5FF]">
      <div className="flex items-center gap-2">
        <Image src={logo} alt="Logo" width={96} height={80} />
      </div>
    </header>
  );
};

export default Header;
