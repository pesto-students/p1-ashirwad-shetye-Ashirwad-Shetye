import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import UrlInput from './components/urlInput';
import Footer from './components/footer';
import Result from './components/result';


function App() {

  const [ inputValue, setInputValue ] = React.useState<string>("");

  return (
    <div>
      <Navigation />
      <UrlInput setInputValue={setInputValue} inputValue={inputValue}/>
      <Footer />
    </div>
  );
}

export default App;
