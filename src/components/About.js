import React from'react'
import {Container, Header } from "semantic-ui-react";
import background from "./elk.jpg"


const About = () => {

return(
    <div style={{
        zIndex: "-1",
        width: "100%",
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>

<Container fluid>
      <Header as='h2'>About Back Country Taxidermy</Header>
      <h1 style={{marginLeft: '2rem', color: "white"}}>Trace</h1>
      <p style={{marginLeft: '2rem', marginRight: '2rem', color: "white"}}>
        <h3>Phone # 801-864-9174</h3>
        <br/>
        <p style={{marginLeft: '2rem', color: "white"}}>Trace is one of the Co-Founders and a great taxidermist! Born and raised a hunter, his passion for wildlife has been a huge part of his life.
            His strive for quality allows him to deliver a great product time after time. Trace is very easy-going, fun, and great to work with.
        </p>
      </p>
      <h1 style={{marginLeft: '2rem', color: "white"}}>Roger</h1>
      <p style={{marginLeft: '2rem', marginRight: '2rem', color: "white"}}>
      Roger is the Co-Founder of Backcountry taxidermy and also a great taxidermist! From a young age, he developed a love and passion for outdoors and hunting, something he would later pass on to his children.
        His professionalism and love for people drive him to deliver a fantastic product. Roger is very fun and easy to talk to and understands the needs of customers.
      </p>
      <h1 style={{marginLeft: '2rem', color: "white"}}>How we came to be</h1>
      <p style={{marginLeft: '2rem', marginRight: '2rem', color: "white"}}>
      Trace and Roger were looking for something they could do that would be in line with one of their passions. 
        They decided taxidermy could be just that, a business they would love and a way they could help fellow hunters.
        As hunters themselves, they understand the expectations and needs of customers. Contact Trace with questions, specifications, and pricing. 
      </p>
      <br/>
      <br/>
      <br/>
    </Container>
</div>
)



}



    
    

   export default About;