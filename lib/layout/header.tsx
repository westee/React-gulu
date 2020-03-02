import React from 'react';
import scopedClassName from "../classes";

interface Props extends React.HTMLAttributes<HTMLElement>{
}

const sc = scopedClassName('chg-layout');

const Header: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;
    return (
        <div className={sc('header', {extra: className})} {...rest}>
            header
        </div>
    )
};

export default Header;