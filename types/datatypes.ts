import { StaticImageData } from "next/image"
import { SocialIconProps } from "react-social-icons"

export type headerLinks={
    title:string,
    path:string,
}
export enum EIcons {
    telegram,
    vkontakte,
    github,
    gitlab,
    pikabu,
    linkedin,
    typescript,
    javascript,
    reactjs,
    redux,
    nextjs,
    nodejs,
    yarn,
    npm,
    webpack,
    vuejs,
    jquery,
    html,
    css,
    php,
    postgresql,
    mysql,
    sqlite,
    python,
    laravel,
    yii,
    codeigniter,
    git,
    playwright,
    jest,
    rtl,
    eslint,
    prettier,
    docker,
    eye,
    repost,
    comment,
    like,
    left,
    right,
    facebook,
    instagram
}

export interface ISvgIcon {
    name: EIcons
}
export type socialLinks={
    title:string,
    path:string,   
}

export type certificationsData={
    title:string,
    path:StaticImageData,

}