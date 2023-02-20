import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import InitialSurvey from './components/InitialSurvey';
import MainPage from './components/MainPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<MainPage />} />
          <Route path='/initial-survey' element={<InitialSurvey />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
