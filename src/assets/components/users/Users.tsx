import * as React from 'react';
import UserThumb from './items/UserThumb';
import MemberInfo from './items/MemberInfo';
import './user.less';

interface IUserItemData{
    id: number;
    account: string;
    thumbnail: string;
    phone: string;
}

interface IUserState{
    userItemData: IUserItemData[];
}
interface IUserProps{

}


class Users extends React.Component<IUserProps, IUserState> {

    state: IUserState = {
        userItemData: []
    };

    public render(){
        return(
            <div className="Users">
                <UserThumb/>
                <MemberInfo/>
            </div>
        )
    }
}

export default Users;