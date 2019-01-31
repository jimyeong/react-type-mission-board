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

    id:number = 0;
    state: IUserState = {
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
    };

    setMap = (): void => {
        var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        var options = { //지도를 생성할 때 필요한 기본 옵션
            center: new daum.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };

        var map = new daum.maps.Map(container, options); //지도 생성 및 객체 리턴
    };

    addMapListener = () =>{
        daum.maps.event.addListener(map, 'click', function(mouseEvent) {

            // 클릭한 위도, 경도 정보를 가져옵니다
            var latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

            var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
            message += '경도는 ' + latlng.getLng() + ' 입니다';

            var resultDiv = document.getElementById('clickLatlng');
            resultDiv.innerHTML = message;

        });
    };

    public render(){
        console.log( this.state.userItemData);
        return(
            <div className="Users">
                <Switch>
                    <Route path="/user" render={ () => <GetUserInfo
                        createUserInfo={this.createUserInfo.bind(this)}
                        setMap={this.setMap.bind(this)}
                    /> }/>
                    <Route path="/map" render={ () => <Map
                        setMap={this.setMap.bind(this)}
                    /> }/>
                    <Route render={() => <GetUserInfo
                        createUserInfo={this.createUserInfo.bind(this)}
                        setMap={this.setMap.bind(this)}
                    /> }/>
                </Switch>
            </div>
        )
    }
}

export default Users;