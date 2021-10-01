import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import GenresMenu from './components/GenresMenu';


function App() {
  return (
    <div>
      <NavigationBar />
      <GenresMenu />
    </div>
  );
}

export default App;
