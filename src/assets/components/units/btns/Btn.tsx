import * as React from 'react';
import './btns.less';

interface BtnProps{
    btnName: string;
    type: string;
    id: string;
    onClick?(e:React.MouseEvent): void;
}

class Btn extends React.Component<BtnProps> {

    public render(){
        const {onClick} = this.props;
        return(
            <button className="btn"
                    type={this.props.type}
                    onClick={ onClick }
                    id={this.props.id}>
                {this.props.btnName}
            </button>
        )
    }
}


export default Btn;