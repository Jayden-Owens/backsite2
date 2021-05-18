import React from'react'
import {Container, Header } from "semantic-ui-react";




const About = () => {

return(
    <div style={{
        zIndex: "-1",
        backgroundColor: "lightGray",
        width: "100%",
        height: "100%",
      }}>

<Container fluid>
      <Header as='h2'>About Back Country Taxidermy</Header>
      <h1 style={{marginLeft: '2rem'}}>Trace</h1>
      <p style={{marginLeft: '2rem', marginRight: '2rem'}}>
        <h3>Phone # 801-864-9174</h3>
        <br/>
        <p>Trace is one of the Co-Founders and a great Taxidermist! Born and raised a hunter, his passion for wildlife has been a huge part of his life.
            His strive for quality allows him to deliver a great product time after time. Trace is very easy-going, fun, and great to work with.
        </p>
      </p>
      <h1 style={{marginLeft: '2rem'}}>Roger</h1>
      <p style={{marginLeft: '2rem', marginRight: '2rem'}}>
      Roger is the Co-Founder of Backcountry Taxidermy and also a great Taxidermist! From a young age, he developed a love and passion for outdoors and hunting, something he would later pass on to his children.
        His professionalism and love for people drive him to deliver a fantastic product. Roger is very fun and easy to talk to and understands the needs of customers.
      </p>
      <h1 style={{marginLeft: '2rem'}}>How we came to be</h1>
      <p style={{marginLeft: '2rem', marginRight: '2rem'}}>
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