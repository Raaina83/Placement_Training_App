import './App.css'
import Dashboard from './components/dashboard/Dashboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Admin from './pages/admin/Admin';
import { useState } from 'react';
import Header from './components/layouts/Header';
import TestUpload from './components/testUpload/TestUpload';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : "false"}>
      <Header toggle={setDarkMode} mode={darkMode}/>
      <Admin/>
      <Dashboard/>
    </div>
  )
}

export default App
