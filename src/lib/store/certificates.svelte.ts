import { base } from "$app/paths";

interface Certificate {
    name: string;
    rank: string | null;
    image: string;
    link?: string;
    date: Date;
}

export const certificatesState = $state<Certificate[]>([
    {
        name: "#StandWithUkraine. Stop Disinformation",
        rank: "Winner [#1]",
        image: `${base}/certificates/png/disinformation2023.png`,
        date: new Date("2023-02-07"),
        link: "https://youtu.be/vAMuJ9MZFo0"
    },
    {
        name: "Cybercup - Dnipro - Aerospace",
        rank: null,
        image: `${base}/certificates/png/cybercup2023.png`,
        date: new Date("2023-11-24")
    },
    {
        name: "NASA - Galactic Problem Solver",
        rank: "Non-prize",
        image: `${base}/certificates/png/nasa_space_apps_galactic2024.png`,
        date: new Date("2024-10-06"),
        link: "https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/cs-21-1"
    },
    {
        name: "European Cyber Race Learn-a Thon",
        rank: null,
        image: `${base}/certificates/png/thron2024.png`,
        date: new Date("2024-12-01"),
    },
    {
        name: "European Cyber Race Learn-a Thon",
        rank: "Winner [#1]",
        image: `${base}/certificates/png/vsp2025.png`,
        date: new Date("2024-12-01"),
    }
]);