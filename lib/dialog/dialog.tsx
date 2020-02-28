import React, {Fragment, ReactChild, ReactElement, ReactFragment, ReactNode, ReactPortal} from 'react';
import './dialog.scss'
import Icon from 'lib/icon/icon';
import ReactDOM from 'react-dom';
import scopedClassName from "../classes";

interface Props {
    visible: boolean;
    children: ReactChild | ReactFragment | ReactPortal;
    buttons?: Array<ReactElement>;
    onClose: React.MouseEventHandler;
    closeOnClickMask?: boolean;
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
    const dialogEle = props.visible ?
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
        ReactDOM.createPortal(dialogEle, document.body)
    )
}

Dialog.defaultProps = {closeOnClickMask: false}

const modal = (content: ReactNode, buttons?: Array<ReactElement>, onClose?: () => void) => {
    const close = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
    }
    const component = (
        <Dialog visible={true}
                buttons={buttons}
                onClose={() => {
                    close();
                onClose && onClose()}}>
            {content!}
        </Dialog>
    );
    const div = document.createElement('div');
    document.body.append(div);
    ReactDOM.render(component, div);
    return close;
}

const alert = (content: ReactNode) => {
    const buttons = <button onClick={() => close()}>OK</button>
    const close = modal(content, [buttons]);
}

const confirm = (content: string, yes?: () => void, no?: () => void) => {
    const onYes = () => {
        close && close();
        yes && yes();
    };
    const onNo = () => {
        close && close();
        no && no();
    };
    const buttons = [<button onClick={onYes}>yes</button>, <button onClick={onNo}>no</button>]
    const close = modal(content, buttons, no);
}

export {alert, confirm, modal};

export default Dialog;