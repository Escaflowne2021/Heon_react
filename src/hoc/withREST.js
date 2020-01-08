import React, {Component} from "react";


var IPserv = "http://192.168.0.169:8080"

const withREST = WrappedComponent => (
    class REST extends Component {

        AddHeon_Promise = (id) => new Promise(resolve => {
            let request = new XMLHttpRequest();
            console.log("%cADD by HOC id: :"+ id, "background: lightblue");
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
            console.log("%cSUPP by HOC id: :"+ id, "background: lightblue");
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

        render() {
            //console.log("HOC REST")
            return (
                <WrappedComponent
                    AddHeon={this.AddHeon_Promise}
                    SupHeon={this.SuppHeon_Promise}
                    RefreshSys={this.props.RefreshSys}
                    {... this.props}/>
            )
        }
    }

)

export default withREST