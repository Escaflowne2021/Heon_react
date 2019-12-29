import React, {Component, useState} from "react";
import {HuePicker} from 'react-color'
import HeonModalParamSys from './HeonModalParamSys'


class HeonLight extends Component {


    constructor(props) {
        super(props);
        var timer = null;
        var longClcik = false;
        var allume = false;


        this.state = {

            data: this.props.data,
            color: '#fff',
            show: false

        };

        this.LightClick = this.LightClick.bind(this);
        this.MouseUp = this.MouseUp.bind(this);
        this.MouseDown = this.MouseDown.bind(this);
        this.handleSupSys = this.handleSupSys.bind(this)
        this.handleChangeHeonConf = this.handleChangeHeonConf.bind(this)

    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            data: nextProps.data,
        };
    }

    render() {

        var color = {...this.state.color};
        var data = { ... this.state.data};
        console.log(data.name)

        return (
            <div className="" onMouseDown={this.MouseDown} onMouseUp={this.MouseUp}>
                {data.id} - {data.name} - {data.data.length}
                <input type="checkbox" checked data-toggle="toggle"></input>
                <HuePicker color={color} onChange={this.handleChangeComplete}/>
                <button className="btn" onClick={this.handleSupSys}>
                    <span className="fa fa-remove"/>
                </button>
                <HeonModalParamSys id={this.props.data} data={this.props.data} onChange={this.handleChangeHeonConf}/>
            </div>
        );

    }

    handleChangeHeonConf(data) {

        var temp = {... this.state.data}
        temp.name = data.name
        this.setState({data: temp})

        this.ModifHeon(data)

    }

    ModifHeon(data){
        //console.log(JSON.stringify(data))
        let request = new XMLHttpRequest();
        //console.log("Request POST");
        request.open("POST", "http://172.20.10.2:8001/Modifheon");
        //request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        request.send(JSON.stringify(data))
    }

    handleSupSys() {
        console.log("Suppression du Syst" + this.props.id)
        //this.SupSysHeon(this.props.id);
        this.props.SupHeon(this.props.id)
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
            //this.LightClick()
        }
    }


    handleChangeComplete = (color, event) => {
        //console.log(color.rgb)
        this.setState({color: color.rgb});
        var data = {...this.props.data.data};
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

        this.PostData(this.props.data)
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
        request.open("POST", "http://172.20.10.2:8001/heon");
        //request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        request.send(JSON.stringify(data))

    }


}


export default HeonLight;


