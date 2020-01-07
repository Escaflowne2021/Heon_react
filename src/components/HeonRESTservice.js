import React from "react";



var IPserv = "http://192.168.0.169:8080/heon"

class HeonRESTservice{


    Get_Promise = () => new Promise(resolve =>{
        let data;
        let request = new XMLHttpRequest();
        //console.log("Request");
        request.open("GET", IPserv+"/heon");
        request.onload = () => {
            let raw = request.responseText;

            data = JSON.parse(raw, ((key, value) => {
                return value;
            }));
            console.log("data" + data)
            resolve(data)
        }

        request.send();
    })

    AddHeon_Promise = (id) => new Promise(resolve => {
        let request = new XMLHttpRequest();
        console.log("Add Prmise"+ id);
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
    //console.log("Request");
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


     ModifHeon(data){
        console.log("Modif From REST Class")
        let request = new XMLHttpRequest();
        console.log(data);
        request.open("POST", IPserv+"/Modifheon");
        request.send(JSON.stringify(data))
    }




}

const REST = new HeonRESTservice();

 export default REST