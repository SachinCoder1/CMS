
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom'
// import ReadPost from './components/posts/ReadPost';
// import CreatePost from './components/posts/CreatePost';
// import UpdatePost from './components/posts/UpdatePost';
import React from 'react';
// import { Route, useHistory, Switch } from 'react-router-dom';
// import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
// import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
// import Login from './components/account/Login';
// import { oktaAuthConfig, oktaSignInConfig } from './config';
import ReadPost from './components/posts/ReadPost';
import CreatePost from './components/posts/CreatePost';
import UpdatePost from './components/posts/UpdatePost';
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/details/:id" element={<ReadPost />} />
          <Route exact path="/create" element={<CreatePost />} />
          <Route exact path="/update/:id" element={<UpdatePost />} />
        </Routes>
      </BrowserRouter>
    </>


  );
}

export default App;
