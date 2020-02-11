import React from 'react';
import ReactDOM from 'react-dom';

import Icon from './icon';

const root = document.getElementById('root');
ReactDOM.render(
    <div>
        <Icon name="wechat" onClick={()=>{console.log(1)}} />
    </div>
    , root);
