import * as React from 'react';

class Input extends React.Component{

    public render(){
        return(
            <div className="input-wrap">
                <input className="input-ctrl" type="text" placeholder="add your name"/>
                <button className="btn">your button</button>
            </div>
        )
    }
}


export default Input;