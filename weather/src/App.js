import './App.css';
import Main from './main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useMediaQuery from './components/useMediaQuery';


function App() {
  const matches = useMediaQuery('(min-width: 500px)')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={matches ? <Main device="pc" /> : <Main device="phone" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;





