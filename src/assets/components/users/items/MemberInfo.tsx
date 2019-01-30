import * as React from 'react';
import AddBtn from '../../units/btns/AddBtn';
import EditBtn from '../../units/btns/EditBtn';

class MemberInfo extends React.Component{

    public render(){
        return(
            <div className="member-info user-column">
                <form action="" className="clearfix">
                    <div className="input-wrap">
                        <input className="input-ctrl" type="text" placeholder="add your name"/>
                        <AddBtn/>
                    </div>
                    <div className="input-wrap">
                        <input className="input-ctrl" type="text" placeholder="add your phone"/>
                        <EditBtn/>
                    </div>
                </form>
            </div>
        )
    }
}


export default MemberInfo;