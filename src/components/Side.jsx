import React from 'react'
import "../styles/Side.css"
import first from "../images/BGLOGO.jpg"
import second from "../images/air-canada-logo1.jpg"
import third from "../images/BB_LOGO.jpg"
import fourth from "../images/Gov-of-Canada-logo-300x68.jpg"
import fifth from "../images/Air-Canada-logo-300x46.png"

const Side = () => {
  return (
    <div className="Side">
      <div className="sidebar" role="complementary">
          <section className="box box_note">
              <div className="box_content_headers_inner_1"> 
                <div className="btt"> Important Dates</div>
              </div>
              <hr style={{width:"100%",textAlign:"left", marginBlock:"20px", height: "1px", backgroundColor: "grey"}}/>
      <div className="box_content_body">
      <div className="box_content_body_inner_2">  
        <p>
        Registration Deadline :April 
        <strong>1</strong>
        <strong>, 2023</strong><br/><br/>Event Date<br/>April 21-25, 2023
        </p><br/><br/>
        <p>
        <strong>SPONSORS</strong>
        </p>
        <br/>
        <p>GOLD SPONSOR</p>
            <img src={first} alt="first" className="first" />
            <img src={second} alt="second" className="second" /><br/>
            <img src={third} alt="third" className="third"/>
      </div>
			</div>					
        </section>                
        <section className="box box_note">
                  <div className="hgroup_outer">
                    <hgroup className="outer_title">
                      <h3>
                        <div className="btt"> Invitation Letters</div>
                      </h3>
                    </hgroup>
                  </div>
                  <div className="box_content_body">
                  	<div className="box_content_body_inner_1">
                  		<div className="box_content_body_inner_2">
	 	                    <p>Beyond Banking Group, Inc. is proud to organize the 19th International Trade Fair, Business and Investors Summit 2023 that attract attendees from across the globe.&nbsp;</p><p>If you live outside Canada and would like to attend the ITFBIS 2023, we welcome your participation and will do everything we can to help you obtain your visa. That said, we also understand that some individuals seek visas to attend events but have no intention of doing so. For this reason, prospective attendees must confirm their place in the event by paying the ITFBIS registration fee before we&nbsp;will issue visa invitation letters.</p>
                        <div><a href="http://www.cic.gc.ca/english/information/offices/index.asp" target="_blank" rel="noopener noreferrer">
                        <img src={fourth} alt="gov-of-canada-logo" className="fourth"/>
                        </a>
                        </div>
                        <p>
                        <strong>Visa Requirements for Canada</strong>
                        </p>
                        <p>Recently, Canada has implemented new requirements for international visitors.</p>
                        <p>International attendees arriving to Canada by air may require either a Visitor Visa or an Electronic Travel Authorization (eTA) which must be obtained from the Government of Canada with a suggested time frame of 6 -12 weeks prior to the Summit. The Government of Canada charges a fee $100 CAD for a Visitor Visa and $7 CAD for an eTA.</p>
                        <p>Step 1: <br/>Register for the International Trade Fair , Business and Investor Summit 2023.</p><p>Step 2:</p><p> Contact us via email if you are an attendee that require a visa to enter Canada</p><p>Step 3:</p><p>Request a Letter of Invitation from the Summit host by clicking the appropriate box during your registration.</p><p>Step 4:</p>
                        <p>Upon receiving your Letter of Invitation, apply for your Visitor Visa or Electronic Travel Authorization (eTA) as early as possible.<br/><strong>Please note that the visa invitation letter will only be issued when your place in the event has been confirmed by paying the<br/>registration fee.</strong><br/><strong>If you wish to attend the event and require assistance applying for a Canadian visa, do contact us via email or by submitting<br/>the form on the ''Contact us'' section.</strong></p>
                        <div>
                        <img src={fifth} alt="air-canada-logo" className="fourth"/>
                        <p>Air Canada is the official International airline of ITFBIS - 2023. Book and take advantage of a 10% discount. Air Canada Promotion Code ITFBIS2023B6.<br/>Foreigners who wish to attend the event with an accompanying person *spouses and children under the ages of 18* should list the names of all accompanying persons when<br/>registering for the event, under Group Registration.<br/>For visa invitation letters to be issued, the conference organizers requires participants to scan<br/>and send in by email, the data page of their international passport/travel document.<br/>Each accompanying persons must submit a copy of their travel document.</p>
                        <p>We look forward to welcoming you.</p><p>&nbsp;</p>
                      </div>
                    </div>
                  </div>
				        </div>					
            </section>                
      </div>
    </div>
  )
}

export default Side