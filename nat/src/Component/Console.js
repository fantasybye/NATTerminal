import React from 'react';
import '../CSS/Console.css';
import Component from '../Constants/Component';
import PanelTitle from "./PanelTitle";

class Console extends Component{
    constructor(props, context) {
        super(props, context);
        this.state={
            titleName:'控制台'
        }
    }
    render() {
        return(
            <div className='console'>
                <PanelTitle name={this.state.titleName} />
                <div>This is console</div>
            </div>
        )
    }
}

export default Console;