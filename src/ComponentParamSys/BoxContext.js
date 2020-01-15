import React, {Component} from 'react'

const BoxContext = React.createContext({})

class BoxDataProvider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            BoxSelected: [],

        }

    }


    render() {

        return (
            <BoxContext.Provider
                value={
                    {
                        addBoxSelected: this.addBoxSelected,
                        setBoxSelected: (value) => {
                            this.setState({BoxSelected: value})
                        },
                        BoxSelected: this.state.BoxSelected,
                    }
                }>
                {this.props.children}
            </BoxContext.Provider>
        )
    }

    addBoxSelected = (value) => {
        console.info("ADD BOX SELECTED " + value)
    }


}


export {BoxContext}
export default BoxDataProvider