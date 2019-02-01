import * as React from 'react';


declare var daum:any;

interface getUesrMapProps{
    getLatLng(lat: number, lng: number): void;
    addInfoLatLng(mapObj: React.ReactHTML): void;
}

class UserInfoMap extends React.Component<getUesrMapProps> {



    mapContainer: HTMLElement | null = null;
    mapOption: any = null;
    map: any = null;


    isClicked: boolean = false;


    componentDidMount() {
        /*create daum map instance*/
        this.makeMapInstance();

        this.renderMap(this.mapContainer,this.mapOption);

        this.addMarker(this.map)


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
            this.isClicked = !this.isClicked;
            console.log(this.isClicked);
            // 클릭한 위도, 경도 정보를 가져옵니다
            var latlng = mouseEvent.latLng;

            // 마커생성
            var marker = new daum.maps.Marker({
                map: mapObj,
                position: new daum.maps.LatLng(latlng.getLat(), latlng.getLng())
            });
        });
    };







    public render(){
        return(
            <div className="user-info-map">
                <div id="map"/>
            </div>
        )
    }
}


export default UserInfoMap;