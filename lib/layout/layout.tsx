import React, {ReactElement} from 'react';
import './layout.scss'
import scopedClassName from "../classes";
import Aside from './aside';

const sc = scopedClassName('chg-layout');

interface Props extends React.HTMLAttributes<HTMLElement>{
    children: ReactElement | Array<ReactElement>
}
const Layout: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;
    const children = props.children as Array<ReactElement>;
    const hasAside = children.length &&
        children.reduce((result, node)=>result || node.type === Aside, false);
    return (
        <div className={sc('', {extra: [className, hasAside && 'hasAside'].join(' ')})} {...rest}>
            {props.children}
        </div>
    );
};

export default Layout;