import * as React from 'react';
import MemberInfo from './MemberInfo';
import UserThumb from './UserThumb';
import UserInfoMap from './UserInfoMap';



interface GetUserInfoProps{
    createUserInfo(name: string, phone: number): void;
    setMap(): void;
}

class GetUserInfo extends React.Component<GetUserInfoProps> {

    public render(){
        return(
            <div className="user-form">
                <UserThumb/>
                <MemberInfo
                    createUserInfo={this.props.createUserInfo}
                />
                <div className="map-wrap">
                    <UserInfoMap
                        setMap={this.props.setMap}
                    />
                </div>
            </div>
        )
    }
}


export default GetUserInfo;