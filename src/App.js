import { useState, useEffect } from "react";
import { getImages } from './services/imagesService'

import List from './components/List'
import Search from './components/Search'

import './App.css';

function App() {

  function filter (text) {
    getImages(text)
      .then(res => {
        setImages(res)
      })
      .catch(err => setImages([]))
  }

  const [images, setImages] = useState([])

  useEffect(() => {
    getImages()
      .then(res => {
        setImages(res)
      })
      .catch(err => setImages([]))
  }, [])

  return (
    <div className="app">
      <header className="app-header">
        <img src='https://www.univision.com/_next/static/images/logo-univision-color.49f6b4c4450cea582fa78cbc00dee7d8.svg' className="app-logo" alt="logo" />
      </header>
      <main className="app-body">
        <Search filter={filter} />
        <div className='list-wrapper'>
          <List { ...{images, maxNumberPerPage: 5} } />
        </div>
      </main>
    </div>
  );
}

export default App;
