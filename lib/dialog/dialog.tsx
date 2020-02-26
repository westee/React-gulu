import React, { Fragment, ReactChild, ReactElement, ReactFragment, ReactPortal} from 'react';
import './dialog.scss'
import Icon from 'lib/icon/icon';
import ReactDOM from 'react-dom';

interface Props {
    visible: boolean;
    children: ReactChild | ReactFragment | ReactPortal;
    buttons?: Array<ReactElement>;
    onClose: React.MouseEventHandler;
    closeOnClickMask?: boolean;
}

function scopedClassName(preName: string) {
    return function f1(name?: string) {
        return [preName, name].filter(Boolean).join('-');
    }
}

const scopedClass = scopedClassName('chg-dialog');
const sc = scopedClass;

const Dialog: React.FunctionComponent<Props> = (props) => {
    const onClickClose: React.MouseEventHandler = (e) => {
        props.onClose(e);
    };
    const onClickMask: React.MouseEventHandler = e => {
        if (props.closeOnClickMask) {
            props.onClose(e);
        }
    }
    const x = props.visible ?
        <Fragment>
            <div className={sc('mask')} onClick={onClickMask}/>
            <div className={sc()}>
                <div className={sc('close')} onClick={onClickClose}>
                    <Icon iconName={'close'}/>
                </div>
                <header className={sc('header')}>
                    提示
                </header>
                <main className={sc('main')}>
                    <div>{props.children}</div>
                </main>
                <footer className={sc('footer')}>
                    {props.buttons && props.buttons.map((button, index) =>
                        React.cloneElement(button, {key: index})
                    )}
                </footer>
            </div>
        </Fragment>
        : null
    return (
        ReactDOM.createPortal(x, document.body)
    )
}

Dialog.defaultProps = {closeOnClickMask: false}
const alert = (content: string) => {
    const onClose = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
    }
    const component = <Dialog visible={true} onClose={onClose}>我是内容</Dialog>;
    const div = document.createElement('div');
    document.body.append(div);
    ReactDOM.render(component, div);
}

const confirm = (content: string, yes?: () => void, no?: () => void) => {
    const onYes = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
        yes && yes();
    };
    const onNo = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
        no && no();
    };
    const component = (
        <Dialog
            onClose={onNo}
            visible={true}
            buttons={[<button onClick={onYes}>yes</button>, <button onClick={onNo}>no</button>]}
        >
            {content}
        </Dialog>);
    const div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(component, div);
}

const modal = (content:  ReactFragment | ReactElement) => {
    const onClose = ()=>{
        ReactDOM.render(React.cloneElement(component, {visible: false}), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
    }
    const component = (
        <Dialog
            visible={true}
            onClose={onClose}
        >
            {content}
        </Dialog>);
    const div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(component, div);
    return onClose;
}
export {alert, confirm, modal};

export default Dialog;