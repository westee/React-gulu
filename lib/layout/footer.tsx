import React from 'react';
import scopedClassName from "../classes";

const sc = scopedClassName('chg-layout');

const Footer: React.FunctionComponent = () => {
    return (
        <div className={sc('footer')}>footer</div>
    )
};

export default Footer;