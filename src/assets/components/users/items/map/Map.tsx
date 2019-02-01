import * as React from 'react';




declare var daum:any;

interface SetInfoMapProps{
}


class Map extends React.Component<SetInfoMapProps> {


    container: HTMLElement | null = null;
    options: any = null;
    map: any = null;

    componentDidMount() {
        this.container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        this.options = { //지도를 생성할 때 필요한 기본 옵션
            center: new daum.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };
        this.map = new daum.maps.Map(this.container, this.options); //지도 생성 및 객체 리턴
    }

    public render(){
        return(
            <div className="user-info-map">
                <div id="map"/>
            </div>
        )
    }
}


export default Map;