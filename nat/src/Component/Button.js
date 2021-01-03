import React from 'react'
import Component from '../Constants/Component'
import '../CSS/Component/Button.css'

class Button extends Component{
    render() {
        const {id, name} = this.props.value;
        return(
            <div className="controller-button-wrapper">
                <button className="controller-button" type="button" onClick={()=>this.props.handleClick(id)}>
                    <span>{name}</span>
                </button>
            </div>
        )
    }
}

export default Button;