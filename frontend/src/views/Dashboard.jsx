import React from "react";
import GlobalContext from '../context/GlobalContext'
import axios from "axios";

class Dashboard extends React.Component {
    static contextType = GlobalContext;

    // async componentDidMount() {
    //   const {image1, image2, setImage2 } = this.context
    //   if (!image2 || image1) {
    //     let newImg2 = ""
    //     await axios.get('/getfoo1')
    //       .then((response) => {
    //         console.log(response)
    //         newImg2 = response.data
    //     }).catch(error => {
    //       console.log(error)
    //     })
    //     setImage2(newImg2)
    //   }
    // }
   
    render() {
      const { image1, image2, setImage2 } = this.context
        return (
          <div className="content">
          {/* {image1 && image2 ? */}
          {image1 ?
            <div className="container">
              <img src={"data:image/png;base64," +  image1 } alt="1"/>
              {/* <img src={"data:image/png;base64," +  image2 } alt="2"/> */}
            </div> : 
            <div className="row">
              <h3>Please add stocks to cart and run script to view results</h3>
              </div>
                }
          </div>
                
        );
    }
}

export default Dashboard;
