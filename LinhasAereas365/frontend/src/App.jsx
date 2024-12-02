import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage'
import ListagemPage from './pages/ListagemPage'
import CheckinPage from './pages/CheckinPage'
import EticketPage from './pages/EticketPage'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/listagem' element={<ListagemPage />} />
          <Route path='/checkin' element={<CheckinPage />} />
          <Route path='/eticket' element={<EticketPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
