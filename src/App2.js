import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import HeonLight_Sys_Comp from "./components/HeonLight_Sys_Comp";
import REST from "./components/HeonRESTservice";
import DataContext from "./DataContext"

class App extends Component{

    render() {
        let t = this.context
        t.HeonDataBase="aazaaz"
        return (
            <DataContext.Provider>
                <div>{t.HeonDataBase}</div>
            </DataContext.Provider>
        )
    }




}

App.contextType = DataContext;

export default App;
