import * as React from 'react';
import InputAccount from '../../../units/forms/Input';
import InputPhone from '../../../units/forms/Input';

interface MemberInfoProps{
    createUserInfo(name: string, phone: number): void;
    getLatLng(lat: number, lng: number): void;
}


class MemberInfo extends React.Component<MemberInfoProps> {

    public render(){
        return(
            <div className="member-info user-column">
                <InputAccount
                    inputType="text"
                    plholder="add account"
                    formField="userName"
                    required={true}
                />
                <InputPhone
                    inputType="tel"
                    plholder="add phone number"
                    formField="userPhone"
                    required={true}
                />
            </div>
        )
    }
}


export default MemberInfo;