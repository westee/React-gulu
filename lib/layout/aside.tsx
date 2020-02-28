import React from 'react';
import scopedClassName from "../classes";

const sc = scopedClassName('chg-layout');

const Aside: React.FunctionComponent = (props) => {
    return (
        <div className={sc('aside')}>{props.children}</div>
    )
};

export default Aside;