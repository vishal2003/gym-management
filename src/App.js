import './App.css';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Plans from './Components/Plans/Plans';
import Program from './Components/Programs/Program';
import Register from './Components/Register/Register';
import Testimonal from './Components/Testimonals/Testimonal';
import Why from './Components/Why/Why';


function App() {
  return (
    <div className="App">
      <Hero/>
      <Program/>
      <Why></Why>
      <Plans></Plans>
      <Testimonal></Testimonal>
      <Footer></Footer>
      <Register></Register>
    </div>
  );
}

export default App;
