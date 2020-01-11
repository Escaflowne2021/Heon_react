import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import HeonLight_Sys_Comp from "./components/HeonLight_Sys_Comp";
import REST from "./components/HeonRESTservice";
import DataContext from "./DataContext"


class App extends Component {

    static contextType = DataContext;


    constructor(props) {
        super(props)

        this.state = {
            HeonDataBaseContext: "eeee",
            id_database: "",
            RefreshData: this.RefreshData
        }
    }

    render() {
        return (
            <DataContext.Provider value={this.state}>
                <div className="App" className="container">
                    <div className="row">
                        <div className="col-12 bg-secondary">Onglet SUp</div>
                        <div className="col-3 bg-primary">MENU</div>
                        <HeonLight_Sys_Comp
                            RefreshSys={(data) => this.setState({HeonDataBase: data})}
                            HeonDataBase={this.state.HeonDataBaseContext}
                            //id_database={data.HeonDataBase.id}
                        />
                    </div>
                </div>
            </DataContext.Provider>

        );
    }
    RefreshData = (New_data)=>{
        console.log(New_data)
        this.setState({HeonDataBaseContext:New_data})
    }

    componentDidMount() {
        setInterval(() => REST.Get_Promise().then((value) => {
            this.setState({HeonDataBaseContext: value, id_database: value.id})}), 2000);
    }
}

export default App;
