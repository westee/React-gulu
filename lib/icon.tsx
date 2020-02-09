import React from 'react';
import './importicons';

interface iconProps {
    name: String;
}

const Icon:React.FunctionComponent<iconProps> = (props)=> {
    return (
        <span>
            <svg>
                <use xlinkHref={`#${props.name}`}></use>
            </svg>
        </span>
    );
}

export default Icon;