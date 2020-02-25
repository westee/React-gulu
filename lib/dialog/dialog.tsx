import React, {Fragment, ReactChild, ReactElement, ReactFragment, ReactPortal} from 'react';
import './dialog.scss'
import Icon from 'lib/icon/icon';
import ReactDOM from 'react-dom';

interface Props {
    visible: boolean;
    children: ReactChild | ReactFragment | ReactPortal;
    buttons: Array<ReactElement>;
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
    const onClickMask: React.MouseEventHandler = e=>{
        if(props.closeOnClickMask){
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
                    {props.buttons.map((button, index) =>
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

Dialog.defaultProps =
    {closeOnClickMask: false}

export default Dialog;