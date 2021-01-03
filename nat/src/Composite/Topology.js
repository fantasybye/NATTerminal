import React from 'react';
import PanelTitle from "../Component/PanelTitle";
import topologyImg from "../Image/topology.png";
import '../CSS/Composite/Topology.css';
import Component from '../Constants/Component';

class Topology extends Component{
    constructor(props) {
        super(props);
        this.state={
            titleName:'拓扑图'
        }
    }
    render() {
        return(
            <div className="topology">
                <PanelTitle name={this.state.titleName} />
                <div className='topology-img-wrapper'>
                    <img alt="" src={topologyImg}/>
                </div>
            </div>
        )
    }
}

export default Topology;