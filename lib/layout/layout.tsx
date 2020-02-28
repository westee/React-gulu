import React from 'react';
import '../classes'
import scopedClassName from "../classes";

const sc = scopedClassName('chg-layout');

interface Props extends React.HTMLAttributes<HTMLElement>{
}
const Layout: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;
    return (
        <div className={[sc(), className].join(' ')} {...rest}>
            {props.children}
        </div>
    )
};

export default Layout;