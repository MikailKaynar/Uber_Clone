import Header from "components/Header.js";
import Cards from "components/Cards";
import Footer from "components/Footer";
import HeroSection from "components/HeroSection";
import MobileApp from "components/MobileApp";
import About from "components/About.js";
function App() {
  return (
    <>
      <Header />
      <Cards />
      <HeroSection />
      <About/>
      <MobileApp />
      <Footer />
    </>
  );
}

export default App;
