import { useState } from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import ToDoList from './Components/ToDoList';
import PasswordGenrater from './Components/PasswordGenrater';
import Calculator from './Components/Calculator';
import WeatherApp from './Components/WeatherApp';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light')
  function toggleMode() {
    if (mode === 'light') {  
      setMode('dark')
      document.body.style.backgroundColor = '#333333'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar toggleMode={toggleMode} mode={mode}/><div className='container'><TextForm mode={mode}/></div></>
    },
    {
      path: "/ToDoList",
      element: <><Navbar toggleMode={toggleMode} mode={mode}/><div className='container'><ToDoList mode={mode}/></div></>
    },
    {
      path: "/PasswordGenrator",
      element: <><Navbar toggleMode={toggleMode} mode={mode}/><div className='container'><PasswordGenrater mode={mode}/></div></>
    },
    {
      path: "/Calculator",
      element: <><Navbar toggleMode={toggleMode} mode={mode}/><div className='container'><Calculator mode={mode}/></div></>
    },
    {
      path: "/WeatherApp",
      element: <><Navbar toggleMode={toggleMode} mode={mode}/><div className='container'><WeatherApp mode={mode}/></div></>
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
