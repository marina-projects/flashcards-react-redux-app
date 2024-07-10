import './App.css';
import Header from '../components/header/header';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Topics from '../components/topics/topics';
import Quizzes from '../components/quizzes/quizzes';
import NewQuiz from '../components/newQuiz/newQuiz';
import Topic from '../components/topic/topic';
import Quiz from '../components/quiz/quiz';
import NewTopic from '../components/newTopic/newTopic';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route path='/topics' element={<Topics />} />
          <Route path='/quizzes' element={<Quizzes />} />
          <Route path='/new-quiz' element={<NewQuiz />} />
          <Route path='/topics/:topicId' element={<Topic />} />
          <Route path='/quizzes/:quizId' element={<Quiz />} />
          <Route path='/new-topic' element={<NewTopic />} />
          
        </Route>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
