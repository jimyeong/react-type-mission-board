import * as React from 'react';
import { Link } from 'react-router-dom';
import './tab.less';

class Tab extends React.Component{

    public render(){
        return(
            <div className="tab">
                <Link className="tab-btn" to="/user"> User </Link>
                <Link className="tab-btn" to="/map"> Map </Link>
            </div>
        )
    }
}


export default Tab;
