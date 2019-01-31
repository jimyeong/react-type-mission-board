import * as React from 'react';


declare var daum:any;

interface getUesrMapProps{
    setMap(): void;
}

class UserInfoMap extends React.Component<getUesrMapProps>{

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


export default UserInfoMap;