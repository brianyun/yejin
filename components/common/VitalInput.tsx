import React from 'react'
import s from "$/common/VitalInput.module.scss"

const VitalInput = ({ title, unit}) => {
    return (
        <div className={s.container}>
            <div className={s.question_div}>
                <p className={s.vital_question}>
                    {title}
                </p>
            </div>
            <input className={s.vital_input} type="text" />
            <p className={s.vital_unit}>{unit}</p>
        </div>
    )
}

export default VitalInput
