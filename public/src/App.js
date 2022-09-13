import React, {useContext, useEffect, useState} from "react";
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import NavBar from "./Components/NavBar";
import {observer} from "mobx-react-lite";
import {authCheck} from "./axios/user";
import {Context} from "./index";


const App = observer( () =>{
  const {user} = useContext(Context)
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
      authCheck().then(data=>{
          user.setUser(data)
          user.setIsAuth(true)
      }).finally(()=>{
          setLoading(false)
      })
  }, [])

  if(loading){
      return <div className='d-flex justify-content-center mt-5'><h1>Loading...</h1></div>
  }
  return (
    <Router>
        <NavBar/>
       <AppRouter/>
    </Router>

  );
})

export default App;
