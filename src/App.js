import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import HeonLight_Sys_Comp from "./components/HeonLight_Sys_Comp";


class App extends Component {

    render() {
        return (
            <div className="App" className="container">
                <div className="row">
                    <div className="col-12 bg-secondary">ONGLET SUP</div>
                    <div className="col-3 bg-primary">MENU</div>
                    <HeonLight_Sys_Comp/>


                </div>

            </div>
        );
    }
}

export default App;
