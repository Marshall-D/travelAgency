import React from 'react'
import Regis from "../images/Register-Now-Button-90x300.png"
import Pay from "../images/download.png"
// import { Link } from 'react-router-dom'

const Registration = () => {
  return (
    <div style={{minHeight: "100vh"}} className="home">
    <div className="Holder_home">
      <h1 className="heading">REGISTRATION</h1>
      <hr style={{width:"100%",textAlign:"left", marginBlock:"20px", height: "1px", backgroundColor: "grey"}} className="hr"/>
      <div style={{width: "100%"}}>
      <h4 className="h4_header">
      ITFBIS 2023 registration includes:
      </h4>
      <ul className="texts">
        <li>All Access Pass / Formal Invitation Letter</li>
        <li>Opportunity to engage with thought leaders in the Values-based trade, import, export, investment opportunity</li>
        <li>Breakfast with Industry Leaders | Conference & Networking</li>
        <li>Business Conferences | Learn from Experts in International Business</li>
        <li>"Andean Flavors Night" Reception & Networking Event</li>
        <li>Certificate of Participation as International Delegate</li>
        <li>Visit local businesses in Ontario and discover new trends</li>
        <li>Introduction on how to do business in Canada</li>
      </ul>
      <h4 className="h4_header">Cancellation Policy</h4>
      <p className="texts">
      We will accept cancellations on or before July 20 and refund fees less a $50 USD administrative cost. Please email Itfbiscalcinquiry@gmail.com with your request. You may transfer your registration to another person. Log-in to your registration where you will be guided to change the required information.
      <br/><br/>
      Delegates can register and make payment of the registration fee using PayPal.
      <br/><br/>
      To Pay Using PayPal Account:<br/><br/>
      </p>
      <img src={Pay} alt="paypal"/>
      <p className="texts">
      Visit PayPal website
      Click send
      Enter ''itfbis2019@yahoo.com''  and the amount in USD (Please add 10% transaction fee)
      It will direct you to the log in. Enter your PayPal email address and your password
      Click choose shipped address
      Click no shipped address
      In the message box , type ITFBIS payment  and your full name
      Then click send payment
      Email to us your payment screenshot
      </p>
      <a href="https://form.jotform.com/230584627657567" target="_blank" rel="noopener noreferrer">
        <img src={Regis} alt="reg now" className="some"/><br/><br/>
      </a>
      <ul className="texts">
        <li>INTERNATIONAL INVITATION LETTER</li>
        <p>
        It is recommended that all international delegates identify the proper travel visa requirements of Immigration and Citizenship Canada to enter Canada.
        <br/><br/>
        Refunds according to Cancellation Policy. Proof of Visa rejection is required.
        Invitation Letters will be issued ONLY to registered participants as INTERNATIONAL DELEGATE to "ITFBIS 2023". Please make sure to submit your Registration and payment in order to do so.
        </p>
        <p>
        FEES and INCLUSIONS
        <br/>
        INDIVIDUAL REGISTRATION
        <br/>
        All fees are in United States dollars USD
        <br/>
        Full Event $800
        <br/>
        3-Day Event $600
        <br/>
        Daily Pass $300
        <br/>
        GROUP REGISTRATION
        <br/>
        Group of 3 - Full Event $1,800
        <br/>
        Family Registration (Attending with your spouse) - Full Event $1,500
        <br/>
        Family Registration (Attending with your spouse and children below the ages of 17) $1,800
        <br/>
        Traders Union Group - $1,200
        Group Of Investors $2,000
        <br/>        <br/>        <br/>
        Delegates who wish to register in the Group - family registration must include a copy of the birth certificate
        of accompanying children under 18, birth certificate must clearly show the name of both parents.
        A consent letter from the other parent is required for children travelling with a single parent.
        <br/>
        A single invitation letter is issued for a family group with the names of all accompanying family members listed therein.  
        </p>
      </ul>
      <h4 className="h4_header">ATTENDING THE EVENT WITH CHILDREN</h4>
      <p className="texts">
      If attending the event with children under the ages of 18
      <br/>
      We strongly recommend that you carry a consent letter if they are travelling with one parent/guardian.
      <br/>
      For the purposes of this consent letter, a child is defined as anyone who is under the age of majority (18 or 19, depending on the province or territory of residence).
      <br/>
      A consent letter is not a legal requirement in Canada, but it can simplify travel for entrance into Canada with children, as it may be requested by immigration authorities when entering or leaving a foreign country or by Canadian officials .
      <br/>
      The letter demonstrates that children have permission to travel abroad from parents or guardians who are not accompanying them.
      </p>
    </div>
    </div>
    </div>
  )
}

export default Registration