import Head from 'next/head'
import styles from '$/index.module.scss'
import { useRouter } from "next/router"

export default function Home() {

  const router = useRouter();

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={require("@/logo.jpg")} alt="yonsei" />
      <p className={styles.welcome_text}>세브란스 병원에<br />오신 것을 환영합니다.</p>
      <button className={styles.welcome_button} onClick={() => router.push("/user")}>예진 시작하기</button>
      
      <p className={`${styles.author_text} ${styles.author_top}`}>본 사이트는 실제로 작동하는 사이트가 아니며,<br />본과 3학년 실습 15조 DMH 수업 과제입니다.<br /><br/></p>
      <p className={styles.author_text}>의학과 3학년<br/>김기송 | 김윤혁 | 김재윤<br />오지현 | 윤희상 | 이동수</p>
    </div>
  )
}
