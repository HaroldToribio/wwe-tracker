// WWE Tracker - Titles Data
// This file contains data about WWE titles, including their names, current holders, and history.

export const titles = [
    {
        id: 1,
        name: "WWE Championship",
        currentHolder: "Cody Rhodes",
        history: [
            { holder: "John Cena", reigns: 14, reignStart: "2025-04-19", reignEnd: "2025-08-03" },
            { holder: "Roman Reigns", reigns: 1, reignStart: "2021-04-11", reignEnd: "2024-04-07" },
            { holder: "Brock Lesnar", reigns: 3, reignStart: "2024-04-07", reignEnd: "2025-04-19" },
            { holder: "Seth Rollins", reigns: 2, reignStart: "2025-04-19", reignEnd: "2025-08-03" },
            { holder: "Drew McIntyre", reigns: 2, reignStart: "2025-08-03", reignEnd: "2025-12-01" },
            { holder: "Cody Rhodes", reigns: 3, reignStart: "2025-12-01", reignEnd: null },
            
        ],
    },
    {
        id: 2,
        name: "WWE Universal Championship",
        currentHolder: "No current champion (retired title)",
        history: [
            { holder: "Roman Reigns", reigns: 5, reignStart: "2020-08-30", reignEnd: "2024-04-07" },
            { holder: "Brock Lesnar", reigns: 2, reignStart: "2024-04-07", reignEnd: "2025-04-19" },
            { holder: "Seth Rollins", reigns: 1, reignStart: "2025-04-19", reignEnd: "2025-08-03" },
            { holder: "Drew McIntyre", reigns: 1, reignStart: "2025-08-03", reignEnd: "2025-12-01" },
        ],
    },
    {
        id: 3,
        name: "WWE Intercontinental Championship",
        currentHolder: "Penta",
        history: [
            { holder: "Gunther", reigns: 1, reignStart: "2020-08-30", reignEnd: "2021-04-11" },
            { holder: "Shinsuke Nakamura", reigns: 2, reignStart: "2021-04-11", reignEnd: "2022-04-09" },
            { holder: "Sami Zayn", reigns: 1, reignStart: "2022-04-09", reignEnd: "2023-04-08" },
            { holder: "Ricochet", reigns: 1, reignStart: "2023-04-08", reignEnd: "2024-04-07" },
            { holder: "Penta", reigns: 1, reignStart: "2024-04-07", reignEnd: "2025-04-19" },
            { holder: "Dominik Mysterio", reigns: 2, reignStart: "2025-04-19", reignEnd: "2025-12-01" },
        ],
    },
    {
        id: 4,
        name: "WWE United States Championship",
        currentHolder: "Sami Zayn",
        reignsSince: 2026,
        history: [
            { holder: "Carmelo Hayes", reigns: 1, reignStart: "2020-08-30", reignEnd: "2021-04-11" },
            { holder: "Sami Zayn", reigns: 1, reignStart: "2021-04-11", reignEnd: "2022-04-09" },
            { holder: "Ilja Dragunov", reigns: 1, reignStart: "2022-04-09", reignEnd: "2023-04-08" },
            { holder: "Austin Theory", reigns: 2, reignStart: "2023-04-08", reignEnd: "2024-04-07" },
            { holder: "Seth Rollins", reigns: 1, reignStart: "2024-04-07", reignEnd: "2025-04-19" },
            { holder: "Drew McIntyre", reigns: 1, reignStart: "2025-04-19", reignEnd: "2025-12-01" },
        ],
    },
    {
        id: 5,
        name: "WWE World Heavyweight Championship",
        currentHolder: "CM Punk",
        reignsSince: 2025,
        history: [
            { holder: "CM Punk", reigns: 2, reignStart: "2020-08-30", reignEnd: "2021-04-11" },
            { holder: "Seth Rollins", reigns: 1, reignStart: "2021-04-11", reignEnd: "2022-04-09" },
            { holder: "Drew McIntyre", reigns: 1, reignStart: "2022-04-09", reignEnd: "2023-04-08" },
            { holder: "Gunther", reigns: 2, reignStart: "2023-04-08", reignEnd: "2024-04-07" },
            { holder: "Jey Uso", reigns: 1, reignStart: "2024-04-07", reignEnd: "2025-04-19" },
        ],
    },
];