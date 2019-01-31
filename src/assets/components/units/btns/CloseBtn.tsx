import * as React from 'react';

interface ICloseProps{
    changeEditState(): void;
}
class CloseBtn extends React.Component<ICloseProps> {

    closePopup = (e: React.MouseEvent):void => {
        e.preventDefault();
        this.props.changeEditState()
    };

    public render(){
        return(
            <button onClick={this.closePopup}
                className="btn-close">
                <span className="close-stick"/>
                <span className="close-stick"/>
            </button>
        )
    }
}


export default CloseBtn;