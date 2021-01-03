import React from 'react';
import '../CSS/Console.css';
import { Timeline } from "antd";
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
                <Timeline>
                    {this.props.text.map((line)=>(<Timeline.Item>{line}</Timeline.Item>))}
                </Timeline>
            </div>
        )
    }
}

export default Console;