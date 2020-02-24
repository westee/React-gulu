import React, {useState} from "react";
import Dialog from "./dialog";

export default function () {
    const [x, setX] = useState(false);

    return (
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
    )
}