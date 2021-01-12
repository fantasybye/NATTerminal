import React from 'react';
import ReactComponent from "../Constants/Component";
import '../CSS/Component/Modal.css'
import '../CSS/Component/Button.css'
import {Form, Input} from "antd";

class Modal extends ReactComponent{
    constructor(props) {
        super(props);
        this.state={ }
    }

    render() {
        const {id, title,text,staticNat, dynamicNat} = this.props
        return(
            <div>
                <div className='modal-mask'/>
                <div className='modal-wrap'>
                    <div tabIndex={-1} className='modal' >
                        <div className="modal-title">{title}</div>
                        <div className='static-nat-modal'>
                            {id === 1 ?
                                <div className='static-nat-modal modal-content'>
                                    <Form
                                        initialValues={{
                                            static0from: staticNat[0].from,
                                            static0to: staticNat[0].to,
                                            static1from: staticNat[1].from,
                                            static1to: staticNat[1].to
                                        }}
                                        onFinish={this.props.staticConfirm}
                                    ><div className="modal-text-wrap">
                                            <Form.Item
                                                label="from"
                                                name="static0from"
                                            >
                                                <Input className="modal-input"/>
                                            </Form.Item>
                                            <Form.Item
                                                label="to"
                                                name="static0to"
                                            >
                                                <Input className="modal-input"/>
                                            </Form.Item>
                                            <Form.Item
                                                label="from"
                                                name="static1from"
                                            >
                                                <Input className="modal-input"/>
                                            </Form.Item>
                                            <Form.Item
                                                label="to"
                                                name="static1to"
                                            >
                                                <Input className="modal-input"/>
                                            </Form.Item>
                                        </div>
                                        <div className="modal-bottom">
                                            <button className="controller-button modal-button" type='submit' >{this.props.modalButton}</button>
                                        </div>
                                    </Form>
                                </div> : (id === 3 ? <div className='dynamic-nat-modal modal-content'>
                                    <Form
                                        initialValues={{
                                            dynamicFrom: dynamicNat.from,
                                            dynamicTo: dynamicNat.to,
                                            dynamicMask:dynamicNat.mask
                                        }}
                                        onFinish={this.props.dynamicConfirm}
                                    ><div className="modal-text-wrap">
                                        <Form.Item
                                            label="from"
                                            name="dynamicFrom"
                                        >
                                            <Input className="modal-input"/>
                                        </Form.Item>
                                        <Form.Item
                                            label="to"
                                            name="dynamicTo"
                                        >
                                            <Input className="modal-input"/>
                                        </Form.Item>
                                        <Form.Item
                                            label="mask"
                                            name="dynamicMask"
                                        >
                                            <Input className="modal-input"/>
                                        </Form.Item>
                                    </div>
                                        <Form.Item>
                                            <div className="modal-bottom">
                                                <button className="controller-button modal-button" type='submit' >{this.props.modalButton}</button>
                                            </div>
                                        </Form.Item>
                                    </Form>
                                </div> : <div className='common-modal modal-content'>
                                    <div className="modal-text-wrap">
                                        <p className="modal-text">{text}</p>
                                    </div>
                                    <div className="modal-bottom">
                                        <button className="controller-button modal-button" type='submit' onClick={()=>{this.props.closeModal()}}>OK</button>
                                    </div>
                                </div>)}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Modal