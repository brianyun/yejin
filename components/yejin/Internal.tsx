import React from 'react'
import s from "$/yejin/Internal.module.scss"
import InternalSelect from "components/common/InternalSelect"

const Internal = () => {
    return (
        <div className={s.container}>
            <p className={s.internal_text}>과거에 앓았던 질병에 대해 여쭤보겠습니다.</p>
            <p className={s.internal_subtext}>모르는 항목은 '의료진 상담요청' 체크</p>
            <InternalSelect name="결핵" question="을 앓은 적 있으신가요?"/>
            <InternalSelect name="고혈압" question="을 앓은 적 있으신가요?"/>
            <InternalSelect name="당뇨" question="을 앓은 적 있으신가요?"/>
            <InternalSelect name="간염" question="을 앓은 적 있으신가요?"/>
            <InternalSelect name="갑상선 질환" question="을 앓은 적 있으신가요?"/>
            <InternalSelect name="암" question="을 앓은 적 있으신가요?"/>

            <div className={s.divider}></div>
        </div>
    )
}

export default Internal
