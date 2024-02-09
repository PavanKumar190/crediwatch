import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import JsonTable from './Components/JsonTable';


function App() {
  return (
    <div className="App">
      <Header/>
<JsonTable/>
      <Footer/>
    </div>
  );
}

export default App;
