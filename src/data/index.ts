import { genTechsForProj } from "@/components/Projects";


export const passionsItems = [
    {
        id: 1,
        title: "Techs",
        description: "Next.js, Python, SQL, Java",
        image: "",
        itemClassName: "col-span-2 row-span-1"
    },
    {
        id: 2,
        title: "Sports & water",
        description: "Surf, Swimming, Gym, Lifeguard",
        image: "",
        itemClassName: "col-span-1 row-span-2"
    },
    {
        id: 3,
        title: "Economie and Finance",
        description: "Understanding the mechanisms of the world's society",
        image: "",
        itemClassName: "col-span-2 row-span-1"
    }
]

export const projectItems = [
    {
        id: 0,
        title: "PolyHash",
        description: "A google 2015 HashCode solution develloped trough/with raw python with my teammate \n Deep understanding of the data structure and fondamental algorithms mainly about graph exploration",
        techs: genTechsForProj(["Python",], ["",]),
        itemClassName: ""
    },

    {
        id: 1,
        title: "Portfolio",
        description: "A web project to learn web developpement in optic to build web app for companies",
        techs: genTechsForProj(["Next.js", "React", "Tailwind"], ["",]),
        itemClassName: ""
    },

    {
        id: 2,
        title: "PolyHash",
        description: "A google 2015 HashCode solution develloped trough/with raw python with my teammate \n Deep understanding of the data structure and fondamental algorithms mainly about graph exploration",
        techs: genTechsForProj(["Python",], ["",]),
        itemClassName: ""
    },
]