import React from 'react';
import '../CSS/Composite/Controller.css';
import Button from "../Component/Button";
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
                    name:'配置路由器',
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
                {/*<span className="controller-title">控制按钮</span>*/}
                <div className="controller-button-list">
                    {this.state.buttonList.map((item)=>(
                        <Button key={item.id} value={item} handleClick={this.props.handleClick}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Controller;
