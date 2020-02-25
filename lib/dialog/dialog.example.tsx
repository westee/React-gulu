import React, {useState} from "react";
import Dialog from "./dialog";

export default function () {
    const [x, setX] = useState(false);
    const [y, setY] = useState(false);

    return (
        <div>
            <div>
                <button onClick={()=>{setX(!x)}}>click</button>
                <Dialog visible={x} buttons={
                    [
                        <button onClick={()=>{setX(false)}}>1</button>,
                        <button onClick={()=>{setX(false)}}>1</button>
                    ]
                } onClose={()=>{setX(false)}} closeOnClickMask={true}>
                    <strong>nihao</strong>
                </Dialog>
            </div>

            <div>
                <button onClick={()=>{setX(!y)}}>click</button>
                <Dialog visible={y} buttons={
                    [
                        <button onClick={()=>{setY(false)}}>1</button>,
                        <button onClick={()=>{setY(false)}}>1</button>
                    ]
                } onClose={()=>{setY(false)}} closeOnClickMask={true}>
                    <strong>nihao</strong>
                </Dialog>
            </div>
        </div>

    )
}