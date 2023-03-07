import React from 'react'
import Get from "../images/get-some-awesome-pictures.jpg"
import calgary from "../images/calgarywalks-neil-zeller-photography-1.jpg"
import max from "../images/maxresdefault.jpg"
import image from "../images/image.jpg"
import four from "../images/48140024186_611057b8ba_b.jpg"



const Agenda = () => {
  return (
    <div style={{minHeight: "100vh"}} className="home">
      <div className="Holder_home">
        <h1 className="heading">AGENDA</h1>
        <hr style={{width:"100%",textAlign:"left", marginBlock:"20px", height: "1px", backgroundColor: "grey"}} className="hr"/>
        <div style={{width: "100%"}}>
        <p className="texts">
        Networking Reception
        <br/><br/>
        8:30 - 5:00 PM                                                 	REGISTRATION
        <br/><br/>
        9:30 AM- 10:30 AM	WELCOME - Plenary Session
        10:30 AM - 12:00 PM	Global Trade in Practice Panel Discussion
        12:00 - 1:30 PM                                                                           	LUNCH BREAK   
        <br/><br/>                                        
        1:30 - 1:50 PM	Keynote Address by , President, Beyond Banking Group, Dave Hamilton
        Topic - Trade Opportunities in Emerging Markets
        <br/><br/>  
        1:50 - 2:30 PM	Breaking Into The Canadian Market - by Jessica Grove-Smith (PhD)
        <br/><br/>  
        2:30 - 4:00 PM	TRADE FAIR
        <br/><br/>  
        4:00 - 5:00 PM	Global Trade in Practice Panel Discussion
        Topic: In a global economic context, what is the role of partnerships between education
        institutions and businesses?
        How can continuing trade education critically boost our region’s global business performance?
        Panelists will address these themes by showcasing their co-branded
        “Global Trade in Practice” professional development course currently being offered in
        the University Of Calgary.
        <br/><br/>  
        5:00 - 6:40 PM	Networking Reception
        <br/><br/>  
        DAY 2	
        8:30 - 5:00 PM	REGISTRATION
        9:30 AM - 10:30 AM	
        Canada Trade Relations: Cooperation Through Trade, Education and Cultural Exchange. Short-term and long-term economic initiatives
        <br/><br/>  
        10:30 AM - 12:00 PM	Hossam Muharram, Egyptian Consul General in Montreal, Canada.
        Topic: Egypt-Canada Trade Relations: Cooperation Through Trade, Education and Cultural Exchange. Short-term and long-term economic initiatives.
        <br/><br/>  
        12:00 - 1:30 PM	LUNCH BREAK
        <br/>
        1:30 - 1:50 PM	Louisa Taylor, Office Of  Immigration, Refugees and Citizenship Canada
        Topic : Canada is open to foreigners with great ideas
        <br/><br/>  
        1:50 - 4:00 PM	EXPO
        <br/><br/>  
        4:00 - 5:00 PM	Networking Reception
        <br/><br/>  
        5:00 - 6:00 PM	Plenary Session
        <br/><br/>  
        DAY 3	
        <br/><br/>  
        8:30 - 5:00 PM	REGISTRATION
        <br/><br/>  
        9:30 AM - 10:30 AM	Networking Reception
        <br/><br/>  
        10:30 AM - 12:00 PM	EXHIBITION
        <br/><br/>  
        12:00 - 1:30 PM	LUNCH BREAK
        <br/><br/>  
        1:50 - 4:00 PM	Workshop
        <br/><br/>  
        4:00 - 5:00 PM	TRADE FAIR
        <br/><br/>  
        5:00 - 7:00 PM	Workshop
        <br/><br/>  
        DAY 4	
        <br/><br/>  
        8:30 - 5:00 PM	REGISTRATION
        <br/><br/>  
        9:30 AM - 10:30 AM	Mary Williams, Immigration, Refugees and Citizenship Canada
        Topic : Visa and Residency Policy for business persons and investors in Canada
        <br/><br/>  
        10:30 AM - 12:00 PM	Anthony Lewis, Senior Counsel, Edward Sanchez Law Firm, Calgary, Canada
        Topic: 2021 Tariffs and Trade Policy Outlook
        <br/><br/>  
        12:00 - 1:30 PM	LUNCH BREAK
        <br/><br/>  
        1:50 - 4:00 PM	EXHIBITIONS
        <br/><br/>  
        4:00 - 5:00 PM	CONFERENCE and NEGOTIATIONS
        <br/><br/>  
        5:00 - 5:25 PM	DISCUSSION FORUM
        <br/><br/>  
        5:25 - 6:00 PM	CLOSING REMARKS
        <br/><br/>  
        7:00 - 10:00 PM	GALA/ DINNER
        <br/><br/>  
        DAY 5	INVESTORS SUMMIT
        <br/>
        <br/>
        CITY TOUR
        <br/>        <br/>

        JUSTIFY YOUR TRIP
        </p>
        <img src={Get} alt="Get" className="some"/>
        <img src={calgary} alt="calgary" className="some"/>
        <img src={max} alt="max" className="some"/>
        <img src={image} alt="imge" className="some"/>
        <img src={four} alt="four" className="some"/>
        </div>
      </div>
    </div>
  )
}

export default Agenda