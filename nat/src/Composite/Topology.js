import React from 'react';
import PanelTitle from "../Component/PanelTitle";
import topologyImg from "../Image/topology.png";
import '../CSS/Composite/Topology.css';
// import routerImg from "../Image/router.png";
// import pcImg from "../Image/pc.png";
import Component from '../Constants/Component';

class Topology extends Component{
    constructor(props) {
        super(props);
        this.state={
            titleName:'拓扑图',
            routerText:[]
        }
    }
    render() {
        return(
            <div className="topology">
                <PanelTitle name={this.state.titleName} />
                <div className='topology-img-wrapper'>
                    <img alt="" src={topologyImg}/>
                </div>
                {/*<div className='topology-wrapper'>*/}
                {/*    <div className="router-wrapper" id="rta-wrapper">*/}
                {/*        <img id="rta" className="router" alt="" src={routerImg}/>*/}
                {/*        <p id="rta-text" className="topo-text">RTA</p>*/}
                {/*        {this.props.config.rta.map((item) =>{*/}
                {/*            return(*/}
                {/*                <ul key={`rta${item.id}`} className="router-info">*/}
                {/*                    <li>{item.port}</li>*/}
                {/*                    <li>{item.ip}</li>*/}
                {/*                    <li>{item.mask}</li>*/}
                {/*                </ul>*/}
                {/*            )*/}
                {/*        })}*/}
                {/*    </div>*/}
                {/*    <div className="router-wrapper" id="rtb-wrapper">*/}
                {/*        <img id="rtb" className="router" alt="" src={routerImg}/>*/}
                {/*        <p id="rtb-text" className="topo-text">RTA</p>*/}
                {/*        {this.props.config.rtb.map((item) =>{*/}
                {/*            return(*/}
                {/*                <ul key={`rtb${item.id}`} className="router-info">*/}
                {/*                    <li>{item.port}</li>*/}
                {/*                    <li>{item.ip}</li>*/}
                {/*                    <li>{item.mask}</li>*/}
                {/*                </ul>*/}
                {/*            )*/}
                {/*        })}*/}
                {/*    </div>*/}
                {/*    <div className="router-wrapper" id="rtc-wrapper">*/}
                {/*        <img id="rtc" className="router" alt="" src={routerImg}/>*/}
                {/*        <p id="rtc-text" className="topo-text">RTA</p>*/}
                {/*        {this.props.config.rtc.map((item) =>{*/}
                {/*            return(*/}
                {/*                <ul key={`rtc${item.id}`} className="router-info">*/}
                {/*                    <li>{item.port}</li>*/}
                {/*                    <li>{item.ip}</li>*/}
                {/*                    <li>{item.mask}</li>*/}
                {/*                </ul>*/}
                {/*            )*/}
                {/*        })}*/}
                {/*    </div>*/}
                {/*    <div className="pc-wrapper" id="pca-wrapper">*/}
                {/*        <img id="pca" className="pc" alt="" src={pcImg}/>*/}
                {/*        <p id="pca-text" className="topo-text">PCA</p>*/}
                {/*        <ul className="pc-info">*/}
                {/*            <li>{this.props.config.pca.ip}</li>*/}
                {/*            <li>{this.props.config.pca.mask}</li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*    <div className="pc-wrapper" id="pcb-wrapper">*/}
                {/*        <img id="pcb" className="pc" alt="" src={pcImg}/>*/}
                {/*        <p id="pcb-text" className="topo-text">PCB</p>*/}
                {/*        <ul className="pc-info">*/}
                {/*            <li>{this.props.config.pcb.ip}</li>*/}
                {/*            <li>{this.props.config.pcb.mask}</li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default Topology;