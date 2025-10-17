import PrivacyPolicy from "./components/PrivacyPolic";
import OurServices from "./components/HoverServices";
import Footer from "./components/Footer";
import AboutUs from "./components/About";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";

export default async function Home() {
  const token = process.env.TOKEN;
  const url = process.env.ENDPOINT ?? "";

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  const services = data?.data?.services;

  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <AboutUs />
      <OurServices services={services} />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}
