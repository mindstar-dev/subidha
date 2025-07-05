import Image from "next/image";
import logo from '../../public/Subidha-logo.jpg'
export default function Home() {
  return (
    <div className="image">
        <Image alt="" src={logo} className="w-screen h-screen"/>
    </div>
  );
}
