import React, {Component} from "react";
import HeonLight from "./HeonLight";


class HeonLight_Sys_Comp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            HeonDataBase: {},
            id_database: ""
        }
        this.GetonServer = this.GetonServer.bind(this)
        this.handleSupHeon = this.handleSupHeon.bind(this)
        this.AddHeonbyId = this.AddHeonbyId.bind(this)
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
                         erreur={heon.erreur_connexion}
                         SupHeon={this.handleSupHeon}
                         AddLightSys={this.handleAddLight}
                         removeID={this.SupSysOnServer}
                  />

                )

            )



        return (

            <div>
                <div className="col-6 bg-light">HeonLight_Sys_Comp {this.state.id_database}
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
        console.log("Demande d'ajout de lumiere id :"+id)
        //this.AddLightonServer(id)
        this.AddHeonbyId(id)
    }

    handleCreateSystem() {
        var HeonDataBase = {...this.state.HeonDataBase}
        console.log("Create Systeme "+this.state.id_database)
        this.AddHeonbyId(this.state.id_database)
    }

    componentDidMount() {
        let timerId = setInterval(() => this.GetonServer(), 1000);

    }



    AddHeonbyId(id){
        let request = new XMLHttpRequest();
        console.log("Add "+ id);
        request.open("POST", "http://172.20.10.2:8001/HeonAdd?id="+id);
        request.onload = () => {
            let raw = request.responseText;
            let data = JSON.parse(raw, ((key, value) => {

                return value;
            }));
            //console.log(data.data);
            this.setState({HeonDataBase: data.data});
        }
        request.send(id);

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




    GetonServer() {
        let request = new XMLHttpRequest();
        //console.log("Request");
        request.open("GET", "http://172.20.10.2:8001/heon");
        request.onload = () => {
            let raw = request.responseText;
            let data = JSON.parse(raw, ((key, value) => {

                return value;
            }));

            this.setState({id_database : data.id})
            this.setState({HeonDataBase: data.data});
        }
        request.send();
    }

}

export default HeonLight_Sys_Comp


/*AddSysOnServer(){
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

  }*/

/* AddLightonServer(id){
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
    }*/