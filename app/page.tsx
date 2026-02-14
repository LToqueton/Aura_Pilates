import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Schedule from "@/components/Schedule";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Testimonials />
      <Schedule />
      <Location />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
