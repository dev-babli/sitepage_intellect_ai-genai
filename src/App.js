import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ServicesSection from "./components/ServicesSection"
import FeaturesSection from "./components/FeaturesSection"
import PartnershipsSection from "./components/PartnershipsSection"
import ContactSection from "./components/ContactSection"

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <PartnershipsSection />
      <ContactSection />
    </div>
  )
}

export default App
