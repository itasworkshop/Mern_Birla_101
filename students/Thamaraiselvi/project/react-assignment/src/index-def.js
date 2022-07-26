import React, { Component } from 'react';
import { render } from 'react-dom';
import image from './images/img1.jpg'
import image1 from './images/img2.jpg'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: image, 
      active: false
    };
  }
  

  render() {
    return (
      <div>
        <img src={this.state.active ? image : image1 } style={{width:"200px", height:"200px"}}  onMouseOver={() => { this.setState({src: image1, active: !this.state.active})}
        }  />
       
       
      </div>

    );
  }
}

render(<App />, document.getElementById('root'));
