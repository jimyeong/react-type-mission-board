import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {createBrowserHistory} from 'history';


import Tab from './assets/components/tabs/Tab';
import Users from './assets/components/users/Users';

import './assets/less/base.less';

const history = createBrowserHistory();

class App extends React.Component {



    public render(){

        return(
            <Router>
                <div>
                    <div className="wrapper">
                        <Tab/>
                        <Users/>
                    </div>
                </div>
            </Router>
        )
    }
}



















export default App;

