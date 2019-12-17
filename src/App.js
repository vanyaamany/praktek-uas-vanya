import React, { Component } from "react";
import "./App.css";
import "./icon.png";


class App extends Component {
    render() {
        return (
            <div className=" wrapper with-image " >
                <div className=" Component1">
                    <h5>GO GREEN</h5>
                    <h1> <b>Make it green</b> </h1>
                </div>

                <div>
                    <p>
                        Now more than ever. Our planet is need our
                    </p>
                </div>

                <div className="Component2">
                    <div className="selengkapnya"> Do It Now</div>
                </div>


                <div className="icon">
                    <img src={"./icon.png"} alt={"icon"}
                    />
              </div>

            </div>
        )
    }
}
//function App(){
//return(

//):
//}
export default App;