import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Tab from './assets/components/tabs/Tab';
import Map from './assets/components/map/Map';
import Users from './assets/components/users/Users';

import './assets/less/base.less';

interface Props{

}
interface State{

}


class App extends React.Component {

    public render(){
        return(
            <Router>
                <div>
                    <div className="wrapper">
                        <Tab/>
                        <Switch>
                            <Route path="/user" render={ () => <Users/> }/>
                            <Route path="/map" render={ () => <Map/> }/>
                            <Route component={Users}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}



















export default App;

