import React, {Component} from "react";
import {HuePicker} from 'react-color'



class HeonLight extends Component {


    constructor(props) {
        super();
        var timer = null;
        var longClcik = false;
        var allume = false;


        this.state = {
            nom: props.nom,
            data: props.data,
            nblight: props.nblight,
            color: '#fff'

        };

        this.LightClick = this.LightClick.bind(this);
        this.MouseUp = this.MouseUp.bind(this);
        this.MouseDown = this.MouseDown.bind(this);
    }

    render() {
        var data = {...this.state.data};
        var nom = {...this.state.nom};
        var nblight = {...this.state.nblight};
        var color = {...this.state.color};


        //console.log(data)
        return (
            <button className="btn btn-danger" onMouseDown={this.MouseDown} onMouseUp={this.MouseUp}>
                {nom} - {nblight}
                <HuePicker color={color}  onChange={this.handleChangeComplete }/>

            </button>
        );

    }

    MouseDown() {
        this.longClcik = false;
        console.log("Debut du timer");
        this.timer = setTimeout(() => {
            console.log("Fin timer");
            this.longClcik = true;
        }, 1000)

    }

    MouseUp() {
        clearTimeout(this.timer);
        if (this.longClcik) {
            console.log("COOOL")

        } else {
            this.LightClick()
        }
    }


    handleChangeComplete = (color, event) => {
        //console.log(color.rgb)
        this.setState({color: color.rgb});
        var data = {...this.state.data.data};
        var color = {...this.state.color};
        // var allume = { ... this.state.allume}
        var light = Object.keys(data).map((i) => {
            //PIXEL
            var pixel = {...data[i].data};
            //console.log(pixel)
            Object.keys(pixel).map((ii) => {
                    pixel[ii].g = color.g;
                    pixel[ii].r = color.r;
                    pixel[ii].b = color.b;
                }
            )
        });

        this.PostData(this.state.data)
    };


    LightClick() {
        var data = {...this.state.data.data};
        var color = {...this.state.color};
        // var allume = { ... this.state.allume}
        var light = Object.keys(data).map((i) => {
            //PIXEL
            var pixel = {...data[i].data};
            //console.log(pixel)
            Object.keys(pixel).map((ii) => {
                    pixel[ii].g = this.allume ? 0 : color.g;
                    pixel[ii].r = this.allume ? 0 : color.r;
                    pixel[ii].b = this.allume ? 0 : color.b;
                }
            )
        });
        console.log(this.allume);
        this.allume = !this.allume;
        this.PostData(this.state.data)

    }

    PostData(data) {
        //console.log(JSON.stringify(data))
        let request = new XMLHttpRequest();
        //console.log("Request POST");
        request.open("POST", "http://192.168.0.13:8080/heon");
        //request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        request.send(JSON.stringify(data))

    }

}


export default HeonLight;


