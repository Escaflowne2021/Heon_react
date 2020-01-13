import React, {Component} from "react";
import DataContext from "../DataContext";


var IPserv = "http://192.168.0.13:8080"


const withREST = WrappedComponent => (

    class REST extends Component {

        static contextType = DataContext;

        AddHeon_Promise = (id,nb=1) => new Promise(resolve => {
            let request = new XMLHttpRequest();
            console.log("%cADD by HOC id: :"+ id, "font-weight: bold;color: orange");
            request.open("POST", IPserv +"/HeonAdd?id="+id+"&nb="+nb);
            request.onload = () => {
                let raw = request.responseText;
                let data = JSON.parse(raw, ((key, value) => {
                    return value;
                }));
                //console.log(data);
                this.context.RefreshData(data)
                resolve(data)
            }
            request.send(id,nb);
        })


        SuppHeon_Promise = (id,nb=0) => new Promise(resolve => {
            let request = new XMLHttpRequest();
            console.log("%cSUPP by HOC id: :"+ id, "font-weight: bold;color: orange");
            request.open("POST", IPserv +"/Supheon?id="+id+"&nb="+nb);
            request.onload = () => {
                let raw = request.responseText;
                let data = JSON.parse(raw, ((key, value) => {

                    return (value);
                }));
                this.context.RefreshData(data)
                resolve(data)
                //this.setState({HeonDataBase: data.data});
            }
            request.send(id);
        })

        ModifHeon_Promise = (heon) => new Promise(resolve => {
            let request = new XMLHttpRequest();
            console.log("%cMOD by HOC id: :"+ heon.id, "font-weight: bold;color: orange");
            request.open("POST", IPserv +"/Modifheon");
            request.onload = () => {
               let raw = request.responseText;

                let data = JSON.parse(raw, ((key, value) => {

                    return (value);
                }));
                this.context.RefreshData(data)
                resolve(data)

            }
            request.send(JSON.stringify(heon))

        })

        Get_Promise = () => new Promise(resolve =>{
            //console.log("%cGET Promise", "font-weight: bold;color: orange");
            let request = new XMLHttpRequest();
            request.open("GET", IPserv+"/heon");
            request.onload = () => {
                let raw = request.responseText;

                let data = JSON.parse(raw, ((key, value) => {
                    return value;
                }));
                //console.log(data)
                this.context.RefreshData(data)
                resolve(data)
            }

            request.send();
        })


        render() {
            //console.log("HOC REST")
            return (
                <WrappedComponent
                    AddHeon={this.AddHeon_Promise}
                    SupHeon={this.SuppHeon_Promise}
                    ModHeon={this.ModifHeon_Promise}
                    Get_Promise={this.Get_Promise}
                    {... this.props}/>
            )
        }
    }

)

export default withREST