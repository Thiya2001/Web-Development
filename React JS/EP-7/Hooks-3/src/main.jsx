import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UsingState from './Components/UsingState'
import UsingRef from './Components/UsingRef'
import FocusRef from './Components/FocusRef'

createRoot(document.getElementById('root')).render(
  <>
    <UsingState />
    <hr />
    <UsingRef />
    <hr />
    <FocusRef />
  </>
)
