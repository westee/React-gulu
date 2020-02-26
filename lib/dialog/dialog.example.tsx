import React, {useState} from "react";
import Dialog, {alert, confirm, modal} from "./dialog";

export default function () {
    const [x, setX] = useState(false);
    const [y, setY] = useState(false);
    const openModal = ()=>{
        const close = modal((<h1>爱你哟 <button onClick={()=>close()}>close</button></h1>))
    }

    return (
        <div>
            <div>
                <button onClick={() => {
                    setX(!x)
                }}>click
                </button>
                <Dialog visible={x} buttons={
                    [
                        <button onClick={() => {
                            setX(false)
                        }}>1</button>,
                        <button onClick={() => {
                            setX(false)
                        }}>1</button>
                    ]
                } onClose={() => {
                    setX(false)
                }} closeOnClickMask={true}>
                    <strong>nihao</strong>
                </Dialog>
            </div>

            <div>
                <button onClick={() => {
                    setX(!y)
                }}>click
                </button>
                <Dialog visible={y} buttons={
                    [
                        <button onClick={() => {
                            setY(false)
                        }}>1</button>,
                        <button onClick={() => {
                            setY(false)
                        }}>1</button>
                    ]
                } onClose={() => {
                    setY(false)
                }} closeOnClickMask={true}>
                    <strong>nihao</strong>
                </Dialog>
            </div>
            <div onClick={() => alert('1')}>alert</div>
            <div onClick={() => confirm('2', () => {
                console.log('yes')
            }, () => {
                console.log('no')
            })}>confirm
            </div>
            <div onClick={openModal}>modal</div>
        </div>

    )
}