import React, { useRef, useState } from 'react'
import s from '$/user.module.scss'
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { ADD_NAME } from '../reducers/user';

const user = () => {

    const router = useRouter();
    const nameRef = useRef(null);
    const dispatch = useDispatch();

    const clickNext = () => {
        if (nameRef.current.value !== "") {
        
            dispatch({
                type: ADD_NAME,
                data: nameRef.current.value,
            });
        }   
        router.push("/yejin");
    }

    return (
        <div className={s.container}>
            <img className={s.logo} src={require("@/logo.jpg")} alt="yonsei" />
            <p className={s.user_text}>성함과 등록번호를 입력해주세요.</p>
            <div className={s.input_container}>
                <p className={s.input_text}>성함: </p>
                <input className={s.input_input} placeholder="예) 홍길동" required type="text" ref={nameRef} />
            </div>
            <div className={s.input_container}>
                <p className={s.input_text}>등록번호: </p>
                <input className={s.input_input} placeholder="예) 12345678" required type="text" />
            </div>
            <div className={s.button_container}>
                <button className={s.user_button} onClick={() => clickNext()}>다음</button>
                <button className={s.user_skip_button} onClick={() => clickNext()}>입력 건너뛰기</button>
            </div>
            <p className={`${s.author_text} ${s.author_top}`}>본 사이트는 실제로 작동하는 사이트가 아니며,<br />본과 3학년 실습 15조 DMH 수업 과제입니다.<br /><br/></p>
        </div>
    )
}

export default user
