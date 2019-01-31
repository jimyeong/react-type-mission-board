import * as React from 'react';
import './btns.less';

interface EditBtnProps{
    changeEditState(): void;
}

class EditBtn extends React.Component<EditBtnProps> {
    editInfo = (e: React.MouseEvent):void => {
        e.preventDefault();
        this.props.changeEditState();
    };

    public render(){
        return(
            <button onClick={this.editInfo}
                className="btn btn-edit">
                edit
            </button>
        )
    }
}


export default EditBtn;
