import React from 'react';
import scopedClassName from "../classes";

interface Props extends React.HTMLAttributes<HTMLElement>{
}

const sc = scopedClassName('chg-layout');

const Footer: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;
    return (
        <div className={sc('footer', {extra: className})} {...rest}>
            footer
        </div>
    )
};

export default Footer;