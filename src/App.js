import './App.css';
import NavbarComponent from './components/NavComponent/NavbarComponent';
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Achievements from './components/Achievements/Achivements'
import Footer from './components/Footer/Footer'
import Playstore from './components/Playstore/Playstore'
import Events from './components/Events/Events'
function App() {
  return (
    <div className = "App">
      <NavbarComponent/>
      <Hero/>
      <Features/>
      <Achievements/>
      <Events/>
      <Playstore/>
      <Footer/>
    </div>
  );
}

export default App;
