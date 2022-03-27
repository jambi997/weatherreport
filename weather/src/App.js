import logo from './logo.svg';
import './App.css';
import Main from './main';
import Chuck from './componenets/chuck';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Chuck" element={<Chuck />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;





