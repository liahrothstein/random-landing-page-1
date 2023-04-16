import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

import './App.css';

function App() {
  return (
    <section className="App">
      <Header />
      <div className="mainContainer">Here is nothing<br />Click on the Nav Bar</div>
      <Footer />
    </section>
  );
}

export default App;
