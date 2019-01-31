import * as React from 'react';
import AddBtn from '../../../units/btns/AddBtn';



interface MemberInfoProps{
    createUserInfo(name: string, phone: number): void;
}


class MemberInfo extends React.Component<MemberInfoProps> {

    onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        let target = e.target as HTMLFormElement;
        const userName = target.userName.value;
        const userPhone = target.userPhone.value;
        this.props.createUserInfo(userName, userPhone);
        target.userName.value = '';
        target.userPhone.value = '';
    };


    public render(){
        return(
            <div className="member-info user-column">
                <form onSubmit={this.onSubmit} action="" className="clearfix">
                    <div className="input-wrap">
                        <input
                            className="input-ctrl" type="text" name="userName" placeholder="add your name" required/>
                        <AddBtn btnName="add"/>
                    </div>
                    <div className="input-wrap">
                        <input className="input-ctrl" type="text" name="userPhone" placeholder="add your phone" required/>
                    </div>
                </form>
            </div>
        )
    }
}


export default MemberInfo;