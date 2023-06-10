import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Home from './Home';
import AboutMe from './AboutMe';
import Resume from './Resume';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <Home />
        <AboutMe />
        <Resume />
        {/* Other components go here */}
      </main>
    </div>
  );
}


export default App;
