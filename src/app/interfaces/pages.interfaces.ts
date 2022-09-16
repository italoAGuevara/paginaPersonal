export interface ContactItem{
    title : string
    icon: string
    url : string
}

/**
 * eventos o sucesos de mi vida profesional
 */
export interface Events{
    status: string
    date: string
    icon: string
    rout : string
    skills: string[]
}


/**
 * proyectos realizados
 */
export interface Proyect{
    title : string
    subTitle : string
    info : string
    img : string
}


/**
 * tecnologias y/o habilidades
 */
 export interface Skill{
    id: string
    img: string
    more: string
 }
