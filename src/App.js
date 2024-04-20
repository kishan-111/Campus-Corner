import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PATH_ABOUT, PATH_BOOKS, PATH_CONTACT, PATH_NOTES, PATH_PYQs } from './constants/contants';
import PageNOtFound from './pages/404';
import Books from './pages/Books';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Notes from './pages/Notes';
import PYQ from './pages/PYQ';
import Layout from './pages/Layout';
import About from './pages/About';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={PATH_BOOKS} element={<Books />} />
          <Route path={PATH_PYQs} element={<PYQ />} />
          <Route path={PATH_NOTES} element={<Notes />} />
          <Route path={PATH_CONTACT} element={<Contact />} />
          <Route path={PATH_ABOUT} element={<About />} />
          <Route path="*" element={<PageNOtFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
