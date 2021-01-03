import React from 'react';
import '../CSS/Composite/Console.css';
import Component from '../Constants/Component';
import PanelTitle from "../Component/PanelTitle";

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
                <ul className="console-ul">
                    {this.props.text.map((line)=>(<li className="console-li">{line}</li>))}
                </ul>
            </div>
        )
    }
}

export default Console;