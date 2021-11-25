import React from 'react';
import emailjs from 'emailjs-com';
import { Button } from 'semantic-ui-react';
import backgroundimge from './Contactus.jpg'




export default function ContactUs() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('TracesGmail', 'TracesGmail', e.target, "")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
  
    
    return (
        <div style={{
          zIndex: "-1",
          width: "100%",
          backgroundImage: `url(${backgroundimge})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
          }}>
        <form className="contact-form" onSubmit={sendEmail}>
          <label style={{marginLeft: '1rem', color: "white"}}>Name</label><br/>
          <input type="text" name="name" style={{width: '80%', marginLeft: '1rem'}}/><br/>
          <label style={{marginLeft: '1rem', color: "white"}}>Phone Number</label><br/>
          <input type="text" name="phone" style={{width: '80%', marginLeft: '1rem'}} /><br/>
          <label style={{marginLeft: '1rem', color: "white"}}>Description</label><br/>
          <textarea name="description" centered style={{width: '80%', marginLeft: '1rem'}}/><br/><br/>
          <Button onClick={()=>{ alert('Email Sent!'); }} type="submit" value="Send" style={{ text: 'white'}}> Submit </Button>
          <br/>
          <br/>
        </form>
          </div>
      );
    }
