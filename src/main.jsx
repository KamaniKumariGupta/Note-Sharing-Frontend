import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Context from './Helpers/Context.jsx'
import { Provider } from 'react-redux'
;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
      <App />
      </Context>
    </BrowserRouter>
  </React.StrictMode>,


)
