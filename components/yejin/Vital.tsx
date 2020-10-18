import React from 'react'
import s from "$/yejin/Vital.module.scss"
import VitalInput from "components/common/VitalInput"
import { useSelector } from "react-redux"

const Vital = () => {
    const { name } = useSelector(state => state.user);

    return (
        <div className={s.container}>
            <p className={s.vital_text}><span>{ name !== "" ? `${name}님의 ` : ""}</span>기본 정보에 대해 여쭤보겠습니다.</p>
            <p className={s.vital_subtext}>모르는 항목은 비워두세요</p>
            <VitalInput title="신장" unit="cm" />
            <VitalInput title="체중" unit="kg"/>
            <VitalInput title="수축기 혈압" unit="mmHg"/>
            <VitalInput title="이완기 혈압" unit="mmHg"/>
            <VitalInput title="체온" unit="°C"/>
            <VitalInput title="맥박" unit="/분" />
            <VitalInput title="호흡수" unit="/분" />
            
            <div className={s.divider}></div>
        </div>
    )
}

export default Vital
