import React, {Component} from 'react'

const BoxContext = React.createContext({})

class BoxDataProvider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            BoxSelected: this.props.setBoxSelected,
            VirtualLight: []

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


    addVirtualLight = (id,name) => {

    }

    addBoxSelected = (coord, isSelected, num,id_of_light_selected ) => {

        var trouve = false;
        var temp =  [...this.state.BoxSelected]
        Object.values(temp).map(box => {
            if (box.num == num) {
                box.isSelected = isSelected
                box.id = id_of_light_selected
                trouve = true

            }
        })


        if (!trouve) {

            var box = {}
            //box.type = "Graph"
            box.num = num
            var coordJson = {
               // type :"Coord",
                x: coord.x,
                y: coord.y
            }
            box.coord = coordJson
            box.isSelected = isSelected
            box.id = id_of_light_selected

            //liste.push(box)

            temp = [...temp , box]


        }
        this.setState({BoxSelected: temp})
        //this.props.BoxSelectedChange(temp)


    }


}


export {BoxContext}
export default BoxDataProvider