import React from 'react';
import './importicons';
import './icon.scss'
interface iconProps {
    name: String;
}

const Icon:React.FunctionComponent<iconProps> = (props)=> {
    return (
        <span>
            <svg className="fool-icon">
                <use xlinkHref={`#${props.name}`}></use>
            </svg>
        </span>
    );
}

export default Icon;