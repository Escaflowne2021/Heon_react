import React from "react";
import Button from "react-bootstrap/Button";
import withREST from "../hoc/withREST";


const VirtualLight = (props) => {
    return (
        <div className={props.id == props.id_virtual_actif ? "container bg-info":"container"}
             onClick={props.onClick}
        >
            <div>
                <div >{props.id}</div>
                <Button className="bg-danger" onClick={()=> {props.SupHeon(props.id)}}>
                    X
                </Button>
            </div>

        </div>

    )
}


const WrappedComponent = withREST(VirtualLight)
export default WrappedComponent