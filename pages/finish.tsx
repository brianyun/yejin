import React from 'react'
import s from '$/finish.module.scss'
import { useRouter } from "next/router"
import { useSelector } from "react-redux"

export default function Finish() {
    const { name } = useSelector(state => state.user);
    const router = useRouter();

  return (
    <div className={s.container}>
        <img className={s.logo} src={require("@/logo.jpg")} alt="yonsei" />
        <p className={s.finish_text}>곧 <span>{ name !== "" ? `${name}님의 ` : ""}</span>예진이 시작됩니다.<br />조금만 기다려 주시면 감사하겠습니다.</p>
        <button className={s.finish_button} onClick={() => router.push("/")}>처음으로</button>
        <p className={`${s.author_text} ${s.author_top}`}>본 사이트는 실제로 작동하는 사이트가 아니며,<br />본과 3학년 실습 15조 DMH 수업 과제입니다.<br /><br/></p>
    </div>
  )
}
