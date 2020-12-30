import React from 'react';
import Topology from "./Topology";
import Console from "./Console";
import '../CSS/Terminal.css';
import Component from '../Constants/Component';

class Terminal extends Component{
    render() {
        return(
            <div className='terminal'>
                <Topology />
                <Console />
            </div>
        )
    }
}

export default Terminal;