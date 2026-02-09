import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartingPage from './pages/StartingPage.tsx';
import ArticlePage from './pages/ArticlePage.tsx';
import SignPage from './pages/SignPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import AccountPage from './pages/AccountPage.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<StartingPage></StartingPage>}></Route>
      <Route path='/article/:id' element={<ArticlePage></ArticlePage>}></Route>
      <Route path='/signup' element={<SignPage></SignPage>}></Route>   
      <Route path='/login' element={<LoginPage></LoginPage>}></Route>  
      <Route path='/account' element={<AccountPage></AccountPage>}></Route>  
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  </BrowserRouter>,
)
