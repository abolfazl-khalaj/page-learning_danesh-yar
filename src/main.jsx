import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import storei from './redux/store.js'



ReactDOM.createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider store={storei}>
      <BrowserRouter> 
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)