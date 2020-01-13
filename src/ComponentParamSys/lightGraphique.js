import React, {Component} from "react";
import "./Graph.scss"

class LightGraphique extends Component {

    constructor(props) {
        super(props);


        this.state ={


        }


    }

    render() {
        var liste = []
         for(let i = 0 ; i < 100 ; i++){
            liste.push(<div className="box" onClick={() => this.boxClick(i)}>{i} </div>)
        }

        return(
            <div className="grid">
                {liste}
                <div className="spec">S</div>


            </div>
        )
    }

    boxClick(i){
        console.log("click on "+i)
    }
}

export default LightGraphique