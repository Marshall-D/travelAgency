import React from 'react'
import jessica from "../images/JessicaGroveSmith.jpg";
import richard from "../images/Richard-Gerbe-CEO-and-Co-Founder-HIGHMARK-NY-292x292.jpg"
import cheryl from "../images/Cheryl-Saldanha-1-292x292.jpg"
import dave from "../images/daveee.jpg"
import lulu from "../images/lulu.jpg"
import mary from "../images/mary.jpg"
import anthony from "../images/Anthony_Lewis.jpg"

const Speakers = () => {
  return (
    <div style={{minHeight: "100vh"}} className="home">
      <div className="Holder_home">
        <h1 className="heading">KEYNOTE SPEAKER</h1>
        <h4>Program</h4>
        <hr style={{width:"100%",textAlign:"left", marginBlock:"20px", height: "1px", backgroundColor: "grey"}} className="hr"/>
        <div style={{width: "100%"}}>
          <img src={jessica} alt="" className="some"/>
          <p className="texts">
          Jessica Grove-Smith
          <br/>
          Jessica joined the research team at the Passive House Institute (PHI) in 2008. As a physicist, her responsibilities include stationary and dynamic energy demand modelling and climate data for energy calculations. The application of the Passive House concept in different climate zones and for indoor swimming pools have also been a main focus area of her work, as well as contributions to renewable primary energy (PER) assessment method. Jessica frequently participates in conferences internationally and acts as the Passive House Institute’s representative for North America.
          </p>
          <img src={richard} alt="" className="some"/>
          <p className="texts">
          Richard Gerbe
          <br/>
          Richard, CEO and Co-Founder of HIGHMARK NY, is a 2017 ENR New York Top Young Professional and a 2016 Consulting-Specifying Engineer 40 Under 40 Award Winner, is a visionary and seasoned HVAC authority with nearly two decades of industry experience. His robust expertise in the best and most innovative products, technologies and processes available today for boosting building efficiency is unparalleled. Gerbe is committed to challenging the HVAC industry’s status quo and imparting a new mentality centered on greater efficiency in the built environment.
          </p>
          <img src={cheryl} alt="" className="some"/>
          <p className="texts">
          Cheryl Saldanha
          <br/>
          Cheryl is a senior engineer at Simpson Gumpertz and Heger in New York. She specializes in the design and evaluation of building enclosures as well as investigations and renovations to existing building enclosure systems. Her background is in building science, including computer simulations of buildings and building components. She is adept at using multiple computer software packages to perform thermal and hygrothermal analyses of building details, and whole-building energy and daylighting analyses. Cheryl is a Certified Passive House Designer from the Passive House Institute.
          </p>
          <img src={dave} alt="" className="some"/>
          <p className="texts">
          Dave Hamilton <br/>
          President and Founder, Beyond Banking Group
          </p>
          <img src={lulu} alt="" className="some"/>
          <p className="texts">
          Louisa Taylor <br/>
          Office Of Immigration, Refugees and Citizenship Canada
          </p>
          <img src={mary} alt="" />
          <p className="texts">
          Mary Williams <br/>
          Immigration, Refugees and Citizenship Canada
          </p>
          <img src={anthony} alt="" />
          <p className="texts">
          Anthony Lewis <br/>
          Senior Counsel, Edward Sanchez Law Firm, Calgary, Canada
          </p>
        </div>
      </div>
    </div>
  )
}

export default Speakers