import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import GenresMenu from './components/GenresMenu';
import ShowMovies from './components/ShowMovies';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <NavigationBar />
      <GenresMenu />
      <ShowMovies query="Harry Potter"/>
      <Footer/>
    </div>
  );
}

export default App;
