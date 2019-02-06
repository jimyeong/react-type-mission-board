import * as React from 'react';
import './modal.less';
import CloseBtn from '../units/btns/CloseBtn';




interface ICloseProps{
    changeEditState(): void;
}

class Popup extends React.Component<ICloseProps> {

    beforeEdit: boolean = false;
    startPhone: boolean = false;
    startAccount: boolean = false;

    public render(){
        return(
            <div className="modal modal-edit">
                <div className="modal-inner">
                    <h3 className="modal-tit">Authentication</h3>
                    <div className="modal-btnbox">
                        <button

                            className="btn btn-account">
                            phone
                        </button>
                        <button className="btn btn-phone">
                            account
                        </button>
                    </div>
                    <CloseBtn
                        changeEditState={this.props.changeEditState}
                    />
                </div>
            </div>
        )
    }
}


export default Popup;