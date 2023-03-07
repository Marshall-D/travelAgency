import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "./Header"
import Footer from "./Footer"
import Side from "./Side"

const Formater = () => {
  return (
    <div style={{width: "100%", display: "flex", flexDirection: "column"}}>
        <div style={{width: "100%"}}><Header/></div>
        <div style={{display: "flex", width: "100%", flexWrap: "wrap", gap: "20px"}}>
            <div  style={{flex: "1.2"}}>
            <Outlet/>
            </div>
            <div  style={{flex: "0.8"}}>
            <Side/>
            </div>
        </div>
        <div><Footer/></div>
    </div>
  )
}

export default Formater