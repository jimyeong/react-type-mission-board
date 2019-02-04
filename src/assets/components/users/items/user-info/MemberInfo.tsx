import * as React from 'react';
import InputAccount from '../../../units/forms/Input';
import InputPhone from '../../../units/forms/Input';


class MemberInfo extends React.Component {

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