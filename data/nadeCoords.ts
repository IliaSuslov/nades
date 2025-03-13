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
    'anubis': {
        spawns: [
            { coords: [9, 48], icon: '/images/t.png' },
            { coords: [78, 43], icon: '/images/ct.png' }
        ],
        nades: [
            {
                id: 1,
                coords: { lineUps: [6, 53], cloud: [52, 51] },
                description: '[Mid] окно [Jump + Throw]',
                side: 't',
                type: 'smoke',
                videoUrl: 'https://youtu.be/MRZ4u2YoMhQ?t=2'
            },
            {
                id: 2,
                coords: { lineUps: [24, 67], cloud: [40, 42] },
                description: '[B] connector [Jump + Throw]',
                side: 't',
                type: 'smoke',
                videoUrl: 'https://youtu.be/FWJFU3SAYGY'
            },
            {
                id: 3,
                coords: { lineUps: [32, 29], cloud: [53, 30] },
                description: '[B] CT [Throw]',
                side: 't',
                type: 'smoke',
                videoUrl: 'https://youtu.be/SWlsYC_bAlo?t=228'
            },
            {
                id: 4,
                coords: { lineUps: [29, 31], cloud: [58, 35] },
                description: '[B] Temple [Throw]',
                side: 't',
                type: 'smoke',
                videoUrl: 'https://youtu.be/SWlsYC_bAlo?t=256'
            },
            {
                id: 5,
                coords: { lineUps: [32, 29], cloud: [44, 33.5] },
                description: '[B] за колонну перед коном [Jump + Throw]',
                side: 't',
                type: 'fire',
                videoUrl: ''
            },
            {
                id: 6,
                coords: { lineUps: [36, 48], cloud: [47.5, 56.5] },
                description: '[Mid] двери [Throw]',
                side: 't',
                type: 'fire',
                videoUrl: 'https://youtu.be/SWlsYC_bAlo?t=49'
            },
            {
                id: 7,
                coords: { lineUps: [49, 75], cloud: [68, 68] },
                description: '[A] 8 [Throw]',
                side: 't',
                type: 'fire',
                videoUrl: 'https://youtu.be/H7pblhmqWHs?t=25'
            },
            {
                id: 8,
                coords: { lineUps: [49.5, 73], cloud: [79, 72] },
                description: '[A] 9 [Jump + Throw]',
                side: 't',
                type: 'smoke',
                videoUrl: 'https://youtu.be/YppqNLtB1Lw?t=47'
            },
            {
                id: 9,
                coords: { lineUps: [49, 75], cloud: [62, 63] },
                description: '[A] Камера [Throw]',
                side: 't',
                type: 'smoke',
                videoUrl: 'https://youtu.be/YppqNLtB1Lw?t=57'
            },
            {
                id: 10,
                coords: { lineUps: [18, 34], cloud: [47, 26] },
                description: '[B] люрк смок на выход [Jump + Throw]',
                side: 't',
                type: 'smoke',
                videoUrl: 'https://youtu.be/SWlsYC_bAlo?t=140'
            },
            {
                id: 11,
                coords: { lineUps: [80, 41], cloud: [37, 67] },
                description: 'Занятие воды [Jump + Throw]',
                side: 'ct',
                type: 'smoke',
                videoUrl: 'https://youtu.be/SWlsYC_bAlo?t=784'
            },
            {
                id: 12,
                coords: { lineUps: [80, 41], cloud: [47, 79] },
                description: 'Занятие воды [Ctrl + Jump + Throw]',
                side: 'ct',
                type: 'smoke',
                videoUrl: 'https://youtu.be/SWlsYC_bAlo?t=784'
            },
            {
                id: 13,
                coords: { lineUps: [68, 29], cloud: [28, 35] },
                description: '[B] на занятие мейна [Ctrl + Jump + Throw]',
                side: 'ct',
                type: 'smoke',
                videoUrl: 'https://youtu.be/SWlsYC_bAlo?t=652'
            },
            {
                id: 14,
                coords: { lineUps: [40, 58], cloud: [40, 39] },
                description: '[A] на заход в кон [Throw]',
                side: 'ct',
                type: 'flash',
                videoUrl: 'https://youtu.be/SWlsYC_bAlo?t=482'
            },
            {
                id: 15,
                coords: { lineUps: [34.5, 28], cloud: [49, 36] },
                description: '[A] rain [Throw]',
                side: 't',
                type: 'smoke',
                videoUrl: 'https://youtu.be/LRNkovDPEgw?t=346'
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
                coords: { lineUps: [66.5, 35.5], cloud: [47, 50] },
                side: 't',
                type: "fire",
                description: "[A] за трансформатор",
                videoUrl: "https://youtu.be/W7Qtk8x3S24?t=249",
            },
            {
                id: 2,
                coords: { lineUps: [28, 30], cloud: [22.5, 60] },
                side: 't',
                type: "fire",
                description: "[B] за собаку и саммит",
                videoUrl: "https://youtu.be/Y8PSFoUXNgE?t=318",
            },
            {
                id: 3,
                coords: { lineUps: [86, 35.5], cloud: [34, 72] },
                side: 't',
                type: "smoke",
                description: "[B] коннектор на раш",
                videoUrl: "https://youtu.be/W7Qtk8x3S24?t=334",
            },
            {
                id: 4,
                coords: { lineUps: [46, 37], cloud: [36, 72] },
                side: 't',
                type: "smoke",
                description: "[B] коннектор из хаты",
                videoUrl: "https://youtu.be/W7Qtk8x3S24?t=389",
            },
            {
                id: 5,
                coords: { lineUps: [10, 37], cloud: [10, 47] },
                side: 't',
                type: "smoke",
                description: "[B] верхний на выход (oneway?)",
                videoUrl: "https://youtu.be/Y8PSFoUXNgE?t=388",
            },
            {
                id: 6,
                coords: { lineUps: [85.5, 21], cloud: [42, 62.5] },
                side: 't',
                type: "smoke",
                description: "[A] коннектор",
                videoUrl: "https://youtu.be/Y8PSFoUXNgE?t=105",
            },
            {
                id: 7,
                coords: { lineUps: [85.5, 11.5], cloud: [58.5, 61] },
                side: 't',
                type: "smoke",
                description: "[A] между вагонами",
                videoUrl: "https://youtu.be/Y8PSFoUXNgE?t=35",
            },
            {
                id: 8,
                coords: { lineUps: [25, 97], cloud: [61, 40] },
                side: 'ct',
                type: "smoke",
                description: "[A] main с кт спавна",
                videoUrl: "https://youtu.be/Y8PSFoUXNgE?t=411",
            },
            {
                id: 9,
                coords: { lineUps: [86, 21], cloud: [54, 74] },
                side: 't',
                type: "smoke",
                description: "[A] зелень",
                videoUrl: "https://youtu.be/bJRZk9XTUHA?t=47",
            },
            {
                id: 10,
                coords: { lineUps: [24, 30], cloud: [30, 72] },
                side: 't',
                type: "smoke",
                description: "[B] кон",
                videoUrl: "https://youtu.be/bJRZk9XTUHA?t=294",
            },
            {
                id: 11,
                coords: { lineUps: [81, 35], cloud: [64, 49] },
                side: 't',
                type: "flash",
                description: "[B] кон",
                videoUrl: "https://youtu.be/bJRZk9XTUHA?t=294",
            },
            {
                id: 12,
                coords: { lineUps: [89, 43], cloud: [66, 44] },
                side: 't',
                type: "flash",
                description: "[B] кон",
                videoUrl: "https://youtu.be/bJRZk9XTUHA?t=294",
            },
        ]
    },
    'dust_2': {
        spawns: [
            { coords: [10, 40], icon: '/images/t.png' },
            { coords: [80, 61], icon: '/images/ct.png' }
        ],
        nades: [
            {
                id: 1,
                coords: { lineUps: [58, 48], cloud: [75, 52] },
                side: 't',
                type: "smoke",
                description: "[Mid] 2 [B] (good)",
                videoUrl: "https://youtu.be/yp1DcWtv1M8?t=507",
            },
            {
                id: 2,
                coords: { lineUps: [14, 46], cloud: [64, 46] },
                side: 't',
                type: "smoke",
                description: "[Mid] двери",
                videoUrl: "https://youtu.be/yp1DcWtv1M8?t=245",
            },
            {
                id: 3,
                coords: { lineUps: [14, 48], cloud: [64, 44] },
                side: 't',
                type: "smoke",
                description: "[Mid] двери (фишечный)",
                videoUrl: "https://youtu.be/yp1DcWtv1M8?t=336",
            },
            {
                id: 4,
                coords: { lineUps: [59, 63], cloud: [76, 65.5] },
                side: 't',
                type: "smoke",
                description: "[A] short smoke на выход",
                videoUrl: "https://youtu.be/yp1DcWtv1M8?t=675",
            },
            {
                id: 5,
                coords: { lineUps: [23, 44], cloud: [60, 52] },
                side: 't',
                type: "fire",
                description: "[A] Short",
                videoUrl: "https://youtu.be/yp1DcWtv1M8?t=282",
            },
            {
                id: 6,
                coords: { lineUps: [45.5, 73.5], cloud: [72, 94] },
                side: 't',
                type: "fire",
                description: "[A] Long тачка и угол",
                videoUrl: "https://youtu.be/yp1DcWtv1M8?t=1200",
            },
            {
                id: 7,
                coords: { lineUps: [63, 53], cloud: [72, 63.5] },
                side: 't',
                type: "fire",
                description: "[A] Short пидорский угол для авика",
                videoUrl: "https://youtu.be/yp1DcWtv1M8?t=1244",
            },
            {
                id: 8,
                coords: { lineUps: [53, 75], cloud: [76, 80] },
                side: 't',
                type: "smoke",
                description: "[A] Между на проход лонга",
                videoUrl: "https://youtu.be/yp1DcWtv1M8?t=853",
            },
            {
                id: 9,
                coords: { lineUps: [51, 15], cloud: [78, 25] },
                side: 't',
                type: "smoke",
                description: "[B] двери из верхней темки",
                videoUrl: "https://youtu.be/yp1DcWtv1M8?t=1060",
            },
            {
                id: 10,
                coords: { lineUps: [24, 22], cloud: [78, 27] },
                side: 't',
                type: "smoke",
                description: "[B] двери с титаника",
                videoUrl: "https://youtu.be/yp1DcWtv1M8?t=1027",
            },
            {
                id: 11,
                coords: { lineUps: [24, 22], cloud: [44, 68] },
                side: 'ct',
                type: "smoke",
                description: "[A] в банку",
                videoUrl: "https://youtu.be/yp1DcWtv1M8?t=1454",
            },
            {
                id: 12,
                coords: { lineUps: [80, 77], cloud: [60, 86] },
                side: 'ct',
                type: "smoke",
                description: "[A] long на отдачу",
                videoUrl: "https://youtu.be/yp1DcWtv1M8?t=1501",
            },
            {
                id: 13,
                coords: { lineUps: [78, 49], cloud: [50, 18] },
                side: 'ct',
                type: "smoke",
                description: "[B] темка на занятие",
                videoUrl: "https://youtu.be/W7Qtk8x3S24?t=681",
            },
            {
                id: 14,
                coords: { lineUps: [77, 51], cloud: [69, 45] },
                side: 'ct',
                type: "he",
                description: "[Mid] двери на проход",
                videoUrl: "https://youtu.be/yp1DcWtv1M8?t=1564",
            },
            {
                id: 15,
                coords: { lineUps: [79, 47], cloud: [60, 47] },
                side: 'ct',
                type: "flash",
                description: "[Mid] на отпик с шорта",
                videoUrl: "https://youtu.be/W7Qtk8x3S24?t=912",
            },
            {
                id: 16,
                coords: { lineUps: [59, 43], cloud: [60, 62] },
                side: 't',
                type: "flash",
                description: "[Mid] на отпик с шорта",
                videoUrl: "https://www.youtube.com/shorts/Z1Gem8Obizc",
            },
            {
                id: 17,
                coords: { lineUps: [84, 41], cloud: [66, 45] },
                side: 'ct',
                type: "he",
                description: "[Mid] развей смока",
                videoUrl: "https://youtu.be/W7Qtk8x3S24?t=986",
            },
            {
                id: 18,
                coords: { lineUps: [20, 63], cloud: [36, 79] },
                side: 't',
                type: "flash",
                description: "[A] long",
                videoUrl: "https://youtu.be/tO5VcHgxTiM?t=26",
            },
            {
                id: 19,
                coords: { lineUps: [74, 82], cloud: [55, 82] },
                side: 'ct',
                type: "flash",
                description: "[A] long",
                videoUrl: "https://youtu.be/RkeKrtHTXzE?t=115",
            },
            {
                id: 20,
                coords: { lineUps: [39, 26], cloud: [87, 28] },
                side: 't',
                type: "smoke",
                description: "[B] window",
                videoUrl: "https://www.youtube.com/shorts/Mw4CHKzuksk?feature=share",
            },
        ]
    }
};