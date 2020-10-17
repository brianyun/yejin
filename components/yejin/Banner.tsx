import React from 'react'
import s from "$/yejin/Banner.module.scss"
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import IconButton from "@material-ui/core/IconButton";
import { useRouter } from "next/router"

const Banner = () => {

    const router = useRouter();

    return (
        <div className={s.container}>
            
            <div className={s.text_container}>
                <p className={s.banner_text}>응답 내용은 의료정보로서 보호받으며,<br />진료 목적 이외에 사용되지 않습니다.</p>
            </div>

            <IconButton className={s.home_icon_container}>
				<HelpOutlineOutlinedIcon className={s.home_icon} fontSize="large" />
            </IconButton>
        </div>
    )
}

export default Banner
