import React from 'react'
import s from "$/yejin/Internal.module.scss"
import InternalSelect from "components/common/InternalSelect"
import { useSelector } from "react-redux"

const Internal = () => {
    const { name } = useSelector(state => state.user);

    return (
        <div className={s.container}>
            <p className={s.internal_text}><span>{ name !== "" ? `${name}님이 ` : ""}</span>과거에 앓았던 질병에 대해 여쭤보겠습니다.</p>
            <p className={s.internal_subtext}>모르는 항목은 '의료진 상담요청' 체크</p>
            <InternalSelect title="결핵" question="을 앓은 적 있으신가요?"/>
            <InternalSelect title="고혈압" question="을 앓은 적 있으신가요?"/>
            <InternalSelect title="당뇨" question="을 앓은 적 있으신가요?"/>
            <InternalSelect title="간염" question="을 앓은 적 있으신가요?"/>
            <InternalSelect title="갑상선 질환" question="을 앓은 적 있으신가요?"/>
            <InternalSelect title="암" question="을 앓은 적 있으신가요?"/>

            <div className={s.divider}></div>
        </div>
    )
}

export default Internal
