import { useState } from 'react'
import './App.css'
import FormEnfant from './compenents/FormEnfant'
import ChildTable from './compenents/ChildTable'
import {ChildProvider} from './compenents/ChildProvider'

function App() {

  return (
    <ChildProvider >
      <FormEnfant /> 
      <ChildTable  />
    </ChildProvider>
  )
}

export default App
