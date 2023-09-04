import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Components/home/Home'
import { Company } from './Components/company/Company'
import { Header } from './Components/header/Header'
import { LoginModal } from './Components/utils/LoginModal'

function App() {
  return (
    <div className="wrapper">
      <Header />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/company' element={<Company/>} ></Route>
        </Routes>
      <LoginModal />
    </div>
  )}

export default App
