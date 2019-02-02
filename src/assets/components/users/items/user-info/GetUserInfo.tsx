import * as React from 'react';
import MemberInfo from './MemberInfo';
import UserThumb from './UserThumb';
import UserInfoMap from './UserInfoMap';
import AddBtn from '../../../units/btns/Btn';
import CalcBtn from '../../../units/btns/Btn';



declare let daum:any;

interface GetUserInfoProps{
    createUserInfo(name: string, phone: number): void;
}

interface ILatLng{
    lat: number;
    lng: number;
}


class GetUserInfo extends React.Component<GetUserInfoProps> {

    mapContainer: HTMLElement | null = null;
    mapOption: any = null;
    map: any = null;


    isClicked: boolean = false;
    getArea: boolean = false;

    addInfoLatLng = (mapObj: React.ReactHTML) => {
        daum.maps.event.addListener(mapObj, 'click', (mouseEvent: any) => {

            // 클릭한 위도, 경도 정보를 가져옵니다
            let latlng = mouseEvent.latLng;
            const latitude = latlng.getLat();
            const longitude = latlng.getLng();

            this.getLatLng(latitude, longitude);
        });
    };

    getAreaInfo = (e: React.MouseEvent): void => {
        e.preventDefault();
        this.getArea = !this.getArea;
        console.log('gettArea',this.getArea);
    }

;
    getLatLng = (lat: number,lng: number): void  => {
        const latitude: number = lat;
        const longitude: number = lng;

        let getCurrentLatLng: ILatLng={
            lat: latitude,
            lng: longitude
        };
    };

    onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        let target = e.target as HTMLFormElement;
        if(!this.isClicked){
            alert("you have to register your home marker")

        }else{
            const userName = target.userName.value;
            const userPhone = target.userPhone.value;
            console.log(userName);
            this.props.createUserInfo(userName, userPhone);
            target.userName.value = '';
            target.userPhone.value = '';

            this.isClicked = false;
        }
    };



    makeMapInstance = () => {
        this.mapContainer = document.getElementById('map'), // 지도를 표시할 div
            this.mapOption = {
                center: new daum.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };
    };

    renderMap = (mapObj: HTMLElement | null, mapOption: any):void => {
        this.map = new daum.maps.Map(mapObj, mapOption);
    };


    addMarker = (mapObj: React.ReactHTML) => {
        daum.maps.event.addListener(mapObj, 'click', (mouseEvent: any) => {
            this.isClicked = true;
            console.log(this.isClicked);
            // 클릭한 위도, 경도 정보를 가져옵니다
            let latlng = mouseEvent.latLng;
            // 마커생성
            let marker = new daum.maps.Marker({
                map: mapObj,
                position: new daum.maps.LatLng(latlng.getLat(), latlng.getLng())
            });
        });
    };


    componentDidMount() {

        /*create daum map instance*/
        this.makeMapInstance();

        this.renderMap(this.mapContainer,this.mapOption);

        this.addMarker(this.map)

    }


    public render(){

        return(
            <div className="user-form">
                <form onSubmit={this.onSubmit}  action="">
                    <UserThumb/>
                    <MemberInfo
                        createUserInfo={this.props.createUserInfo}
                    />
                    <div className="map-wrap">
                        <UserInfoMap/>
                    </div>
                    <AddBtn
                        btnName="add"
                        type="submit"
                        onClick={(e:React.MouseEvent): void => console.log(1)}
                    />
                    <CalcBtn
                        btnName="활동반경"
                        type="button"
                        onClick={ this.getAreaInfo.bind(this) }
                    />
                </form>
            </div>
        )
    }
}


export default GetUserInfo;