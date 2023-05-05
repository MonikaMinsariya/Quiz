
import './App.css';

import React, { Component } from 'react'
import Registration from './Registration';
import SignIn from './SignIn';
import Home from './Home';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import Quiz from './Quiz';

export class App extends Component {
  render() {
    return (
      <div>
      
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Registration' element={<Registration />}></Route>
            <Route path='/SignIn' element={<SignIn />}></Route>
            <Route path='/Quiz' element={<Quiz/>}></Route>
            <Route path='/Welcome' element={<Welcome/>}></Route>
          </Routes>
        </BrowserRouter>
        
      </div>
    )
  }
}

export default App
