import React, {Component} from "react";
import HeonLight from "./HeonLight";
import REST from "./HeonRESTservice"
import withREST from "../hoc/withREST";


class HeonLight_Sys_Comp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            HeonDataBase: this.props.HeonDataBase,
            id_database: ""
        }

        //this.handleSupHeon = this.handleSupHeon.bind(this)
        this.AddHeonbyId = this.AddHeonbyId.bind(this)
        //this.handleCreateSystem = this.handleCreateSystem.bind(this)
        this.SupSysOnServer = this.SupSysOnServer.bind(this)
        this.handleAddLight = this.handleAddLight.bind(this)


    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            HeonDataBase: nextProps.HeonDataBase,
        };
    }



    render() {
        var HeonDataBase = {...this.state.HeonDataBase.data}

        const liste = Object.values(HeonDataBase)
            .map((heon) => (
                    <HeonLight
                        data={heon}
                        key={heon.id}
                        nblight={heon.data.length}
                        id={heon.id}
                        nom={heon.name}
                        erreur={heon.erreur_connexion}
                        //SupHeon={this.handleSupHeon}
                        //AddLightSys={this.handleAddLight}
                        removeID={this.SupSysOnServer}
                        RefreshSys={this.props.RefreshSys}
                    />

                )
            )


        return (

            <div>
                <div className="col-6 bg-light">HeonLight_Sys_Comp id:{this.props.HeonDataBase.id}
                </div>
                <div className="container">
                    {liste}
                    <button className="btn btn-success" onClick={() => this.props.AddHeon(this.props.HeonDataBase.id)
                        .then((value) => this.props.RefreshSys(value))}>Create Heon Sys</button>

                </div>

            </div>
        )

    }



    handleAddLight(id) {
        console.log("Demande d'ajout de lumiere id :" + id)
        //this.AddLightonServer(id)
        this.AddHeonbyId(id)
    }



  /*  componentDidMount() {

        setInterval(() => REST.Get_Promise().then((value) => {
            this.setState({HeonDataBase: value.data, id_database:value.id})
        }), 1000);


    }*/


    AddHeonbyId(id) {

        REST.AddHeon_Promise(id).then((value) => this.setState({HeonDataBase: value.data}))
    }


    SupSysOnServer(id) {
        REST.SuppHeon_Promise(id).then((value => this.setState({HeonDataBase: value.data})))
    }





}

const WrappedComponent = withREST(HeonLight_Sys_Comp)

export default WrappedComponent


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

/* AddHeonbyId(id){
        let request = new XMLHttpRequest();
        console.log("Add "+ id);
        request.open("POST", "http://127.0.0.1:8001/HeonAdd?id="+id);
        request.onload = () => {
            let raw = request.responseText;
            let data = JSON.parse(raw, ((key, value) => {

                return value;
            }));
            //console.log(data.data);
            this.setState({HeonDataBase: data.data});
        }
        request.send(id);

    }*/

/*    SupSysOnServer(id){
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

     }*/

/*   handleCreateSystem() {
        var HeonDataBase = {...this.state.HeonDataBase}
        console.log("Create Systeme " + this.state.id_database)
        this.AddHeonbyId(this.state.id_database)
    }*/

/* handleSupHeon(id) {
        console.log("demande Suppression " + id)
        this.SupSysOnServer(id)
        //this.GetonServer()
    }*/