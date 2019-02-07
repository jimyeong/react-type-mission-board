import * as React from 'react';
import MemberInfo from './MemberInfo';
import UserThumb from './UserThumb';
import UserInfoMap from '../map/Map';
import AddBtn from '../../../units/btns/Btn';
import CalcBtn from '../../../units/btns/Btn';
/*
import {createHashHistory} from 'history';


const history = createHashHistory();
*/



declare let daum:any;

interface GetUserInfoProps{
    createUserInfo(name: string, phone: number, latLng: ILatLng,  userAreaInfo: ILatLng[]): void;

}

interface ILatLng{
    lat: number | null;
    lng: number | null;
}

class GetUserInfo extends React.Component<GetUserInfoProps> {

    mapContainer: HTMLElement | null = null;
    mapOption: any = null;
    map: any = null;
    marker: any = null;

    isClicked: boolean = false;
    getArea: boolean = false;
    drawingFlag = false;
    drawingPolygon: any = {};
    polygon: any = [];



    userHouseInfo: ILatLng = {
        lat: null,
        lng: null
    };

    getAreaArray: any = [];
/*

    navigate = (e: any, url: string): void => {
        history.replace(url)
    };
*/

    getAreaInfo = (e: React.MouseEvent): void => {
        e.preventDefault();
        this.getArea = !this.getArea;
        /*생성되있던 모든 마커 지우기*/
        this.marker.setMap(null); // 지도에서 제거한다.
    };

    onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        let target = e.target as HTMLFormElement;
        if(!this.isClicked){
            alert("you have to register your home marker")

        }else{
            const userName = target.userName.value;
            const userPhone = target.userPhone.value;
            const userHouse = this.userHouseInfo;
            const userAreaInfo:ILatLng[] = this.getAreaArray;

            this.props.createUserInfo(userName, userPhone, userHouse, userAreaInfo);

            /*initalize*/

            target.userName.value = '';
            target.userPhone.value = '';

            for(let i:number=0; i < this.getAreaArray.length; i++){
                this.getAreaArray[i].setMap(null);
            }

            this.getAreaArray =[];

            this.marker.setMap(null);

            this.getArea = false;
        }
    };

    makeMapInstance = () => {
        this.mapContainer = document.getElementById('map'), // 지도를 표시할 div
            this.mapOption = {
                center: new daum.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };
    };

    renderMap = (mapObj: any, mapOption: any):void => {
        this.map = new daum.maps.Map(mapObj, mapOption);
    };


    createMarker = (mapObj: any) => {
        this.marker = new daum.maps.Marker({
            // 지도 중심좌표에 마커를 생성합니다
            position: mapObj.getCenter()
        });
        daum.maps.event.addListener(mapObj, 'click', (mouseEvent: any) => {

        });
    };

    addMarker = (mapObj: any, markerItem: any) => {
        daum.maps.event.addListener(mapObj, 'click', (mouseEvent: any) => {

            // 클릭한 위도, 경도 정보를 가져옵니다
            let latlng = mouseEvent.latLng;

            // 클릭한 위도, 경도 정보를 가져옵니다
            const latitude: number = latlng.getLat();
            const longitude: number = latlng.getLng();

            if(!this.getArea){
                /*면적구하기 아닐때*/

                this.userHouseInfo = {lat: latitude, lng: longitude};

                // 지도에 마커를 표시합니다
                this.marker.setMap(this.map);

                // 마커 위치를 클릭한 위치로 옮깁니다
                this.marker.setPosition(latlng);

            }else{

                /*면적구하기 일때*/

                // 찍혀있는 마커가 있다면 지우기
                this.marker.setMap(null);

                if(!this.drawingFlag){

                    this.drawingFlag = true;

                    // 그려지고 있는 다각형을 표시할 다각형을 생성하고 지도에 표시합니다
                        this.drawingPolygon = new daum.maps.Polygon({
                        map: this.map, // 다각형을 표시할 지도입니다
                        path: [latlng], // 다각형을 구성하는 좌표 배열입니다 클릭한 위치를 넣어줍니다
                        strokeWeight: 3, // 선의 두께입니다
                        strokeColor: '#332ae9', // 선의 색깔입니다
                        strokeOpacity: 1, // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
                        strokeStyle: 'solid', // 선의 스타일입니다
                        fillColor: '#332ae9', // 채우기 색깔입니다
                        fillOpacity: 0.2 // 채우기 불투명도입니다
                    });


                    // 그리기가 종료됐을때 지도에 표시할 다각형을 생성합니다
                    this.polygon = new daum.maps.Polygon({
                        path: [latlng], // 다각형을 구성하는 좌표 배열입니다 클릭한 위치를 넣어줍니다
                        strokeWeight: 3, // 선의 두께입니다
                        strokeColor: '#00a0e9', // 선의 색깔입니다
                        strokeOpacity: 1, // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
                        strokeStyle: 'solid', // 선의 스타일입니다
                        fillColor: '#00a0e9', // 채우기 색깔입니다
                        fillOpacity: 0.2 // 채우기 불투명도입니다
                    });


                }else{

                    // 그려지고 있는 다각형의 좌표에 클릭위치를 추가합니다
                    // 다각형의 좌표 배열을 얻어옵니다
                    let drawingPath = this.drawingPolygon.getPath();

                    // 좌표 배열에 클릭한 위치를 추가하고
                    drawingPath.push(latlng);

                    // 다시 다각형 좌표 배열을 설정합니다
                    this.drawingPolygon.setPath(drawingPath);


                    // 그리기가 종료됐을때 지도에 표시할 다각형의 좌표에 클릭 위치를 추가합니다
                    // 다각형의 좌표 배열을 얻어옵니다
                    let path = this.polygon.getPath();

                    // 좌표 배열에 클릭한 위치를 추가하고
                    path.push(latlng);

                    // 다시 다각형 좌표 배열을 설정합니다
                    this.polygon.setPath(path);

                }
            }
        });
    };

    showPolyMove = () => {
        // 지도에 마우스무브 이벤트를 등록합니다
        // 다각형을 그리고있는 상태에서 마우스무브 이벤트가 발생하면 그려질 다각형의 위치를 동적으로 보여주도록 합니다
        daum.maps.event.addListener(this.map, 'mousemove', (mouseEvent: any) => {

            // 지도 마우스무브 이벤트가 발생했는데 다각형을 그리고있는 상태이면
            if (this.drawingFlag){

                // 마우스 커서의 현재 위치를 얻어옵니다
                let mousePosition = mouseEvent.latLng;

                // 그려지고있는 다각형의 좌표배열을 얻어옵니다
                let path = this.drawingPolygon.getPath();

                // 마우스무브로 추가된 마지막 좌표를 제거합니다
                if (path.length > 1) {
                    path.pop();
                }

                // 마우스의 커서 위치를 좌표 배열에 추가합니다
                path.push(mousePosition);

                // 그려지고 있는 다각형의 좌표를 다시 설정합니다
                this.drawingPolygon.setPath(path);

            }
        });
    };

    stopShowPolyMove = () => {
        // 지도에 마우스 오른쪽 클릭 이벤트를 등록합니다
        // 다각형을 그리고있는 상태에서 마우스 오른쪽 클릭 이벤트가 발생하면 그리기를 종료합니다
        daum.maps.event.addListener(this.map, 'rightclick', (mouseEvent: any) => {

            // 지도 오른쪽 클릭 이벤트가 발생했는데 다각형을 그리고있는 상태이면
            if (this.drawingFlag) {

                // 그려지고있는 다각형을  지도에서 제거합니다
                this.drawingPolygon.setMap(null);

                this.drawingPolygon = null;

                // 클릭된 죄표로 그릴 다각형의 좌표배열을 얻어옵니다
                let path = this.polygon.getPath();

                // 다각형을 구성하는 좌표의 개수가 3개 이상이면
                if (path.length > 2) {

                    this.getAreaArray.push(this.polygon);

                    // 지도에 다각형을 표시합니다
                    this.polygon.setMap(this.map);

                } else {
                    // 다각형을 구성하는 좌표가 2개 이하이면 다각형을 지도에 표시하지 않습니다
                    this.polygon = null;
                }

                // 상태를 false로, 그리지 않고 있는 상태로 변경합니다
                this.drawingFlag = false;
                this.isClicked = true;

                console.log(this.getAreaArray)
            }
        });

    };



    componentDidMount() {
        /*create daum map instance*/

        this.makeMapInstance();

        this.renderMap(this.mapContainer,this.mapOption);

        this.createMarker(this.map);

        this.addMarker(this.map, this.marker);

        this.showPolyMove();

        this.stopShowPolyMove();
    }

    public render(){
        return(
            <div className="user-form">
                <form onSubmit={this.onSubmit}  action="">
                    <UserThumb/>
                    <MemberInfo/>
                    <div className="map-wrap">
                        <UserInfoMap/>
                    </div>
                    <div className="btns-wrap">
                        <CalcBtn
                            btnName="활동반경"
                            type="button"
                            onClick={ this.getAreaInfo.bind(this) }
                            id="btn-regist-ground"
                        />
                        <AddBtn
                            btnName="add"
                            type="submit"
                            onClick={(e:React.MouseEvent): void => console.log('1')}
                            id="btn-add-info"
                        />
                    </div>
                </form>
            </div>
        )
    }
}


export default GetUserInfo;