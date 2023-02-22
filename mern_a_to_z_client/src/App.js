import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemUpload from './components/ItemUpload'
import InitialSurvey from './components/InitialSurvey';
import MainPage from './components/MainPage';
import MyCloset from './components/MyCloset';
import Suggestions from './components/Suggestions';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<MainPage />} />
          <Route path='/initial-survey' element={<InitialSurvey />} />
          <Route path='/upload-item' element={<ItemUpload />} />
          <Route path='/my-closet' element={<MyCloset />} />
          <Route path='/suggestions' element={<Suggestions />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
