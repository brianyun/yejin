import React from 'react'
import Banner from "components/yejin/Banner";
import Vital from "components/yejin/Vital";
import Internal from "components/yejin/Internal";
import History from "components/yejin/History";
import CompleteButton from "components/yejin/CompleteButton";
import s from "$/yejin.module.scss"

const yejin = () => {
    return (
        <div className={s.container}>
            <Banner />
            <Vital />
            <Internal />
            <History />
            <CompleteButton />
        </div>
    )
}

export default yejin
