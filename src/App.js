import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import GenresMenu from './components/GenresMenu';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <NavigationBar />
      <GenresMenu />
      <Footer/>
    </div>
  );
}

export default App;
