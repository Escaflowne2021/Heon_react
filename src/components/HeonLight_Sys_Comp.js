import React, {Component} from "react";
import HeonLight from "./HeonLight";
import withREST from "../hoc/withREST";
import "./HeonSys.css"



    const HeonLight_Sys_Comp = (props) => {

        var HeonDataBase = {... props.HeonDataBase.data}

        const liste = Object.values(HeonDataBase)
            .map((heon) => (
                    <HeonLight
                        data={heon}
                        key={heon.id}
                        RefreshSys={props.RefreshSys}/>
                )
            )

            return (
                <div>
                    <div className="col-6 bg-light">HeonLight_Sys_Comp id:{props.HeonDataBase.id}
                    </div>
                    <div className="container">
                        {liste}
                        <button className="btn btn-success" onClick={() => props.AddHeon(props.HeonDataBase.id)
                            .then((value) => props.RefreshSys(value))}>Create Heon Sys</button>

                    </div>

                </div>
            )

        }


const WrappedComponent = withREST(HeonLight_Sys_Comp)

export default WrappedComponent

