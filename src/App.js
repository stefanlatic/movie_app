import logo from './logo.svg';
import './App.css';
import Navigation from './Templates/Snippets/Navigation';
import Movies from './Components/Movies';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Templates/Snippets/Footer';



function App() {
  return (
    <>
    <Navigation />
    <Movies />
    <Footer />
    </>
  );
}

export default App;
