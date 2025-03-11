import { MapData } from "./types";

export const nades: Record<string, MapData> = {
    'ancient': {
        spawns: [
            { coords: [13, 48], icon: '/images/t.png' },
            { coords: [88, 50.5], icon: '/images/ct.png' }
        ],
        nades: [
            {
                id: 1,
                coords: { lineUps: [18, 46], cloud: [63, 47.5] },
                description: '[Mid] окно [Jump + Throw]',
                side: 't',
                type: 'smoke',
                videoUrl: 'https://www.youtube.com/shorts/bggzpzv7els?t=1&feature=share'
            },
            {
                id: 2,
                coords: { lineUps: [43, 20], cloud: [68, 31] },
                description: '[A] пончик [Jump + Throw]',
                side: 't',
                type: 'smoke',
                videoUrl: 'https://www.youtube.com/shorts/BAjleuDfpaA?t=3&feature=share'
            },
            {
                id: 3,
                coords: { lineUps: [43, 20], cloud: [78, 36] },
                description: '[A] CT [Jump + Throw]',
                side: 't',
                type: 'smoke',
                videoUrl: 'https://www.youtube.com/shorts/BAjleuDfpaA?t=5&feature=share'
            },
            {
                id: 4,
                coords: { lineUps: [29, 81], cloud: [65, 71] },
                description: '[B] темная [Jump + Throw]',
                side: 't',
                type: 'smoke',
                videoUrl: 'https://www.youtube.com/shorts/0PWrlcahXvU?t=5&feature=share'
            },
            {
                id: 5,
                coords: { lineUps: [29, 81], cloud: [65, 82] },
                description: '[B] светлая [Jump + Throw]',
                side: 't',
                type: 'smoke',
                videoUrl: 'https://www.youtube.com/shorts/0PWrlcahXvU?t=2&feature=share'
            },
            {
                id: 14,
                coords: { lineUps: [29, 81], cloud: [61, 70] },
                description: '[B] мясо [Jump + Throw]',
                side: 't',
                type: 'smoke',
                videoUrl: 'https://www.youtube.com/shorts/0PWrlcahXvU?t=8&feature=share'
            },
            {
                id: 6,
                coords: { lineUps: [90, 50.5], cloud: [42, 37] },
                description: '[Mid] insta [Jump + Throw]',
                side: 'ct',
                type: 'smoke',
                videoUrl: 'https://youtu.be/4J1WyshBPSk?t=20'
            },
            {
                id: 7,
                coords: { lineUps: [43, 20], cloud: [80, 25] },
                description: '[A] temple [Jump + Throw]',
                side: 't',
                type: 'smoke',
                videoUrl: 'https://www.youtube.com/shorts/BAjleuDfpaA?t=7&feature=share'
            },
            {
                id: 8,
                coords: { lineUps: [68, 83], cloud: [39, 78] },
                description: '[B] двери',
                side: 'ct',
                type: 'smoke',
                videoUrl: 'https://youtu.be/W7Qtk8x3S24?t=1632'
            },
            {
                id: 9,
                coords: { lineUps: [58, 22], cloud: [66, 22] },
                side: "t",
                type: "fire",
                description: "[A] подсадка на дереве",
                videoUrl: "https://youtu.be/W7Qtk8x3S24?t=1570"
            },
            {
                id: 10,
                coords: { lineUps: [15, 53], cloud: [43, 53] },
                side: "t",
                type: "fire",
                description: "[Mid] на 9 с респа",
                videoUrl: "https://youtu.be/W7Qtk8x3S24?t=1471"
            },
            {
                id: 11,
                coords: { lineUps: [58, 22], cloud: [66, 16] },
                side: "t",
                type: "flash",
                description: "[A] выход",
                videoUrl: "https://youtu.be/W7Qtk8x3S24?t=1542"
            },
            {
                id: 12,
                coords: { lineUps: [39, 78], cloud: [52, 66] },
                side: "t",
                type: "fire",
                description: "[B] мясо",
                videoUrl: "https://youtu.be/W7Qtk8x3S24?t=1683"
            },
            {
                id: 13,
                coords: { lineUps: [13, 51], cloud: [43, 61] },
                side: "t",
                type: "smoke",
                description: "[B] мясо / 9",
                videoUrl: "https://youtu.be/W7Qtk8x3S24?t=1742"
            },
        ]
    },
    'inferno': {
        spawns: [
            { coords: [34, 21], icon: '/images/t.png' },
            { coords: [63, 77.5], icon: '/images/ct.png' }
        ],
        nades: [
            {
                id: 1,
                coords: { lineUps: [54, 48], cloud: [75, 58] },
                description: '[B] CT [Throw]',
                side: 't',
                type: 'smoke',
                videoUrl: 'https://youtu.be/txNcCWZf1Zo?t=6'
            },
            {
                id: 2,
                coords: { lineUps: [54, 48], cloud: [83, 50] },
                description: '[B] Гробы [Throw]',
                side: 't',
                type: 'smoke',
                videoUrl: 'https://youtu.be/txNcCWZf1Zo?t=10'
            },
            {
                id: 3,
                coords: { lineUps: [62, 50], cloud: [71, 49] },
                description: '[B] 1 + 2 [Throw]',
                side: 't',
                type: 'fire',
                videoUrl: 'https://www.youtube.com/shorts/zNIMDSFb7XY'
            },
            {
                id: 4,
                coords: { lineUps: [62, 50], cloud: [72, 43] },
                description: '[B] 3 [Throw]',
                type: 'fire',
                side: 't',
                videoUrl: 'https://www.youtube.com/shorts/9R4QPvqm8PI'
            }
        ]
    },
    'mirage': {
        spawns: [
            { coords: [65, 88], icon: '/images/t.png' },
            { coords: [30, 30], icon: '/images/ct.png' }
        ],
        nades: [
            {
                id: 1,
                coords: { lineUps: [79, 16], cloud: [81.5, 24] },
                side: "ct",
                type: "flash",
                description: "[B] отпик апсов с тачки",
                videoUrl: "https://youtu.be/W7Qtk8x3S24?t=1342"
            },
            {
                id: 2,
                coords: { lineUps: [49, 38], cloud: [55, 42] },
                side: "ct",
                type: "he",
                description: "[Mid] развей окна",
                videoUrl: "https://youtu.be/gKraMezbFnE?t=852"
            },
            {
                id: 3,
                coords: { lineUps: [22, 45], cloud: [37, 69] },
                side: "ct",
                type: "smoke",
                description: "[A] яма",
                videoUrl: "https://youtu.be/gKraMezbFnE?t=751"
            },
            {
                id: 4,
                coords: { lineUps: [18, 45], cloud: [23, 64] },
                side: "ct",
                type: "smoke",
                description: "[A] ковры с тикета",
                videoUrl: "https://youtu.be/gKraMezbFnE?t=755"
            },
            {
                id: 5,
                coords: { lineUps: [65, 16], cloud: [81.5, 34] },
                side: "ct",
                type: "smoke",
                description: "[B] дом",
                videoUrl: "https://youtu.be/gKraMezbFnE?t=767"
            },
            {
                id: 6,
                coords: { lineUps: [81.5, 34], cloud: [68, 22.5] },
                side: "t",
                type: "fire",
                description: "[B] моли бексайт",
                videoUrl: "https://youtu.be/W7Qtk8x3S24?t=1376"
            },
            {
                id: 7,
                coords: { lineUps: [22, 45], cloud: [35, 72] },
                side: "ct",
                type: "fire",
                description: "[A] моли в яму(хороший)",
                videoUrl: "https://youtu.be/gKraMezbFnE?t=817"
            },
            {
                id: 8,
                coords: { lineUps: [68, 91], cloud: [50, 50] },
                side: "t",
                type: "smoke",
                description: "[Mid] кон с респа",
                videoUrl: "https://youtu.be/gKraMezbFnE?t=213"
            },
            {
                id: 9,
                coords: { lineUps: [68, 91], cloud: [59, 63] },
                side: "t",
                type: "smoke",
                description: "[Mid] Старт(с мусорки)",
                videoUrl: "https://youtu.be/gKraMezbFnE?t=166"
            },
            {
                id: 10,
                coords: { lineUps: [59, 91], cloud: [57, 62] },
                side: "t",
                type: "smoke",
                description: "[Mid] Старт(с угла)",
                videoUrl: "https://youtu.be/gKraMezbFnE?t=169"
            },
            {
                id: 11,
                coords: { lineUps: [84, 60], cloud: [61, 25] },
                side: "t",
                type: "smoke",
                description: "кухня",
                videoUrl: "https://youtu.be/gKraMezbFnE?t=308"
            },
            {
                id: 12,
                coords: { lineUps: [84, 60], cloud: [70.5, 41] },
                side: "t",
                type: "smoke",
                description: "зиг",
                videoUrl: "https://youtu.be/gKraMezbFnE?t=311"
            },
            {
                id: 13,
                coords: { lineUps: [47, 85], cloud: [21, 44] },
                side: "t",
                type: "smoke",
                description: "[A] ct",
                videoUrl: "https://youtu.be/gKraMezbFnE?t=393"
            },
            {
                id: 14,
                coords: { lineUps: [36, 79], cloud: [36, 50] },
                side: "t",
                type: "smoke",
                description: "[A] между",
                videoUrl: "https://youtu.be/gKraMezbFnE?t=364"
            },
            {
                id: 15,
                coords: { lineUps: [47, 87], cloud: [43, 50] },
                side: "t",
                type: "smoke",
                description: "[A] топ кон",
                videoUrl: "https://youtu.be/gKraMezbFnE?t=417"
            },
        ]
    },
    'train': {
        spawns: [
            { coords: [83, 13], icon: '/images/t.png' },
            { coords: [20, 90], icon: '/images/ct.png' }
        ],
        nades: [
            {
                id: 1,
                coords: { lineUps: [79, 16], cloud: [81.5, 24] },
                side: "ct",
                type: "flash",
                description: "[B] отпик апсов с тачки",
                videoUrl: "https://youtu.be/W7Qtk8x3S24?t=1342"
            },
            
        ]
    }
};