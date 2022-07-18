import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Banner } from './components/Banner/Banner';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/ProjectDashboard/Projects';
import { ContactForm } from './components/ContactForm/ContactForm';
import { Footer } from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
