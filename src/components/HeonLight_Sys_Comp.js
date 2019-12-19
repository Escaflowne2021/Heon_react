import React, {Component} from "react";
import HeonLight from "./HeonLight";


class HeonLight_Sys_Comp extends Component {

    state = {
        HeonDataBase: {}
    }

    render() {
        var HeonDataBase = {...this.state.HeonDataBase}
        const liste = Object.keys(HeonDataBase)
            .map(heon => (
                   <HeonLight
                        data={HeonDataBase[heon]}
                         key={HeonDataBase[heon].id}
                         nblight={HeonDataBase[heon].data.length}
                         id={HeonDataBase[heon].id}
                         nom={HeonDataBase[heon].name}/>
                )

            )



        return (
            <div>
                <div className="col-6 bg-light">HeonLight_Sys_Comp
                </div>
                <div className="container">{liste}</div>

            </div>
        )

    }


    componentDidMount() {

        let request = new XMLHttpRequest();
        console.log("Request");
        request.open("GET", "http://192.168.0.13:8080/heon");
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

}

export default HeonLight_Sys_Comp