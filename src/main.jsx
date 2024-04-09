import React from 'react'
import ReactDOM from 'react-dom/client'
import ColegioApp from './ColegioApp.jsx'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { store } from './store'
import '../src/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <HelmetProvider>
          <ColegioApp />
        </HelmetProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
