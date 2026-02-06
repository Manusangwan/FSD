import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Table from './components/Table.jsx'
import Form from './components/Form.jsx'
import './App.css'

function App() {
  const person = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
  }

  return (
    <div>
      <Header title= "Hey! i did it"/>
      <Table/>
      <Form/>
      <Footer title = "My Application Footer" company = "Kiet University"/>
    </div>
  )
}

export default App
