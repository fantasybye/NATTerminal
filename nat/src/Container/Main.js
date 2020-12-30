import React from 'react';
import '../CSS/Main.css';
import Controller from "../Component/Controller";
import Terminal from "../Component/Terminal";
import Component from '../Constants/Component';

class  Main extends Component{
    render() {
        return(
            <div className="main">
                <div className="terminal">
                    <Terminal />
                </div>
                <div className="controller">
                    <Controller />
                </div>
            </div>
        )
    }
}
export default Main