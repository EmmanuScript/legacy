import Header from "../components/Header";
import Hero from "../components/Hero";
import InfoBar from "../components/InfoBar";
import Welcome from "../components/Welcome";
import DirectorMessage from "../components/DirectorMessage";
import Programs from "../components/Programs";
import QuickLinks from "../components/QuickLinks";
import WhyChooseUs from "../components/WhyChooseUs";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import News from "../components/News";
import FAQ from "../components/FAQ";
import Admissions from "../components/Admissions";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home">
      <Header />
      <Hero />
      <InfoBar />
      <Welcome />
      <DirectorMessage />
      <Programs />
      <QuickLinks />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <News />
      <FAQ />
      <Admissions />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
