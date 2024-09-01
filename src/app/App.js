import './App.css';

//libraries
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CssBaseline from '@mui/material/CssBaseline'; // Импортируем CssBaseline
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

//redux
import { selectUsers } from '../features/users/usersSlice';
import { useSelector } from 'react-redux';


//components
import Header from '../components/header/header';

import MainScreen from '../components/main/mainScreen';
import Vaccines from '../components/vaccines/vaccines';
import Treatments from '../components/treatments/treatments';
import UserSettings from '../components/settings/userSettings';
import LoginPage from '../components/loginPage/loginPage';


function App() {

  const user = useSelector(selectUsers);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline /> {/* Добавляем CssBaseline */}
        {user.currentUser ?
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Header />}>
                <Route index element={<MainScreen />}/>
                <Route path='/vaccines' element={<Vaccines />} />
                <Route path='/treatments' element={<Treatments />} />
                <Route path='/settings' element={<UserSettings/>} />
                
              </Route>
            </Routes>
          </BrowserRouter> :
          <LoginPage />
        }
      </LocalizationProvider>
    </>
    
    
  );
}

export default App;
