import React, {Component} from "react";
import { HuePicker } from 'react-color'





var allume = false

class HeonLight extends Component {

    constructor(props) {
        super();
        this.state = {
            nom : props.nom,
            data : props.data,
            nblight : props.nblight,
            color: '#fff'
        }
        this.LightClick = this.LightClick.bind(this)
    }

    render() {
        var data = { ... this.state.data}
        var nom = { ... this.state.nom}
        var nblight = { ... this.state.nblight}


        //console.log(data)
        return (
            <button className="btn btn-danger"
                    //onClick={this.LightClick}
                >
                {this.state.nom} - {this.state.nblight}<HuePicker color={this.state.color}  onChange={this.handleChangeComplete }/>
            </button>
            )

    }
    handleChangeComplete = (color, event)=>{
        //console.log(color.rgb)
        this.setState({ color: color.rgb });
        var data = { ... this.state.data.data}
        var color = { ... this.state.color}
        // var allume = { ... this.state.allume}
        var light =  Object.keys(data).map((i) => {
            //PIXEL
            var pixel = { ... data[i].data}
            //console.log(pixel)
            Object.keys(pixel).map((ii) => {
                    pixel[ii].g = color.g
                    pixel[ii].r =  color.r
                    pixel[ii].b =  color.b
                }

            )
        })

        this.PostData(this.state.data)
    }


    LightClick() {
        var data = { ... this.state.data.data}
        var color = { ... this.state.color}
       // var allume = { ... this.state.allume}
        var light =  Object.keys(data).map((i) => {
           //PIXEL
           var pixel = { ... data[i].data}
           //console.log(pixel)
           Object.keys(pixel).map((ii) => {
               pixel[ii].g = allume ? 0 : color.g
               pixel[ii].r = allume  ? 0 : color.r
               pixel[ii].b = allume  ? 0 : color.b
               }

           )
        })
       // console.log(allume)
        allume = !allume
        this.PostData(this.state.data)






    }

    PostData(data){
         //console.log(JSON.stringify(data))
         let request = new XMLHttpRequest();
         //console.log("Request POST");
         request.open("POST", "http://192.168.0.13:8080/heon");
         //request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
         request.send(JSON.stringify(data))

        // axios({
        //     method: "post",
        //     url: "http://192.168.0.13:8080/heon",
        //     body: {
        //         id : "COOOL ID"}
        //
        //
        // })

    }

}



export default HeonLight;


