import './App.css';
import Header from '../components/header/header';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NewQuiz from '../components/newQuiz/newQuiz';
import Topic from '../components/topic/topic';
import Quiz from '../components/quiz/quiz';
import NewTopic from '../components/newVaccine/newVaccine';
import MainScreen from '../components/main/mainScreen';
import Vaccines from '../components/vaccines/vaccines';
import Treatments from '../components/treatments/treatments';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route path='/' element={<MainScreen />}/>
          <Route path='/vaccines' element={<Vaccines />} />
          <Route path='/treatments' element={<Treatments />} />
          <Route path='/add-new' element={<NewQuiz />} />
          <Route path='/topics/:topicId' element={<Topic />} />
          <Route path='/quizzes/:quizId' element={<Quiz />} />
          <Route path='/new-topic' element={<NewTopic />} />
          
        </Route>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
