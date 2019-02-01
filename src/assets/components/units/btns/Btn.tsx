import * as React from 'react';
import './btns.less';
interface BtnProps{
    btnName: string;
    type: string;
}
class Btn extends React.Component<BtnProps> {

    public render(){
        return(
            <button type={this.props.type} className="btn">
                {this.props.btnName}
            </button>
        )
    }
}


export default Btn;