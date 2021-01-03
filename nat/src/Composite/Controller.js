import React from 'react';
import '../CSS/Controller.css';
import { Button } from "antd";
import Component from '../Constants/Component';
import PanelTitle from "../Component/PanelTitle";

class Controller extends Component{
    constructor(props) {
        super(props);
        this.state={
            titleName: '操作台',
            buttonList:[
                {
                    id:0,
                    name:"配置路由器信息",
                },
                {
                    id:1,
                    name:"配置静态NAT",
                },
                {
                    id:2,
                    name:"删除静态NAT",
                },
                {
                    id:3,
                    name:"配置动态NAT",
                },
                {
                    id:4,
                    name:"监控NAT转换",
                },
                {
                    id:5,
                    name:"核验NAT配置",
                }
            ]
        }
    }

    render() {
        return(
            <div>
                <PanelTitle name={this.state.titleName} />
                <span className="controller-title">控制按钮</span>
                {this.state.buttonList.map((item)=>(
                <div className="controller-button-wrapper" key={item.id}>
                    <Button shape="round" size="large" onClick={()=>{this.props.handleClick(item.id)}}>{item.name}</Button>
                </div>))}
            </div>
        )
    }
}

export default Controller;
