import * as React from 'react';
import MemberInfo from './MemberInfo';
import UserThumb from './UserThumb';
import UserInfoMap from './UserInfoMap';
import AddBtn from '../../../units/btns/Btn';
import CalcBtn from '../../../units/btns/Btn';

interface GetUserInfoProps{
    createUserInfo(name: string, phone: number): void;
    getLatLng(lat: number, lng: number): void;
}

declare var daum:any;

class GetUserInfo extends React.Component<GetUserInfoProps> {

    addInfoLatLng = (mapObj: React.ReactHTML) => {
        daum.maps.event.addListener(mapObj, 'click', (mouseEvent: any) => {

            // 클릭한 위도, 경도 정보를 가져옵니다
            var latlng = mouseEvent.latLng;
            const latitude = latlng.getLat();
            const longitude = latlng.getLng();

            this.props.getLatLng(latitude, longitude)
        });
    };




    onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        let target = e.target as HTMLFormElement;
        const userName = target.userName.value;
        const userPhone = target.userPhone.value;
        console.log(userName);
        this.props.createUserInfo(userName, userPhone);
        target.userName.value = '';
        target.userPhone.value = '';
    };


    public render(){
        return(
            <div className="user-form">
                <form onSubmit={this.onSubmit}  action="">
                    <UserThumb/>
                    <MemberInfo
                        getLatLng={this.props.getLatLng}
                        createUserInfo={this.props.createUserInfo}
                    />
                    <div className="map-wrap">
                        <UserInfoMap
                            getLatLng={this.props.getLatLng}
                            addInfoLatLng={this.addInfoLatLng.bind(this)}
                        />
                    </div>
                    <AddBtn btnName="add" type="submit"/>
                    <CalcBtn btnName="활동반경" type="button"/>
                </form>
            </div>
        )
    }
}


export default GetUserInfo;