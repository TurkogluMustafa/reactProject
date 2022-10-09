import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import App from "./App";
import LoginPage from "./LoginPage";



function Guard() {


    let isLoggedIn=useSelector(state=>state);

    


  return (
    <>
    {console.log("Guard Page State",isLoggedIn)}
    {!isLoggedIn? <LoginPage></LoginPage>:<App></App>}
    
    </>
  )
}

export default Guard