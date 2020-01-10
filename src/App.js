import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import HeonLight_Sys_Comp from "./components/HeonLight_Sys_Comp";
import REST from "./components/HeonRESTservice";


class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            HeonDataBase: {},
            id_database: ""
        }
    }

    render() {
        return (
            <div className="App" className="container">
                <div className="row">
                    <div className="col-12 bg-secondary">ONGLET SUP</div>
                    <div className="col-3 bg-primary">MENU</div>
                    <HeonLight_Sys_Comp
                    RefreshSys={(data) =>this.setState({HeonDataBase:data})}
                    HeonDataBase={this.state.HeonDataBase}
                    id_database={this.state.id_database}
                    />


                </div>

            </div>
        );
    }

    componentDidMount() {

        setInterval(() => REST.Get_Promise().then((value) => {
            this.setState({HeonDataBase: value, id_database:value.id})
        }), 2000);


    }
}

export default App;
