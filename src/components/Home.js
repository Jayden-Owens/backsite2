import React from 'react'
import {Image, Grid, GridColumn, Segment, Divider } from 'semantic-ui-react'
import imageSrc from './backCountry/LogoOne.png'
import styles from './navbar.css'
import Gallery from './Gallery'
import {ContainerSec} from './StyledComponents'
import About from './About'


const Home = () =>  (

    <>
    
    <div style={{
      zIndex: "-1",
      backgroundColor: "lightGray",
      width: "100%",
      height: "100%",
    }}>

    <ContainerSec>

        <Image
        className={styles.logoCard}
        style={{width: "80%"}}
        src={imageSrc}
        />
    </ContainerSec>
    <Divider backgroundColor='black'/>
</div>
<Gallery/>
<About/>

    </>    
    

)


export default Home;