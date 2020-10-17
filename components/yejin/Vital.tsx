import React from 'react'
import s from "$/yejin/Vital.module.scss"
import VitalInput from "components/common/VitalInput"

const Vital = () => {
    return (
        <div className={s.container}>
            <p className={s.vital_text}>기본 정보에 대해 여쭤보겠습니다.</p>
            <p className={s.vital_subtext}>모르는 항목은 비워두세요</p>
            <VitalInput name="신장" unit="cm" />
            <VitalInput name="체중" unit="kg"/>
            <VitalInput name="수축기 혈압" unit="mmHg"/>
            <VitalInput name="이완기 혈압" unit="mmHg"/>
            <VitalInput name="체온" unit="°C"/>
            <VitalInput name="맥박" unit="/분" />
            <VitalInput name="호흡수" unit="/분" />
            
            <div className={s.divider}></div>
        </div>
    )
}

export default Vital
