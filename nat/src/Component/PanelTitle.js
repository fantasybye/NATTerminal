import React from 'react';
import  '../CSS/Component/PanelTitle.css';
import Component from '../Constants/Component';

class PanelTitle extends Component{
    render() {
        return (
            <div className="panel-title">
                <span className="panel-title-text">{this.props.name}</span>
            </div>
        )
    }
}

export default PanelTitle