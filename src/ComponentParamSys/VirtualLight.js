import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import withREST from "../hoc/withREST";
import Form from "react-bootstrap/Form";


class VirtualLight extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name : this.props.name
        }
    }

    render()
  {  return (
        <div className={ this.props.id == this.props.id_virtual_actif ? "container bg-info":"container"}
             onClick={ this.props.onClick}
        >
            <div>
                <Form.Control defaultValue={ this.props.name} type="string"
                              placeholder="Nom de la lumière" name="nom"
                              onChange={(event)=>this.setState({name:event.target.value}) }/>

                <Button className="bg-danger" onClick={()=> { this.props.SupHeon( this.props.id)}}>
                    X
                </Button>
                <Button className="bg-success" onClick={()=> { this.props.changeName(this.state.name)}}>
                    OK
                </Button>
            </div>

        </div>

    )}
}


const WrappedComponent = withREST(VirtualLight)
export default WrappedComponent