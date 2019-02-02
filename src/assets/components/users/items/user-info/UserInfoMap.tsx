import * as React from 'react';



interface getUesrMapProps{

}

class UserInfoMap extends React.Component<getUesrMapProps> {

    public render(){
        return(
            <div className="user-info-map">
                <div id="map"/>
            </div>
        )
    }
}


export default UserInfoMap;