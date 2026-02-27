import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartingPage from './pages/StartingPage.tsx';
import SignPage from './pages/SignPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import AccountPage from './pages/AccountPage.tsx';
import GamePage from './pages/GamePage.tsx';
import WhishList from './pages/WhishList.tsx';


// rutter för endast front end, för varje rutta jag visar en komponenenter från mappen pages, om man går på en endpoint som är inte nämnad här så skrivs den en 404 error
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<StartingPage></StartingPage>}></Route>
      <Route path='/signup' element={<SignPage></SignPage>}></Route>   
      <Route path='/login' element={<LoginPage></LoginPage>}></Route>  
      <Route path='/account' element={<AccountPage></AccountPage>}></Route>  
      <Route path="/:id" element={<GamePage />} />
      <Route path="/whishlist" element={<WhishList />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  </BrowserRouter>,
)
