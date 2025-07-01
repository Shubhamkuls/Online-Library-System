import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import HomePage from './Components/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router'
import BrowseBooks from './Components/BrowseBooks'
import BookDetails from './Components/BookDetails'
import AddBooks from './Components/AddBook'
import NotFound from './Components/NotFound'

function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/browse" element={<BrowseBooks/>} />
        <Route path="/books/:category" element={<BrowseBooks />} />
        <Route path = "/book/:id" element= {<BookDetails />} />
        <Route path = "/add" element= {<AddBooks />} />
        <Route path = "*" element = {<NotFound />} />
      </Routes>
    </>
  )
}

export default App
