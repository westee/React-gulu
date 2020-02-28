import React from 'react';
import scopedClassName from "../classes";

const sc = scopedClassName('chg-layout');
const Header: React.FunctionComponent = () => {
    return (
        <div className={sc('header')}>header</div>
    )
};

export default Header;