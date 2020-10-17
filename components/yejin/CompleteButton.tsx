import React from 'react'
import s from "$/yejin/CompleteButton.module.scss"
import { useRouter} from "next/router"

const CompleteButton = () => {
    
    const router = useRouter();

    return (
        <div className={s.container}>
            <button className={s.complete_button} onClick={() => { router.push("/finish")}}>작성 완료</button>
        </div>
    )
}

export default CompleteButton
