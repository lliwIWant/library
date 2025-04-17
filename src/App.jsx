import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Banner from './component/Banner'
import Login from './page/Login'
import {Route, Routes} from 'react-router'
import MyBook from './page/MyBook'
import AllBooks from './page/AllBooks'

function App() {

  return (
    <div>
      <Header/>
      <Banner/>
      <Routes>
          <Route path="/" element={<AllBooks/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/myBook" element={<MyBook/>}/>
      </Routes>
    </div>
  )
}

export default App
