import './App.css';

//libraries
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CssBaseline from '@mui/material/CssBaseline'; // Импортируем CssBaseline
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


//components
import Header from '../components/header/header';

import MainScreen from '../components/main/mainScreen';
import Vaccines from '../components/vaccines/vaccines';
import Treatments from '../components/treatments/treatments';
import UserSettings from '../components/settings/userSettings';


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
            <Route path='/settings' element={<UserSettings />} /> 
          </Route>
        </Routes>
    </BrowserRouter> 
    </LocalizationProvider>
    
  );
}

export default App;
