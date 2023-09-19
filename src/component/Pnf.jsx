import React, { Component } from "react";

//react class component
class Pnf extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="pnf">
                <div className="jumbotron">
                    <h1 className="text-danger">Requested path not found</h1>
                </div>
            </div>
        )
    }
}
export default Pnf