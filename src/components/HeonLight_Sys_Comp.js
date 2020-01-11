import React, {Component} from "react";
import HeonLight from "./HeonLight";
import withREST from "../hoc/withREST";
import "./HeonSys.css"
import DataContext from "../DataContext"


const HeonLight_Sys_Comp = (props) => {

    var HeonDataBase = {...props.HeonDataBase.data}

    const liste = Object.values(HeonDataBase)
        .map((heon) => (
                <HeonLight
                    data={heon}
                    key={heon.id}
                    />
            )
        )

    return (
        <DataContext.Consumer>
            {({HeonDataBaseContext}) => (
                <>
                    <div className="col-6 bg-light">HeonLight_Sys_Comp id:{HeonDataBaseContext.id} </div>
                    <div className="container">
                        {liste}
                        <button className="btn btn-success" onClick={() => props.AddHeon(HeonDataBaseContext.id)}>
                            Create Heon Sys
                        </button>

                    </div>
                </>
            )}


        </DataContext.Consumer>
    )

}


const WrappedComponent = withREST(HeonLight_Sys_Comp)

export default WrappedComponent

