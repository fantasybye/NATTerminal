import React from 'react';
import '../CSS/Main.css';
import Controller from "../Composite/Controller";
import Terminal from "../Composite/Terminal";
import Component from '../Constants/Component';

class  Main extends Component{
    constructor(props, context) {
        super(props, context);
        this.state={
            terminalText:[]
        }
    }
    handleClick = (id) => {
        let text = [];
        switch (id){
            case 0:this.$api.configRouter.request().then(({ message })=>{
                console.log(message)
                text = message;
            });break;
            case 1:this.$api.staticNat.request().then(({ message })=>{
                console.log(message)
                text = message;
            });break;
            case 2:this.$api.deleteStaticNat.request().then(({ message })=>{
                console.log(message)
                text = message;
            });break;
            case 3:this.$api.dynamicNat.request().then(({ message })=>{
                console.log(message)
                text = message;
            });break;
            case 4:this.$api.showNat.request().then(({ message })=>{
                console.log(message)
                text = message;
            });break;
            case 5:this.$api.showConfig.request().then(({ message })=>{
                console.log(message)
                text = message;
            });break;
            default:text=[];break;
        }
        this.setState({
            terminalText:text
        })
    }
    handleClickFake = (id) =>{
        console.log("doing nothing" + id)
    }

    render() {
        return(
            <div className="main">
                <div className="terminal">
                    <Terminal text={this.state.terminalText}/>
                </div>
                <div className="controller">
                    <Controller handleClick={this.handleClick}/>
                </div>
            </div>
        )
    }
}
export default Main