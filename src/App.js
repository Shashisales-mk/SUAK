import './App.css';
import Navbar from './components/Navbar';
import Start from './components/Body/Start';
import Services from './components/Body/Services';
import Choose from './components/Body/WhyChooseUs';
import Callback from './components/Body/CallBack/Callback';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='middle'>
      <Start></Start>
      <Services></Services>
      <Choose></Choose>
      <Callback></Callback>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
