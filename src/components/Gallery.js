import {Image, Card } from'semantic-ui-react'
import Badger from './backCountry/Badger.jpg'
import React, {Component} from 'react'
import Bobcat from './backCountry/Bobcat.jpg'
import Deer1 from './backCountry/Deer1.jpg'
import Deer2 from './backCountry/Deer2.jpg'
import Deer3 from './backCountry/Deer3.jpg'
import Dipped from './backCountry/Dipped.jpg'
import Skull from './backCountry/Skull.jpg'
import Skull2 from './backCountry/Skull2.jpg'
import {SButton, } from './StyledComponents'

class Gallery extends Component {   


    state = {
        index: 0, 
        picList: [Deer1, Badger, Bobcat, Deer2, Deer3, Dipped, Skull, Skull2,]
      }
      
      onClickNext= () => {
          if (this.state.index + 1 === this.state.picList.length ){
              this.setState({ 
                  index: 0 
                })
            } else {
                this.setState({
                    index: this.state.index + 1
                })
            }

          }
          onClickPrevious= () => {
            if (this.state.index - 1 === -1 ){
                this.setState({ 
                    index: this.state.picList.length - 1
                  })
              } else {
                  this.setState({
                      index: this.state.index - 1
                  })
              }
            }
      
      render() {
        return (
            <>
            <div 
            style={{
            zIndex: "-1",
            backgroundColor: "lightGray",
            width: "100%",
            height: "100%",
            }}>

      <h2>Gallery</h2>
      <br/>
    <Card className='center'>
    <Card.Content>
    <Image src={this.state.picList[this.state.index]} style={{"maxHeight":"80%","maxWidth":"80%", boarderRadius: '10%'}} />
      <Card.Meta>
      <SButton  onClick={this.onClickPrevious}> Previous </SButton>
                <SButton onClick={this.onClickNext} > Next Slide</SButton>
                <br/>
                <br/>
      </Card.Meta>
    </Card.Content>
  </Card>
  </div>
    
        </>
        );
      }

}

  
export default Gallery;
