// import './App.css';
import { Outlet } from 'react-router-dom';
import AVPNavbar from './navbar/AVPNavbar';

function App() {
  return (
    <div className="App">
      <header>
        <AVPNavbar />
      </header>
      <Outlet />
      <footer>
        <hr />
        <p>This is my updated version of the avpamerica website</p>
      </footer>
    </div>
  );
}

export default App;
