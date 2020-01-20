import React, {Component, useState} from "react";
import {HuePicker} from 'react-color'
import HeonModalParamSys from './HeonModalParamSys'
import HeonModalControlLight from '../ComponentLightControl/HeonModalControlLight'
import withREST from "../hoc/withREST";
import BoxDataProvider from "../ComponentParamSys/BoxContext";



class HeonLight extends Component {


    constructor(props) {
        super(props);

        this.state = {

            data: this.props.data,
            color: '#fff',
            show: false,
            showControleLight: false

        };

        this.LightClick = this.LightClick.bind(this);
        this.MouseUp = this.MouseUp.bind(this);
        this.MouseDown = this.MouseDown.bind(this);
        this.handleChangeComplete = this.handleChangeComplete.bind(this)

    }

    static getDerivedStateFromProps(nextProps, prevState) {
        //console.log(prevState.data.data[0].id +"/"+ prevState.data.data[1].id)
        return {
            data: nextProps.data,
        };
    }


    render() {

        var color = {...this.state.color};
        var data = { ... this.state.data};


        return (

            <BoxDataProvider setBoxSelected={data.DataGraph}>

            <div className="bg-success mx-auto" onMouseDown={this.MouseDown} onMouseUp={this.MouseUp}>

                        Sys  {data.id} - {data.name} - {data.data.length} {data.erreur_connexion?"- ERREUR" : ""}

                        <HuePicker color={color} onChangeComplete={this.handleChangeComplete}/>
                        <button className="btn" onClick={() => this.props.SupHeon(data.id)}>
                            <span className="fa fa-remove"/>
                        </button>
                        <HeonModalParamSys
                            data={this.props.data}

                        />
                        <HeonModalControlLight
                            show={this.state.showControleLight}
                            onHide={()=>{this.setState({showControleLight:false})}}
                            data={this.props.data}

                        />


                    </div>
            </BoxDataProvider>



        );

    }



    MouseDown() {
        this.longClcik = false;
        //console.log("Debut du timer");
        this.timer = setTimeout(() => {
            console.log("Fin timer");
            this.longClcik = true;
            this.setState({showControleLight: true})
        }, 1000)

    }

    MouseUp() {
        clearTimeout(this.timer);
        if (this.longClcik) {
            //console.log("COOOL")

        } else {
            //this.LightClick()
        }
    }


    handleChangeComplete (color) {
       /*
        this.setState({color: color.rgb});
        var data = {...this.props.data.data};*/



       /* var light = Object.keys(data).map((i) => {
            //PIXEL
            var pixel = {...data[i].data};
            //console.log(pixel)
            Object.keys(pixel).map((ii) => {
                    pixel[ii].g = color.g;
                    pixel[ii].r = color.r;
                    pixel[ii].b = color.b;
                }
            )
        });*/
        //console.log(color.rgb)
        this.props.SetLight(this.props.data.id,color.rgb.r,color.rgb.g,color.rgb.b)
        //this.PostData(this.props.data)

        //REST.ModifHeon(this.props.data)
    };


    LightClick() {
        var data = {...this.props.data.data};
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
        this.PostData(this.props.data)

    }



    PostData(data) {
        //console.log(JSON.stringify(data))
        let request = new XMLHttpRequest();
        //console.log("Request POST");

        request.open("POST", "http://192.168.0.169:8080/heon");

        //request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        request.send(JSON.stringify(data))

    }


}

const WrappedComponent = withREST(HeonLight)

export default WrappedComponent;



/*
handleChangeHeonConf(data) {

    var temp = {... this.state.data}
    temp.name = data.name
    this.setState({data: temp})

    //this.ModifHeon(data)
    console.log("Modif")
    REST.ModifHeon(data)

}*/

/*
addLight(id) {
    this.props.AddLightSys(id)
}*/
