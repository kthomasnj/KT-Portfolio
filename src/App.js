import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/portfolio';

function App() {
  const [page, setPage] = useState('about')
  return (
    <div className="App">
      <Nav setPage = {setPage} />
      {
        page === 'about'
          ? <About />
          : <Portfolio />
      }
    </div>
  );
}

export default App;