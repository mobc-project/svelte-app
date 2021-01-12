
// interface menu
export interface IMenu {
    title: string
    desc?: string
    icon?: string
    linkTo: string
}

// main menu
export const main: Array<IMenu> = [
    {
        title: "Home",
        desc: "Homepage",
        icon: "mdi-home",
        linkTo: "/",
    },
    {
        title: "Über",
        desc: "Über uns",
        icon: "mdi-factory",
        linkTo: "/about",
    },
    {
        title: "Info",
        desc: "Information",
        icon: "mdi-information",
        linkTo: "/info",
    },
]