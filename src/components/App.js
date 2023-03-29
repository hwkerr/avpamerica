// import './App.css';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AVPNavbar from './navbar/AVPNavbar';

const DEFAULT_USER = {
  first: "Harrison",
  last: "Kerr"
};

function App() {
  const [user, setUser] = useState(DEFAULT_USER);

  return (
    <div className="App">
      <header>
        <AVPNavbar user={user} onLoginDefault={() => setUser(DEFAULT_USER)} onLogout={() => setUser(null)} />
      </header>
      <Outlet context={user}/>
      <footer>
        <hr />
        <p>This is my updated version of the avpamerica website</p>
      </footer>
    </div>
  );
}

export default App;
