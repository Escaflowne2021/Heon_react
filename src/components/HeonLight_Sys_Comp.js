import React, {Component} from "react";
import HeonLight from "./HeonLight";


class HeonLight_Sys_Comp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            HeonDataBase: {}
        }
        this.GetonServer = this.GetonServer.bind(this)
        this.handleSupHeon = this.handleSupHeon.bind(this)
        this.AddSysOnServer = this.AddSysOnServer.bind(this)
        this.handleCreateSystem = this.handleCreateSystem.bind(this)
        this.SupSysOnServer = this.SupSysOnServer.bind(this)
        this.handleAddLight = this.handleAddLight.bind(this)
    }





    render() {
        var HeonDataBase = {...this.state.HeonDataBase}

        const liste = Object.values(HeonDataBase)
            .map((heon) => (
                   <HeonLight
                         data={heon}
                         key={heon.id}
                         nblight={heon.data.length}
                         id={heon.id}
                         nom={heon.name}
                         SupHeon={this.handleSupHeon}
                         AddLightSys={this.handleAddLight}
                  />

                )

            )



        return (

            <div>
                <div className="col-6 bg-light">HeonLight_Sys_Comp
                </div>
                <div className="container">
                    {liste}
                    <button className="btn btn-success" onClick= {this.handleCreateSystem}>Create Heon Sys</button>

                </div>

            </div>
        )

    }

    handleSupHeon(id) {
        console.log("demande Suppression "+id)
        this.SupSysOnServer(id)
        //this.GetonServer()
    }

    handleAddLight(id) {
        console.log("Demande d'ajout de lumiere id:"+id)
        this.AddLightonServer(id)
    }

    handleCreateSystem() {
        console.log("Create Systeme")
        this.AddSysOnServer()
    }

    componentDidMount() {
        let timerId = setInterval(() => this.GetonServer(), 1000);



    }

    AddSysOnServer(){
        let request = new XMLHttpRequest();
        //console.log("Request");
        request.open("GET", "http://172.20.10.2:8001/AddSysheon");
        request.onload = () => {
            let raw = request.responseText;
            let data = JSON.parse(raw, ((key, value) => {

                return value;
            }));
            console.log(data.data);
            this.setState({HeonDataBase: data.data});
        }
        request.send();

    }

    SupSysOnServer(id){
        let request = new XMLHttpRequest();
        //console.log("Request");
        request.open("POST", "http://172.20.10.2:8001/Supheon?id="+id);

        request.onload = () => {
            let raw = request.responseText;
            let data = JSON.parse(raw, ((key, value) => {

                return value;
            }));
            console.log(data.data);
            this.setState({HeonDataBase: data.data});
        }
        request.send(id);

    }


    AddLightonServer(id){
        let request = new XMLHttpRequest();
        console.log("Request");
        request.open("POST", "http://172.20.10.2:8001/HeonAddLight?id="+id);

        request.onload = () => {
            let raw = request.responseText;
            let data = JSON.parse(raw, ((key, value) => {

                return value;
            }));
            console.log("Ajout de lumiere")
            console.log(data.data);
            this.setState({HeonDataBase: data.data});
        }
        request.send(id);
    }

    GetonServer() {
        let request = new XMLHttpRequest();
        //console.log("Request");
        request.open("GET", "http://172.20.10.2:8001/heon");
        request.onload = () => {
            let raw = request.responseText;
            let data = JSON.parse(raw, ((key, value) => {

                return value;
            }));
            //console.log(data.data);
            this.setState({HeonDataBase: data.data});
        }
        request.send();
    }

}

export default HeonLight_Sys_Comp