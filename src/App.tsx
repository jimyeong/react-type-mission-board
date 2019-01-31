import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Tab from './assets/components/tabs/Tab';
import Users from './assets/components/users/Users';


import './assets/less/base.less';

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

