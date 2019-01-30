import * as React from 'react';

class UserThumb extends React.Component{
    
    public render(){
        return(
            <div className="user-thumb user-column">
                <div className="thumb-item">
                    <input type="file"/>
                </div>
            </div>
        )
    }
} 


export default UserThumb;