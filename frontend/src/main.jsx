import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PollProvider } from './context/PollContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PollProvider>
      <App />
    </PollProvider>
  </React.StrictMode>,
)
