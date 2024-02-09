import Image from "next/image";
import PresentationSection from "./components/PresentationSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[black]">
      <NavBar/>
      <div className="container mt-24 mx-auto px-12 py-16">
        <PresentationSection></PresentationSection>
        <AboutSection/>
        <ServiceSection/>
        <EmailSection/>
      </div>
      <Footer />
    </main>
  );
}
