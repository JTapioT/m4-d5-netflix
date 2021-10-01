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
      <ShowMovies searchBar="true" query="Harry Potter" />
      <ShowMovies searchBar="false" query="Lord of The Rings" />
      <ShowMovies searchBar="false" query="Star Wars" />
      <Footer />
    </div>
  );
}

export default App;
