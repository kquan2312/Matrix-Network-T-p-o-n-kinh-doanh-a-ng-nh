import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Ecosystem from "./components/Ecosystem";
import Services from "./components/Services";
import Network from "./components/Network";
import Process from "./components/Process";
import WhyMatrix from "./components/WhyMatrix";
import CaseStudies from "./components/CaseStudies";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { LanguageProvider } from "./i18n";

export default function App() {
  return (
    <LanguageProvider>
      <div className="site-shell">
        <Navbar />
        <main id="top">
          <Hero />
          <Introduction />
          <Ecosystem />
          <Services />
          <Network />
          <Process />
          <WhyMatrix />
          <CaseStudies />
          <CTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}