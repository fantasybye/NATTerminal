import React from 'react'
import Component from '../Constants/Component'
class Button extends Component{
    render() {
        return(
            <div>
                <button type="button" value={this.props.value}/>
            </div>
        )
    }
}

export default Button;