import React from 'react'
import map from "../images/davidson.png"
import second from "../images/bbb.jpg"
import tranait from "../images/tranait.jpg"
import westjet from "../images/westjet-new-logo-300x64 (1).png"
import one from "../images/197066576.jpg"
import sandy from "../images/sandddy.jpg"

const Travel = () => {
  return (
    <div style={{minHeight: "100vh"}} className="home" >
      <div className="Holder_home">
        <h1 className="heading">TRAVEL AND HOTEL</h1>
        <hr style={{width:"100%",textAlign:"left", marginBlock:"20px", height: "1px", backgroundColor: "grey"}} className="hr"/>
        <p className="texts">The ITFBIS will take place at #2478 Pegasus Rd NE Calgary, AB T2E 8G8, Canada.</p>
        <img src={map} alt="map" style={{maxWidth: "100%"}} />
        <img src={second} alt="second" style={{maxWidth: "100%"}}/>
        <h3 className="h4_header">Visa</h3>
        <h4 className="h4_header">Who needs a visa to enter Canada?</h4>
        <p className="texts">Obtaining a Visa to enter Canada is the responsibility of the participants. We can assist you by issuing an invitation letter, however, we are not involved in the visa issuing process, this is solely the responsibility of the competent Canadian embassy or consulate.
        <br/>
        <br/>
        Invitation letters will be issued for registered participants who fully paid the ITFBIS 2023 registration fees. You/your spouse must be registered participant/s to be considered for an invitation letter.
        <br/>
        <br/>
        To avoid any delays, we encourage all those who need a visa to enter Canada, to register as early as possible and apply for the visa.
        <br/>
        <br/>
        Citizens of certain countries and territories need a visa to visit or transit Canada. The following information is provided as a courtesy, but is subject to change:
        <br/>
        <br/>
        Find out if you need an Electronic Travel Authorization (eTA) or a visitor visa
        </p>
        <h4 className="h4_header">BOOK YOUR FREE SHUTTLE RIDE!</h4>
        <img src={tranait} alt="tranait" style={{maxWidth: "100%"}}/>
        <p className="texts">Air Canada is the official International airline of ITFBIS-2023. Book and take advantage of a 10% discount. Air Canada Promotion Code will be available shortly.</p>
        <div style={{width: "100%", display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
          <p className="texts">WestJet Airlines is the national official airline of ITFBIS-2023 within Canada.
          <br/>
          <br/>
          Coupon code will be available shortly.</p>
          <img src={westjet} alt="westjet" style={{maxWidth: "100%"}}/>
        </div>
        <p className="texts">For free airport pick up, email you travel dates to events@blader.com Travel details will need to be emailed to us not later than 48 hrs. before arrival.</p>
        <h4 className="h4_header">Hotels</h4>
        <p className="texts">There are a number of hotels in and around the ITFBIS 2023 area.
        <br/>
        <br/>
        Discounted rate is available to all ITFBIS-2023 participants.
        <br/>
        <br/>
        Single en suite room – $99.00 per room per night
        <br/>
        <br/>
        Double en suite room – $150.00 per room per night
        <br/>
        <br/>
        Twin en suite room – $187.00 per room per night
        <br/>
        <br/>
        New double en-suite room for single occupancy – $204.00 per night
        <br/>
        <br/>
        Luxury Court for double occupancy – $250.00 per night
        <br/>
        <br/>
        Single standard room with shared bathroom and WC facilities – $70.00 per room per night
        <br/>
        <br/>
        There are a variety of hotel options that are offering a special ITFBIS 2023 rate.
        </p>
        <div style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
        <img src={one} alt="first" style={{maxWidth: "45%"}}/>
        <img src={sandy} alt="first" style={{maxWidth: "45%"}}/>
        </div>
      </div>
    </div>
  )
}

export default Travel