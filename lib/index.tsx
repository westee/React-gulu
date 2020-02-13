import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon/icon';

const root = document.getElementById('root');
const fn: React.MouseEventHandler = (e)=>{
    console.log(e.target);
};

ReactDOM.render(
    <div>
        <Icon className="wechat" iconName='wechat' onClick={fn} onMouseEnter={fn} onMouseLeave={fn} />
    </div>
    , root);
