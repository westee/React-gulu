import React from 'react';
import scopedClassName from "../classes";

interface Props extends React.HTMLAttributes<HTMLElement>{
}

const sc = scopedClassName('chg-layout');
const Content: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;
    return (
        <div className={sc('content')} {...rest}>
            content
        </div>
    )
};

export default Content;