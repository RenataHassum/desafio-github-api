import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import HomeBody from './routes/Home/HomeBody';
import Search from './routes/Home/Search';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeBody />} />
            <Route path="/search" element={<Search />}>
              <Route path="/search/:loginGit" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
