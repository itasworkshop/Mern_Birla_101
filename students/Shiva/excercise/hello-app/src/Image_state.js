// import React from "react";
// class ImageState extends React.Component {
//     constructor(props)
//     {
//         super(props)
//         this.state ={<img src="images/corn.jpg" alt="not found" width="100px"/>};
//         this.handleClick = this.handleClick.bind(this); // bind the data 

//     }
//     handleClick()
//     {
//         this.setState()
//     }
//     render() {
//         return (
//             <>
//             <div>
//                <h1>Change Image State</h1>
//                 {/* <img src="images/corn.jpg" alt="not found" width="100px"/>

//                 <img src="images/maggi.jpg" alt="not found" width="100px"/> */}
                
//                 <br/>
//                 <button onClick={this.handleClick}>click</button>
//             </div>
//             </>
//         )
//     }

// }
// export default ImageState;

import React, { useState } from "react";
const ImageState = () =>{
    const img = <img src="images/corn.jpg" alt="not found" width="100px"/>
     const[bg,setBg] = useState(img)
     const bgchange =() =>{
        let newimg = <img src="images/maggi.jpg" alt="not found" width="100px"/>
        setBg(newimg);
        console.log(newimg);
     }
    return (
        <>
        {bg}
        <br/>
        <button onClick={bgchange}>click</button>
        </>
    )
}
export default ImageState;