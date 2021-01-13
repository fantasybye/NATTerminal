import React from 'react';
import '../CSS/Main.css';
import Controller from "../Composite/Controller";
import Terminal from "../Composite/Terminal";
import Component from '../Constants/Component';
import Modal from "../Component/Modal"
import config from "../Constants/router_config";
import staticNat from "../Constants/static_nat";
import dynamicNat from "../Constants/dynamic_nat";

class  Main extends Component{
    constructor(props, context) {
        super(props, context);
        this.state={
            id:0,
            modalShow:false,
            modalText:"",
            modalContent:"",
            modalButton:"OK",
            config,
            staticNat,
            dynamicNat,
            terminalText:[],
        }
    }
    onFinish=(values)=>{
        console.log("success",values)
        const config={
            rta:[{
                id:0,
                port:'f0/0',
                ip:values.rtaF0Ip,
                mask:values.rtaF0Mask
            }, {
                id:1,
                port: "s0/0/0",
                ip:values.rtaS0Ip,
                mask:values.rtaS0Mask
            }],
            rtb:[{
                id:0,
                port:'f0/0',
                ip:values.rtbF0Ip,
                mask:values.rtbF0Mask
            },{
                id:1,
                port:'s0/0/0',
                ip:values.rtbS0Ip,
                mask:values.rtbS0Mask
            }],
            rtc:[{
                id:0,
                port:'f0/0',
                ip:values.rtcF0Ip,
                mask:values.rtcF0Mask
            }],
            pcb:{
                ip:values.pcaIp,
                mask:values.pcaMask
            },
            pca:{
                ip:values.rtaF0Ip,
                mask:values.rtaF0Mask
            }
        }
        this.setState({
            config
        })
    }
    staticModalConfirm = (values) =>{
        console.log("success",values)
        const staticNat=[
            {
                from:values.static0from,
                to:values.static0to
            },
            {
                from:values.static1from,
                to:values.static1to
            }
        ]
        this.setState({
            modalButton:"处理中"
        })
        this.$api.staticNat.request({staticNat}).then(({ data })=> {
            this.handleMessage(data.message)
            this.setState({
                staticNat,
                modalShow:false
            })
            alert("静态NAT配置成功！")
        })
    }
    dynamicModalConfirm = (values) =>{
        console.log("success",values)
        const dynamicNat=
            {
                from:values.dynamicFrom,
                to:values.dynamicTo,
                mask:values.dynamicMask
            }
        this.setState({
            modalButton:"处理中"
        })
        this.$api.dynamicNat.request({dynamicNat}).then(({ data })=>{
            this.handleMessage(data.message)
            this.setState({
                dynamicNat,
                modalShow:false
            })
            alert("动态NAT配置成功！")
        })
    }
    closeModal = () =>{
        this.setState({
            modalShow: false
        })
    }
    handleClick = (id) => {
        this.setState({
            id,
            modalShow: true
        })
        switch (id){
            case 0:
                this.setState({
                    modalText:'配置路由器',
                    modalContent:"配置路由器中......"
                })
                this.$api.configRouter.request({ config: this.state.config }).then(({ data })=>{
                    this.handleMessage(data.message)
                    this.setState({
                        modalContent:'配置完成'
                    })
            });break;
            case 1:
                this.setState({
                    modalText:'配置静态NAT'
                })
            break;
            case 2:
                this.setState({
                    modalText:'删除静态NAT',
                    modalContent:"删除静态NAT中......"
                })
                this.$api.deleteStaticNat.request().then(({ data })=>{
                this.handleMessage(data.message)
                    this.setState({
                        modalContent:'删除完毕'
                    })
            });break;
            case 3:
                this.setState({
                    modalText:'配置动态NAT'
                })
                break;
            case 4:
                this.setState({
                    modalText:'监控NAT转换',
                    modalContent:"获取NAT转换中......"
                })
            //     this.$api.showNat.request().then(({ data })=>{
            //     this.handleMessage(data.message)
            //         this.setState({
            //             modalContent:'删除完毕'
            //         })
            // });
                setTimeout(()=>{
                    this.setState({
                        modalContent:`${this.state.staticNat[0].from}转换成${this.state.staticNat[0].to};${this.state.staticNat[1].from}转换成${this.state.staticNat[1].to}`
                    })
                }, 5000)
                break;
            case 5:
                this.setState({
                    modalText:'核验NAT配置',
                    modalContent:"尝试通过ping检查端口连通性中......"
                })
                this.$api.showConfig.request().then(({ data })=>{
                this.handleMessage(data.message)
                    this.setState({
                        modalContent:data.message
                    })
            });break;
            default:break;
        }
    }
    handleMessage = (message) => {
        console.log(message)
        // this.setState({
        //     terminalText:message
        // })
    }
    handleClickFake = (id) =>{
        console.log("doing nothing" + id)
    }

    render() {
        const {id, modalText, modalContent} = this.state;
        return(
            <div className="main">
                <div className="terminal">
                    <Terminal onFinish={this.onFinish} config={this.state.config} text={this.state.terminalText}/>
                </div>
                <div className="controller">
                    <Controller handleClick={this.handleClick}/>
                </div>
                {this.state.modalShow ? <Modal
                    id={id}
                    title={modalText}
                    text={modalContent}
                    staticNat={this.state.staticNat}
                    dynamicNat={this.state.dynamicNat}
                    staticConfirm={this.staticModalConfirm}
                    dynamicConfirm={this.dynamicModalConfirm}
                    closeModal={this.closeModal}
                    modalButton={this.state.modalButton}
                />: null}
            </div>
        )
    }
}
export default Main