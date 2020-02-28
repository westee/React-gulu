import React from 'react';
import scopedClassName from "../classes";

const sc = scopedClassName('chg-layout');
const Content: React.FunctionComponent = () => {
    return (
        <div className={sc('content')}>content</div>
    )
};

export default Content;