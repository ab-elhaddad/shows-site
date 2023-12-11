import Header from './components/Header.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailsPage from './pages/DetailsPage';
import MainContext from './context/MainContext';

const App = () => {
  return (
    <div className="App">
      <MainContext>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/movie/:id" element={<DetailsPage />} />
          </Routes>
        </BrowserRouter>
      </MainContext>
    </div>
  );
};

export default App;
