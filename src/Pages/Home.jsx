import React from 'react'
import "../styles/Home.css"
import top from "../images/mmmmmmm.jpg"
import second from "../images/nnnnn.jpg"
import third from "../images/vvvvvvv.jpg"
import forth from "../images/DS204764.jpg"
import fifth from "../images/BB_LOGO.jpg"

const Home = () => {
  return (
    <div style={{minHeight: "100vh"}} className="home">
    <div className="Holder_home">
    <h1 className="heading">Home</h1>
    <hr style={{width:"100%",textAlign:"left", marginBlock:"20px", height: "1px", backgroundColor: "grey"}} className="hr"/>
    <div style={{width: "100%"}}>
      <h4 className="h4_header">Background</h4>
      <p className="texts">
      The aim of the 19th International Trade Fair, Business and Investors Summit is to promote trade relations between Canada and countries abroad. The event is for entities interested in establishing new business relations, networking with business leaders and political representatives, learning more about business opportunities in various sectors and meeting market entry experts. The event engages distinguished business leaders, international trade and development experts, and government representatives as speakers and panelists in order to reveal trade and investment opportunities.
      The event will feature a conference, workshop, trade show, master class, symposium
      </p>
      <h4 className="h4_header">Objectives</h4>
      <p className="texts">
      To provide a forum for connecting with potential partners
      <br/>
      <br/>
      To increase export-import volume
      <br/>
      <br/>
      To provide information, knowledge, and tools needed for entering new markets
      <br/>
      <br/>
      To provide market-specific information
      <br/>
      <br/>
      To introduce experts and organizations involved in international trade
      <br/>
      <br/>
      To strengthen diplomatic relations
      <br/>
      <br/>
      To form a network of key government officials, business and non-profit organization leaders and academia to collaborate on future projects on international economic, educational and cultural fronts
      </p>
      <h4 className="h4_header">Who should Attend</h4>
      <p className="texts">
      The target audience will include, but not limited to, members of the business, trade, investors, government, non-profit, and academic communities with interest in international trade and economic development. The 19th ITFBIS 2023 will aim at forming synergies among various disciplines, including business, logistics, banking, law, politics, and economics, drawing primarily from practical experience.

      The networking sessions  will bring international distributors, retailers, traders, resellers and wholesalers together in one place. Get to know contacts and suppliers in the trade and investment industry.
      </p>
      <img src={top} alt="some" className="some"/>
      <p className="texts">
      ITFBIS 2023 provides companies with the opportunity to meet and network alongside customers and new sales prospects in a relaxed
atmosphere, one which is more productive than a traditional trade show and conference.
      </p>
      <img src={second} alt="see" className="see" />
      <h4 className="h4_header">Build & strengthen relationships</h4>
      <p className="texts">
      ITFBIS is about strengthening key relationships with new and existing clients. After all, most trade business is done with existing partners, by making these relationships even stronger.
      </p>
      <img src={third} alt="days" className="days" />
      <p className="texts">
      Become an exhibitor

      Gain exposure and brand visibility for your company across the industry by exhibiting

      Why Consider Exhibiting at ITFBIS 2023?

      ITFBIS presents a unique opportunity to build face-to-face connections, drawing from a targeted audience of decision makers and professionals within the industry. Stepping outside of the confines of digital marketing and remote sales efforts provides a valuable insight as to how customers interact with products and services, allowing you to meet their needs on an individual basis.
      </p>
      <img src={forth} alt="age" className="age" />
      <p className="texts">
      Take the opportunity to meet other industry professionals and discover ways that your companies can benefit each other. Hosting meetings within a dedicated area provides the opportunity to build lasting business partnerships, long after the show is over.
      </p>
      <h4>Reasons to attend  at ITFBIS - 2023</h4>
      <p className="texts">

      Meet face-to-face with industry decision makers

      Strengthen your relationships with existing customers

      Reinforce your commitment to the marketplace

      Gain access to key decision makers from emerging markets

      Launch new technologies and services to a captive audience

      Make new business contacts

      Network with high-quality international attendees

      Stand out from your competitors and reinforce your commitment to the marketplace
      </p>
      <h4 className="h4_header">Organizers</h4>
      <img src={fifth} alt="age"/>
    </div>
    </div>
    </div>
  )
}

export default Home