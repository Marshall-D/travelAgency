import React, {useContext} from 'react'
import "../styles/Header.css";
import { Link, NavLink } from 'react-router-dom';
import {ImMenu} from "react-icons/im"
import {MdClose} from "react-icons/md"
import { AuthContext } from '../Context/Context';

const Header = () => {
  const { showSide, toggleSide} = useContext(AuthContext)
  const show ={
    background: "grey",
    color: "white"
  }
  const noShow ={
    // color: "#474747"
  }
  return (
    <div className="header_wrapper_1">
      <div className="header_wrapper">
        <div className="header_extra_1"></div>
        <div className="header_extra_2">
          {
            !showSide? <div style={{display: "flex", alignItems: "center", height: "100%"}} onClick={toggleSide}>
          <ImMenu color="white" fontSize="2em"/>
          </div>:
          <div style={{display: "flex", alignItems: "center", height: "100%"}} onClick={toggleSide}>
          <MdClose color="white" fontSize="2em"/>
          </div>
          }
          <div></div>
        </div>
        {
          showSide && <div className='burger' onClick={toggleSide}>
            <div className="burger_menu1">19th International Trade Fair, Business and Investors Summit
              <span>ITFBIS 2023 | 21-25 April 2023  l  Calgary, Canada</span>
            </div>
            <Link to="/" className="burger_menu2">Home</Link>
            <Link to="call" className="burger_menu2">Call For Exhibitors</Link>
            <Link to="reg" className="burger_menu2">Registration</Link>
            <Link to="agenda" className="burger_menu2">Agenda</Link>
            <Link to="speakers" className="burger_menu2">Speakers</Link>
            <Link to="contact" className="burger_menu2">Contact us</Link>
            <Link to="travel" className="burger_menu2">Travel and Hotel</Link>
          </div>
        }
        <header role="banner" className="header_img_none">
          <div className="inner_banner">                     
            <div className="banner">
              <div className="h1_outer">
                <h1 className="site_hdr">19th International Trade Fair, Business and Investors Summit</h1>
                <h2 className="site_hdrr">ITFBIS 2023 | 21-25 April 2023  l  Calgary, Canada</h2>
              </div>       
            </div>
          </div>
                                 {/* <!-- END OF 'inner_banner' --> */}
        </header>
                              {/* <!-- END OF 'header' --> */}
      </div>
                           {/* <!-- END OF 'header_wrapper' --> */}
      <div className="navigation_wrapper">
        {/* <div className="navigation"> */}
          <nav className="h_nav">
            <div className="main_menu_h">
            <NavLink to="/" style={({isActive})=> isActive? show: noShow} className="menu_top_h_menu">
              {/* <div> */}
                Home         
              {/* </div> */}
              </NavLink>
              <NavLink to="/call" style={({isActive})=> isActive? show: noShow} className="menu_top_h_menu">
              {/* <div  > */}
                Call for Exhibitors
              {/* </div> */}
              </NavLink> 
              <NavLink to="/reg" style={({isActive})=> isActive? show: noShow} className="menu_top_h_menu">
              {/* <div> */}
                Registration 
              {/* </div> */}
              </NavLink>
              <NavLink to="agenda" style={({isActive})=> isActive? show: noShow} className="menu_top_h_menu">
              {/* <div > */}
                Agenda 
              {/* </div> */}
              </NavLink>
              <NavLink to="/speakers" style={({isActive})=> isActive? show: noShow} className="menu_top_h_menu">
              {/* <div  > */}
                Speakers 
              {/* </div> */}
              </NavLink>
              <NavLink to="/contact" style={({isActive})=> isActive? show: noShow} className="menu_top_h_menu">
              {/* <div  > */}
                Contact Us 
              {/* </div> */}
              </NavLink>
              <NavLink to="/travel" style={({isActive})=> isActive? show: noShow} className="menu_top_h_menu">
              {/* <div > */}
                Travel and Hotel 
              {/* </div> */}
              </NavLink>
            </div>
          </nav>
        {/* </div> */}
                        {/* <!-- END OF 'navigation' --> */}
      <div id="nav_border_bottom"></div>
    </div>
    </div>
  )
}

export default Header