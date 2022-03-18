import Landing from './pages/landing/landing';
import Navbar from './components/navbar-component/navbar-component';
import Header from './components/header-component/header-component';
import './index.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'



function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div className='main-container'><Navbar /><Landing /></div>} />
          <Route path='/login' element={<div>Login</div>} />
          <Route path='/services' element={<div className='main-container'><Navbar />Services</div>} />
          <Route path='/publications' element={<div className='main-container'><Navbar />Publications</div>} />
          <Route path='/knowledgebase' element={<div className='main-container'><Navbar />Knowledgebase</div>} />
          <Route path='/contact' element={<div className='main-container'><Navbar />Contact</div>} />
          <Route path='*' element={<h1>ERROR</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
