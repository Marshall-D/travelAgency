import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const handleSubmit = (e) =>{
    e.preventDefault()
    emailjs.sendForm('service_7evv1y8', 'template_c7ffcys', formRef.current, '4ntIcePeujsXeONo6')
  .then((result) => {
      console.log(result.text);
      setDone(true)
  }, (error) => {
      console.log(error.text);
  });
}
  return (
    <div style={{minHeight: "100vh"}} className="home">
      <div className="Holder_home">
        <h1 className="heading">CONTACT US</h1>
        <hr style={{width:"100%",textAlign:"left", marginBlock:"20px", height: "1px", backgroundColor: "grey"}} className="hr"/>
        <div style={{width: "100%"}}>
          <p className="texts">
          Complete the form below to send us a message, we will usually respond within 24 hours.
          For urgent inquiries contact the ITFBIS organizers via call /whatsapp +1 (256) 398‑1089
          E-mail : Itfbiscalcinquiry@gmail.com
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="formHolder">
                    <label>Your Email: </label>
                    <input type="text" placeholder="Your Email" name="user_name" />
                    </div>
                    <div className="formHolder">
                    <label>Subject:</label>
                    <input  type="text" placeholder="Subject" name="user_subject"  style={{marginLeft: "32px"}}/>
                    </div>
                    {/* <div className="formHolder">
                    <label>Email:</label>
                    <input  type="text" placeholder="Email" name="user_email" />
                    </div> */}
                    <div className="formHolder1">
                    <label style={{paddingTop: "10px"}}>Message:</label>
                    <textarea  rows="10" placeholder="Message" name="message" style={{marginLeft: "20px"}}/>
                    </div>
                    <button type="submit" value="Send" 
                    >Submit</button>
                    { done && "Thanks for reaching out ..."}
                </form>
        </div>
      </div>
    </div>
  )
}

export default Contact