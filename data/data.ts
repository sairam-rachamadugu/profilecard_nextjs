import {headerLinks, socialLinks,certificationsData} from "@/types/datatypes";
import az_900 from "../public/AZ-900.png";
import az_204 from "../public/AZ-204.png";
import az_400 from "../public/AZ-400.png";
import mcd_1 from "../public/mcd-level-1.jpg"
import { url } from "inspector";
export const headerData:headerLinks[]=[
    {
        title:"About",
        path:"/",
    },
    {
        title:"Education",
        path:"/info/education",
    },
    {
        title:"Certifications",
        path:"/info/certifications",
    },
    {
        title:"Skills",
        path:"/info/skills",
    },{
        title:"Experience",
        path:"/info/experience",
    },
    
    // {
    //     title:"Projects",
    //     path:"/info/projects",
    // }
]

export const soical_links:socialLinks[]=[
    {
        title:"github",
        path:"https://github.com/sairam-rachamadugu",
    
    },
    {
        title:"telegram",
        path:"https://t.me/sairam_rachamadugu",
    
    },
    {
        title:"linkedin",
        path:"https://www.linkedin.com/in/sai-ram-rachamadugu-489a3819b",
    
    },
    {
        title:"instagram",
        path:"https://www.instagram.com/ram.rachamadugu/",
    
    },
]

export const skillsList=[
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "JQuery",
    "HTML",
    "CSS",
    "SASS",
    "ReactJS",
    "NextJS",
    "NodeJS",
    "MySQL",
    "MongoDB",
    "Git",
    "Github Actions",
    "Azure DevOPs",
    "Docker",
    "Kubernetes",
    "Azure",



]

export const certificationsList:certificationsData[]=[
    {
        title:"AZ-900",
        path:az_900,
    },
    {
        title:"AZ-204",
        path:az_204,
    },
    {
        title:"AZ-400",
        path:az_400,
    },
    
    {
        title:"MCD LEVEL - 1",
        path:  mcd_1,
    },
]