import './App.css';

//libraries
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CssBaseline from '@mui/material/CssBaseline'; // Импортируем CssBaseline


//components
import Header from '../components/header/header';
import NewFleaTreatment from '../components/newFleaTreatment/newFleaTreatment';
import Topic from '../components/topic/topic';
import Quiz from '../components/quiz/quiz';
import MainScreen from '../components/main/mainScreen';
import Vaccines from '../components/vaccines/vaccines';
import Treatments from '../components/treatments/treatments';


function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CssBaseline /> {/* Добавляем CssBaseline */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<MainScreen />}/>
            <Route path='/vaccines' element={<Vaccines />} />
            <Route path='/treatments' element={<Treatments />} />
            <Route path='/add-new' element={<NewFleaTreatment />} />
            <Route path='/topics/:topicId' element={<Topic />} />
            <Route path='/quizzes/:quizId' element={<Quiz />} />
            
          </Route>
        </Routes>
    </BrowserRouter> 
    </LocalizationProvider>
    
  );
}

export default App;
