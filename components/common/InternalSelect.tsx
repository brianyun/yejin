import React, { useRef } from 'react'
import s from "$/common/InternalSelect.module.scss"

const InputField = ({ name, question }) => {

    const ref = useRef(null);

    const clicked = (ans) => {
        const yesBtn = ref.current.getElementsByClassName(`${s.yes}`);
        const noBtn = ref.current.getElementsByClassName(`${s.no}`);
        const helpBtn = ref.current.getElementsByClassName(`${s.help}`);
    
        if (ans === "yes") {
            noBtn[0].classList.remove(`${s.selected}`);
            helpBtn[0].classList.remove(`${s.selected}`);
            yesBtn[0].classList.add(`${s.selected}`);
        } else if (ans === "no") {
            yesBtn[0].classList.remove(`${s.selected}`);
            helpBtn[0].classList.remove(`${s.selected}`);
            noBtn[0].classList.add(`${s.selected}`);
        } else {
            yesBtn[0].classList.remove(`${s.selected}`);
            noBtn[0].classList.remove(`${s.selected}`);
            helpBtn[0].classList.add(`${s.selected}`);
        }
    };
    
    return (
        <div className={s.container} ref={ref}>
            <p className={s.name}>과거에 <span className={s.name_highlight}>{name}</span>{question}</p>
            
            <div className={s.select_container}>
                <button className={`${s.select} ${s.yes}`} onClick={() => {clicked("yes")}}>예</button>
                <button className={`${s.select} ${s.no}`} onClick={() => {clicked("no")}}>아니오</button>
                <button className={`${s.select} ${s.help}`} onClick={() => {clicked("help")}}>의료진<br />상담요청</button>
            </div>
        </div>
    )
}

export default InputField
