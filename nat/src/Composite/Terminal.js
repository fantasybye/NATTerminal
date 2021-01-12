import React from 'react';
import Topology from "./Topology";
import Config from "./Config";
// import Console from "./Console";
import '../CSS/Composite/Terminal.css';
import Component from '../Constants/Component';

class Terminal extends Component{
    render() {
        return(
            <div className='terminal'>
                <Topology />
                {/*<Console text={this.props.text}/>*/}
                <Config onFinish={this.props.onFinish} config={this.props.config}/>
            </div>
        )
    }
}

export default Terminal;