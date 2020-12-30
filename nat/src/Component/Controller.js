import React from 'react';
import '../CSS/Controller.css';
import Component from '../Constants/Component';
import PanelTitle from "./PanelTitle";

class Controller extends Component{
    constructor(props) {
        super(props);
        this.state={
            titleName: '操作台'
        }
    }
    handleClick(){

    }
    render() {
        return(
            <div>
                <PanelTitle name={this.state.titleName} />
                This is controller
            </div>
        )
    }
}

export default Controller;
