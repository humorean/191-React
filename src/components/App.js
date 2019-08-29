import React from 'react';
import Navigation from './Navigation';
import Gallery from './Gallery';
import Audition from './Audition';
import Footer from './Footer';
import Banner from './Banner'
import Home from './Home'
// import axios from 'axios';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component{

  render(){
    return (
      <div className="main-app">
        <BrowserRouter>
          <div className='container'>
            {/* <Banner /> */}
            <Navigation />
            <Route path='/' exact component={Home} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/audition' component={Audition} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
