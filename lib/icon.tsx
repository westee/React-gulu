import React from 'react';

interface iconProps {
    name: String;
}

const Icon:React.FunctionComponent<iconProps> = (props)=> {
    return (
        <div>{props.name}</div>
    );
}

export default Icon;