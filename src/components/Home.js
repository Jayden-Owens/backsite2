import React from 'react'
import {Image, Divider } from 'semantic-ui-react'
import imageSrc from './backCountry/LogoOne.png'
import styles from './navbar.css'
import Gallery from './Gallery'
import {ContainerSec} from './StyledComponents'
import About from './About'
import ContactUs from './ContactUs'
import backgroundimages from './HomeImage.jpg'


const Home = () =>  (

    <>
    
    <div style={{
      zIndex: "-1",
      width: "100%",
      backgroundImage: `url(${backgroundimages})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>

    <ContainerSec>

        <Image
        className={styles.logoCard}
        style={{width: "38%"}}
        src={imageSrc}
        />
    </ContainerSec>
    <Divider backgroundColor='black'/>
</div>
<Gallery/>
<About/>
<ContactUs/>

    </>    
    

)


export default Home;