import React from 'react';
import './importicons';
import './icon.scss';
import classes from '../helpers/classes'

interface iconProps extends React.SVGAttributes<SVGElement> {
    iconName: string;
}

const Icon: React.FunctionComponent<iconProps> = (
    {className, iconName, ...restProps} ) => {
    return (
        <svg className={classes('fool-icon', className)}
             {...restProps}
        >
            <use xlinkHref={`#${iconName}`}/>
        </svg>
    );
};

export default Icon;