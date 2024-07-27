import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PollProvider } from './context/PollContext.jsx'
import NotificationProvider from './context/NotificationContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PollProvider>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </PollProvider>
  </React.StrictMode>,
)
