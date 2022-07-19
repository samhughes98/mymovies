import './static/styles/style.css';
import { HomePage } from './components/homepage.js';
import { NavBar } from './components/navbar';
import { MovieList } from './components/movielist';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <MovieList />
    </div>
  );
}

export default App;
