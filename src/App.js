import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/reset.css';
import DefaultLayout from './components/layout/DefaultLayout';
import Paths from './constant/path';
import Main from './pages/main';
import Intro from './pages/intro';
import Faq from './pages/faq';
import Login from './pages/login';
import Mypage from './pages/mypage';
import Service from './pages/service';

function App() {
  return (
    <Router>
      <Routes>
          <Route path={Paths.main}  element={<Main />} />
          <Route path={Paths.intro} element={<Intro />} />
          <Route path={Paths.faq} element={<Faq />} />
          <Route path={Paths.login} element={<Login />} />
          <Route path={Paths.mypage} element={<Mypage />} />
          <Route path={Paths.service} element={<Service />} />
      </Routes>
    </Router>
  );
}


export default App;
