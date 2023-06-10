import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Home from './Home';
import AboutMe from './AboutMe';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <Home />
        <AboutMe />
        {/* Other components go here */}
      </main>
    </div>
  );
}


export default App;
