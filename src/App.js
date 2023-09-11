import React, {useState } from 'react';
import './App.css';
import News from './components/News';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  let pages = 16;
  // state={
  //   progress:0
  // }
  const [progress, setProgess] = useState(0);

  // setProgress=(progress)=>{
  //   this.setState({progress:progress})
  //   console.log(process.env.REACT_APP_NEWS_APIKEY)

  // }
  const setProgressFunc=(progress)=>{
    setProgess(progress);
  }
  return (
    <>
      <Router>
        <Navbar />

        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
        />

        <Routes>
          <Route exact path='/' element={<News key="general" setProgress={setProgressFunc} pages={pages} country="us" category="general" />} />
          <Route exact path='/business' element={<News key="business" setProgress={setProgressFunc} pages={pages} country="us" category="business" />} />
          <Route exact path='/entertainment' element={<News key="entertainment" setProgress={setProgressFunc} pages={pages} country="us" category="entertainment" />} />
          <Route exact path='/health' element={<News key="health" setProgress={setProgressFunc} pages={pages} country="us" category="health" />} />
          <Route exact path='/sports' element={<News key="sports" setProgress={setProgressFunc} pages={pages} country="us" category="sports" />} />
          <Route exact path='/technology' element={<News key="technology" setProgress={setProgressFunc} pages={pages} country="us" category="technology" />} />
        </Routes>
      </Router>

    </>
  )
}

export default App;

