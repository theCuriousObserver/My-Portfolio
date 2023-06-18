import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './sections/Home';
import AboutMe from './sections/AboutMe';
import Resume from './sections/Resume';
import Skills from './sections/Skills';
import ContactMe from './sections/ContactMe';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <Home />
        <AboutMe />
        <Resume />
        <Skills />
        <ContactMe />
        {/* Other components go here */}
      </main>
    </div>
  );
}


export default App;
