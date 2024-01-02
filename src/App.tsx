import Footer from './Components/Footer/Footer';
import Home from './Components/Sections/Home/Home';
import Text from './Components/Sections/Text/Text';

import './styles/app.sass';
import About from './Components/Sections/About/About';
import Description from './Components/Sections/Description/Description';
import Whatsapp from './Components/Whatsapp/Whatsapp';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* <Whatsapp/> */}
      <Header/>
      <Home/>
      {/* <About/>
      <Text/>
      <Description/> */}
      <Footer/>
    </div>
  );
}

export default App;