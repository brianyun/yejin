import React from 'react'
import s from "$/yejin/History.module.scss"
import InternalSelect from "components/common/InternalSelect"

const History = () => {
    return (
        <div className={s.container}>
            <p className={s.history_text}>과거 질환, 수술에 대해 여쭤보겠습니다.</p>
            <p className={s.history_subtext}>모르는 항목은 '의료진 상담요청' 체크</p>
            <InternalSelect name="수술" question="을 받은 적 있으신가요?"/>
            <InternalSelect name="입원" question="한 적 있으신가요?"/>
            <InternalSelect name="다른 질병" question="으로 아파 본 적 있으신가요?"/>            
            <div className={s.divider}></div>
        </div>
    )
}

export default History
