import React from 'react';
import { LocaleProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'antd/dist/antd.less';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import Login from './Login';
import Main from './views/main';

class MyRouter extends React.Component {
    render(){
        return(
            <LocaleProvider locale={zhCN}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Main}></Route>
                        <Route path="/login" component={Login}></Route>
                    </Switch>
                </BrowserRouter>
            </LocaleProvider>
        )
    }
}
export default MyRouter