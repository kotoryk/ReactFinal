import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthPage from './Pages/AuthPage';
import Toolbar from './Components/Toolbar';
import IndexPage from './Pages/IndexPage';
import CreatePostPage from './Pages/CreatePostPage';
import ProfilePage from './Pages/ProfilePage';
import SingleUserPage from './Pages/SingleUserPage';
import LoginPage from './Pages/LogInPage';
import RegisterPage from './Pages/RegisterPage';
import SinglePostPage from './Pages/SinglePostPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Toolbar />
        <Routes>
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/index' element={<IndexPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/createpost' element={<CreatePostPage />} />
          <Route path='/user/:username' element={<SingleUserPage />} />
          <Route path='/post/:id' element={<SinglePostPage />} />
          <Route index element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
