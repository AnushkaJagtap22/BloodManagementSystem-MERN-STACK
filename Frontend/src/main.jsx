import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Context } from './context.js'

// eslint-disable-next-line react-refresh/only-export-components
const AppWraper = () =>
{
  const [isAuthenticated,setIsAuthenticated] =useState(false);
  const [user,setUser] = useState({});

  return(
    <Context.Provider value={{isAuthenticated,setIsAuthenticated,user,setUser}}>
    <App />
    </Context.Provider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWraper/>
  </StrictMode>,
)
