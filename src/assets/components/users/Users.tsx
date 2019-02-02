import * as React from 'react';
import GetUserInfo from './items/user-info/GetUserInfo';
import Map from './items/map/Map';
import {Switch, Route} from 'react-router-dom';

import './user.less';

declare var daum:any;



interface IUserItemData{
    id: number;
    userName: string;
    phoneNumber: number;
}

interface IUserState{
    userItemData: IUserItemData[];
    isEditing: boolean;
}


class Users extends React.Component<any, IUserState> {

    id: number = 0;
    state: IUserState={
        userItemData: [],
        isEditing: false
    };

    changeEditState = (): void => {
        this.setState({
            isEditing: !this.state.isEditing
        });
    };

    createUserInfo = (name: string, phone: number): void => {
        let userItemData = this.state.userItemData;
        let getInfo: IUserItemData= {
            id: this.id++,
            userName: name,
            phoneNumber: phone
        };
        userItemData = userItemData.concat(getInfo);
        this.setState({
            userItemData: userItemData
        })
    }

    componentDidMount() {

    }


    public render(){
        console.log( this.state.userItemData);

        return(
            <div className="Users">
                <Switch>
                    <Route path="/user" render={ () => <GetUserInfo
                        createUserInfo={this.createUserInfo.bind(this)}
                    /> }/>
                    <Route path="/map" render={ () => <Map
                    /> }/>
                    <Route render={() => <GetUserInfo
                        createUserInfo={this.createUserInfo.bind(this)}
                    /> }/>
                </Switch>
            </div>
        )
    }
}

export default Users;