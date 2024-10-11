import './App.css';
import Navbar from './components/Navbar';
import Start from './components/Body/Start';
import Services from './components/Body/Services';
import Choose from './components/Body/WhyChooseUs';
import Callback from './components/Body/CallBack/Callback';
// import PopForm from './components/Pop-up Form/Popup';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';
function App() {
  return (
    <div className="App">
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <div className='middle'>
      <Start></Start>
      <Services></Services>
      <Choose></Choose>
      <Callback></Callback>
    {/* <PopForm></PopForm> */}
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
