import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import MyMouter from './routers';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyMouter/>, document.getElementById('root'));
registerServiceWorker();
