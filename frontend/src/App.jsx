import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Sale from './components/Sale';
import Scroll from './components/Scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutPage from './components/AboutPage';
import Infra from './components/Infra';
import Fablabs from './components/Fablabs';
import Contact from './components/Contact';
import DataFetcher from './components/DataFetcher';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Homeblog from './components/Homeblog';
import Eachblog from './components/Eachblog';
import Blog1 from './components/Blog1';
import StartupPage from './components/StartupPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [auth, setAuth] = useState('');

  return (
    <Router>
        <ScrollToTop />
      <div>
        <Routes>

          <Route path="/" element={<Scroll />} />
          <Route path="/coworking-space" element={<Sale />} />
          <Route path="/amenities" element={<Infra />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/fablabs" element={<Fablabs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/startups" element={<StartupPage />} />
          <Route path="/blog" element={<Homeblog />} />
          <Route path="/blog/:id" element={<Eachblog />} />
          <Route path="/signin" element={<Signin setAuth={setAuth} />} />
          <Route path="/signup" element={<Signup />} />
         
          <Route path="/blog1" element={
            <ProtectedRoute auth={auth}>
              <PageLayout auth={auth} setAuth={setAuth} />
              <Blog1 />
              <Footer />
            </ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute auth={auth}>
              <PageLayout auth={auth} setAuth={setAuth} />
              <DataFetcher />
              <Footer />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

const ProtectedRoute = ({ auth, children }) => {
  if (auth) {
    return children;
  } else {
    return <Navigate to="/signin" />;
  }
};

const PageLayout = ({ auth, setAuth }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth('');
    localStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <>
      <NavBar auth={auth} handleLogout={handleLogout} />
      
     
    </>
  );
};
