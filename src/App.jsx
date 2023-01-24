import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import PageNotFound from './pages/PageNotFound';
import About from './pages/About';
import Navbar from './pages/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Route>
        <Route path='/*' element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
