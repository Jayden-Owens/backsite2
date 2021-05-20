import React from 'react';
import emailjs from 'emailjs-com';
import { Button } from 'semantic-ui-react';




export default function ContactUs() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('TracesGmail', 'TracesGmail', e.target, 'user_EtXW6MpURf6VmoLWceaIV')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
  
    
    return (
        <div style={{
            zIndex: "-1",
            backgroundColor: "lightGray",
            width: "100%",
            height: "100%",
          }}>
        <form className="contact-form" onSubmit={sendEmail}>
          <label>Name</label><br/>
          <input type="text" name="name" style={{width: '80%'}}/><br/>
          <label>Phone Number</label><br/>
          <input type="text" name="phone" style={{width: '80%'}} /><br/>
          <label>Description</label><br/>
          <textarea name="description" centered style={{width: '80%'}}/><br/><br/>
          <Button onClick={() => window.location.reload(false)} type="submit" value="Send" style={{ text: 'white'}}> Submit </Button>
          <br/>
          <br/>
        </form>
          </div>
      );
    }
