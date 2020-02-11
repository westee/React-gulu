import React from 'react';
import './importicons';
import './icon.scss'
interface iconProps {
    name: String;
    // onClick: React.MouseEventHandler<SVGAElement>
    onClick: ()=>void
}

const Icon:React.FunctionComponent<iconProps> = (props)=> {
    return (
        <span>
            <svg className="fool-icon" onClick={props.onClick}>
                <use xlinkHref={`#${props.name}`}></use>
            </svg>
        </span>
    );
}

export default Icon;