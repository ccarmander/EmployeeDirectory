import React from "react"
import './App.css';
import Header from "./components/Header"
import FetchRandomUser from "./components/Main"
import Footer from "./components/Footer"
import TableHead from "./components/TableHead"



function App() {

  return (
    <div>
    <Header />
    <TableHead />
    <FetchRandomUser />
    <Footer />


    </div>
  )
  
}


export default App


