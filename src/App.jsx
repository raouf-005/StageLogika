import { useState } from 'react'
import FormEnfant from './compenents/FormEnfant'
import ChildTable from './compenents/ChildTable'
import {ChildProvider} from './compenents/ChildProvider'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
function App() {

  return (
    <ChildProvider >
      <FormEnfant /> 
      <ChildTable  />
    </ChildProvider>
  )
}

export default App
