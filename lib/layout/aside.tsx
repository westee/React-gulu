import React from 'react';
import scopedClassName from "../classes";

const sc = scopedClassName('chg-layout');

interface Props extends React.HTMLAttributes<HTMLElement>{}

const Aside: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;
    return (
        <div className={sc('aside', {extra: className})} {...rest}>aside</div>
    )
};

export default Aside;