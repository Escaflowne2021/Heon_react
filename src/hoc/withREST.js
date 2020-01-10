import React, {Component} from "react";


var IPserv = "http://192.168.0.169:8080"

const withREST = WrappedComponent => (
    class REST extends Component {

        AddHeon_Promise = (id) => new Promise(resolve => {
            let request = new XMLHttpRequest();
            console.log("%cADD by HOC id: :"+ id, "font-weight: bold;color: orange");
            request.open("POST", IPserv +"/HeonAdd?id="+id);
            request.onload = () => {
                let raw = request.responseText;
                let data = JSON.parse(raw, ((key, value) => {
                    return value;
                }));
                console.log(data);

                resolve(data)
            }
            request.send(id);
        })


        SuppHeon_Promise = (id) => new Promise(resolve => {
            let request = new XMLHttpRequest();
            console.log("%cSUPP by HOC id: :"+ id, "font-weight: bold;color: orange");
            request.open("POST", IPserv +"/Supheon?id="+id);
            request.onload = () => {
                let raw = request.responseText;
                let data = JSON.parse(raw, ((key, value) => {

                    return (value);
                }));

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
                //console.log(data)
                resolve(data)

            }
            request.send(JSON.stringify(heon))

        })

        ModifHeon(data){
            console.log("%cMOD by HOC id: :"+ data.id, "font-weight: bold;color: orange");
            let request = new XMLHttpRequest();
            console.log(data);
            request.open("POST", IPserv+"/Modifheon");
            request.send(JSON.stringify(data))






        }



        render() {
            //console.log("HOC REST")
            return (
                <WrappedComponent
                    AddHeon={this.AddHeon_Promise}
                    SupHeon={this.SuppHeon_Promise}
                    ModHeon={this.ModifHeon_Promise}
                    RefreshSys={this.props.RefreshSys}
                    {... this.props}/>
            )
        }
    }

)

export default withREST