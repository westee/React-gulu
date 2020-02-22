import React, {Fragment, ReactChild, ReactFragment, ReactPortal} from 'react';
import './dialog.scss'
import Icon from 'lib/icon/icon';

interface Props {
    visible: boolean;
    children: ReactChild | ReactFragment | ReactPortal;
}

function scopedClassName(preName: string) {
    return function f1(name?: string) {
        return [preName, name].filter(Boolean).join('-');
    }
}

const scopedClass = scopedClassName('chg-dialog');
const sc = scopedClass;

const Dialog: React.FunctionComponent<Props> = (props) => {
    return (
        props.visible ?
            <Fragment>
                <div className={sc('mask')}/>
                <div className={sc()}>
                    <div className={sc('close')}>
                        <Icon iconName={'close'} />
                    </div>
                    <header className={sc('header')}>
                        提示
                    </header>
                    <main className={sc('main')}>
                        <div>{props.children}</div>
                    </main>
                    <footer className={sc('footer')}>
                        <button>ok</button>
                        <button>cancel</button>
                    </footer>
                </div>
            </Fragment>
            : null
    )
}

export default Dialog;