import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css' // Pastikan icon ada
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Kita tidak pasang Router disini, tapi di App.jsx agar lebih rapi */}
        <App />
    </React.StrictMode>,
)