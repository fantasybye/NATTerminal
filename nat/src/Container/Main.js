import React from 'react';
import '../CSS/Main.css';

class  Main extends React.Component{
    render() {
        return(
            <div className="main">
                <div className="terminal">
                    This is terminal
                </div>
                <div className="controller">
                    This is controller
                </div>
            </div>
        )
    }
}
export default Main