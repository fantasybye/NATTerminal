import React from 'react'
import { Form, Input } from "antd";
import Component from "../Constants/Component"
import PanelTitle from "../Component/PanelTitle";
import "../CSS/Composite/Config.css"
import "../CSS/Component/Button.css"

class Config extends Component{
    constructor(props) {
        super(props);
        this.state={
            titleName:'路由配置'
        }
    }
    render() {
        return(
            <div className="config">
                <PanelTitle name={this.state.titleName} />
                <Form
                    className="config_form"
                    initialValues={{
                        rtaF0Ip: this.props.config.rta[0].ip,
                        rtaF0Mask: this.props.config.rta[0].mask,
                        rtaS0Ip: this.props.config.rta[1].ip,
                        rtaS0Mask: this.props.config.rta[1].mask,
                        rtbF0Ip:this.props.config.rtb[0].ip,
                        rtbF0Mask:this.props.config.rtb[0].mask,
                        rtbS0Ip:this.props.config.rtb[1].ip,
                        rtbS0Mask:this.props.config.rtb[1].mask,
                        rtcF0Ip:this.props.config.rtc[0].ip,
                        rtcF0Mask:this.props.config.rtc[0].mask,
                        pcaIp:this.props.config.pca.ip,
                        pcaMask:this.props.config.pca.mask,
                        pcbIp:this.props.config.pcb.ip,
                        pcbMask:this.props.config.pcb.mask
                    }}
                    onFinish={this.props.onFinish}
                >
                    <div className="columns">
                        <div className='column'>
                            <p className="column-title">RTA</p>
                            <p className='port'>f0/0</p>
                            <Form.Item
                                label="ip:"
                                name="rtaF0Ip"
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="mask:"
                                name="rtaF0Mask"
                            >
                                <Input />
                            </Form.Item>
                            <p className='port'/>
                            <p className='port'>s0/0/0</p>
                            <Form.Item
                                label="ip:"
                                name="rtaS0Ip"
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="mask:"
                                name="rtaS0Mask"
                            >
                                <Input />
                            </Form.Item>
                        </div>
                        <div className='column'>
                            <p className="column-title">RTB</p>
                            <p className='port'>f0/0</p>
                            <Form.Item
                                label="ip:"
                                name="rtbF0Ip"
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="mask:"
                                name="rtbF0Mask"
                            >
                                <Input />
                            </Form.Item>
                            <p className='port'/>
                            <p className='port'>s0/0/0</p>
                            <Form.Item
                                label="ip:"
                                name="rtbS0Ip"
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="mask:"
                                name="rtbS0Mask"
                            >
                                <Input />
                            </Form.Item>
                        </div>
                        <div className='column'>
                            <p className="column-title">RTC</p>
                            <p className='port'>f0/0</p>
                            <Form.Item
                                label="ip:"
                                name="rtcF0Ip"
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="mask:"
                                name="rtcF0Mask"
                            >
                                <Input />
                            </Form.Item>
                        </div>
                        <div className='column'>
                            <p className="column-title">PCA</p>
                            <p className='port'/>
                            <Form.Item
                                label="ip:"
                                name="pcaIp"
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                label="mask:"
                                name="pcaMask"
                            >
                                <Input />
                            </Form.Item>
                            <p className='port'/>
                            <p className="column-title">PCB</p>
                            <Form.Item
                                label="ip:"
                                name="pcbIp"
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="mask:"
                                name="pcbMask"
                            >
                                <Input />
                            </Form.Item>
                        </div>
                    </div>
                <div className="submit-wrapper">
                    <Form.Item>
                        <button className="submit-button controller-button" type="submit">
                            确  认
                        </button>
                    </Form.Item>
                </div>
            </Form>
            </div>
        )
    }
}

export default Config;