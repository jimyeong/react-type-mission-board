import * as React from 'react';
import './map.less';


declare global{
    var daum: any;
    interface Window {
        onCloseInfoWindow(): void;
    }
}

interface IUserItemData{
    id: number;
    userName: string;
    phoneNumber: number;
    latLng: ILatLng;
    userAreaInfo: ILatLng[];
}

interface ILatLng{
    lat: number;
    lng: number;
    setMap?(a: HTMLElement | null): void;
}

interface IMapOverlay{
    map: HTMLElement;
    position: string;
    setMap(a: HTMLElement | null ): void;
}

interface SetInfoMapProps{
    propsData?: IUserItemData[];
}


class Map extends React.Component<SetInfoMapProps> {

    mapContainer: HTMLElement | null = null;
    mapOption: any = null;
    map: any = null;
    marker: any = null;
    markers: any[] = [];
    overlay: any = null;
    overlaysArray: any[] = [];


    componentDidMount() {
        /*
        switch (this.props.propsData){
            case:
        }
        */
        if(!this.props.propsData){

        }else{
            console.log('true',this.props.propsData);
            this.renderMap();

            this.setAllMarker();
            window.onCloseInfoWindow = function(){



            };
        }
    }






    renderMap = () => {
        this.mapContainer = document.getElementById('map'), // 지도를 표시할 div
        this.mapOption = {
            center: new daum.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

        this.map = new daum.maps.Map(this.mapContainer, this.mapOption); // 지도를 생성합니다
    };
    checkListener = (OverlayObj: IMapOverlay, propObj: IUserItemData) => {
        if(!document.querySelector('.btn-close')){
            /*돔 객체가 없을 경우*/

        }else{
                    /*돔 객체가 있을 경우*/

                    /*오버레이를 닫는 리스너를 답니다*/
                    const closeBtn = document.querySelectorAll('.btn-close');
                    closeBtn.forEach(item => {
                    console.log(closeBtn);
                    item.addEventListener('click', (e: any) => {
                    e.preventDefault();
                    e.stopPropagation();

                    OverlayObj.setMap(null);
                    let PropUserArea = propObj.userAreaInfo as any;

                    for(let i=0; i < PropUserArea.length; i++){
                        PropUserArea[i].setMap(null);
                    }
                })
            });
        }
    };

    makeBtn = () => {
        const btn=document.createElement('button');
        btn.classList.add('btn','btn-modify');
        const Text= document.createTextNode('수정하기');
        console.log(btn);
        btn.appendChild(Text);

        const modalInner = document.querySelector('.modal-inner');
        modalInner!.appendChild(btn);

        btn.addEventListener('click', ()=>{
            console.log(this.context.router)
        })
    };
    deleteBtn = () => {
        const btn = document.querySelectorAll('btn-modify');
        btn.forEach(item => {

        })


    };

    setAllMarker = () => {

        if(!this.props.propsData){

        }else {

            let {propsData} = this.props;

            for(let i=0; i< propsData.length; i++){
                this.marker = new daum.maps.Marker({
                    map: this.map,
                    position: new daum.maps.LatLng(propsData[i].latLng.lat, propsData[i].latLng.lng)
                });
                this.marker.setMap(this.map);
                this.markers.push(this.marker);
                console.log('this.markers',this.markers);
                // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다

                let content = `
                <div class="modal">
                      <div class="modal-inner">
                        <div class="title-area clearfix">
                              <h3 class="user-tit">${propsData[i].userName}</h3>
                              <div class="close-wrap">
                                    <button class="btn-close" id="closebtn">
                                        <span class="close-stick"></span>
                                        <span class="close-stick"></span>
                                    </button>
                              </div>
                        </div>
                        <img class="modal-thumb" src="" alt="">
                        <p class="user-phone">${propsData[i].phoneNumber}</p>
                        <p class="user-position">위도: ${propsData[i].latLng.lat}</p>
                        <p class="user-position">경도: ${propsData[i].latLng.lng}</p>
                      </div>
                </div>
                    `;


                // 마커 위에 커스텀오버레이를 표시합니다
                // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
                let overlay = new daum.maps.CustomOverlay({
                    content: content,
                    map: this.map,
                    position: this.marker.getPosition()
                });

                this.overlaysArray.push(overlay);
                console.log('thisoverlay', this.overlaysArray);

                overlay.setMap(null);

                // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
                daum.maps.event.addListener(this.marker, 'click', () => {

                    overlay.setMap(this.map);

                    /* 돔객체가 있는지 확인하고 리스너를 답니다 */

                    this.checkListener(overlay, propsData[i]);

                    this.makeBtn();

                    // 지도에 다각형을 표시합니다
                    for(let n=0; n < propsData[i].userAreaInfo.length; n++){
                        const Polygon: any = propsData[i].userAreaInfo[n];
                        Polygon.setMap(this.map);
                    }
                });



            }
        }

    };

    public render(){
        return(
            <div className="user-info-map">
                <div id="map"/>
            </div>
        )
    }

}



export default Map;