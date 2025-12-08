import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
// Jika ada icon bootstrap: import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css' // <-- PASTIKAN INI ADA

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)