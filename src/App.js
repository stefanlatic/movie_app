import './App.css';
import Navigation from './Templates/Snippets/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Templates/Snippets/Footer';
import Search from './Components/Search';
import { SearchProvider } from './Components/SearchContext';



const App = () =>  {
  return (
    <>
    <SearchProvider>
      <Navigation />
      <Search />
      <Footer />
    </SearchProvider>
    </>
  );
}

export default App;
