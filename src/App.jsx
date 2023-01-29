import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import PageNotFound from './pages/PageNotFound';
import About from './pages/About';
import Navbar from './pages/Navbar';
// import Blogs from './pages/Blogs';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />}></Route>
          {/* <Route path='/blogs' element={<Blogs />}></Route> */}
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Route>
        <Route path='/*' element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
