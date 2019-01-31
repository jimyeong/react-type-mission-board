import * as React from 'react';
import './btns.less';
interface BtnProps{
    btnName: string;
}
class AddBtn extends React.Component<BtnProps> {

    public render(){
        return(

            <button type="submit" className="btn btn-add">
                {this.props.btnName}
            </button>
        )
    }
}


export default AddBtn;