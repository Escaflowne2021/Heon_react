import React from "react";

class HeonRESTservice{

     ModifHeon(data){

        let request = new XMLHttpRequest();
        //console.log("Request POST");
        request.open("POST", "http://172.20.10.2:8001/Modifheon");
        //request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        const t = JSON.stringify(data)
        //console.log("JSON : " + t)
        request.send(t)
    }

}

const REST = new HeonRESTservice();

 export default REST