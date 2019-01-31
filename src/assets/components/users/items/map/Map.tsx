import * as React from 'react';
import './map.less';




declare var daum:any;

interface SetInfoMapProps{
    setMap(): void;
}


class Map extends React.Component<SetInfoMapProps> {


    componentDidMount() {
        this.props.setMap();
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