import React, {Component} from "react";


class HeonLight_Sys_Comp extends Component {

    state = {
        HeonDataBase: {}
    }

    render() {
        var HeonDataBase = {...this.state.HeonDataBase}
        const liste = Object.keys(HeonDataBase)
            .map(heon => (
                    <div key={HeonDataBase[heon].id}> {HeonDataBase[heon].name} / {HeonDataBase[heon].data.length} </div>
                )

            )
        var k = this.state.HeonDataBase.data


        return (
            <div>
                <div className="col-6 bg-light">HeonLight_Sys_Comp
                </div>
                <div>{liste}</div>

            </div>
        )

    }

    GetHeonBase() {
        console.log("HeonLight")
        let result = new Promise(((resolve, reject) => {
                let request = new XMLHttpRequest();
                console.log("Request");
                request.open("GET", "http://192.168.0.13:8080/heon");
                request.onreadystatechange = () => {
                    let raw = request.responseText;

                    let HeonDataBase = JSON.parse(raw);
                    console.log(HeonDataBase);
                    resolve(HeonDataBase);

                    this.setState({HeonDataBase});
                }
                request.send();
            })
        );
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