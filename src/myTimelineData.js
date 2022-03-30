export const myTimelineData = {
    timeUnitsName: "Století",
    timeUnits: ["11.", "12.", "13.", "14.", "15.", "16.", "17.", "18.", "19.", "20."],
    timeUnitWidth: 200,
    myTimelines: [
        {
            id: 0,
            name: "roky",
            rows: "1",
            timelineBoxes: [
                {
                    id: 0,
                    startingTimeUnit: "11.",     //on what timeUnit does the box start
                    startingPosition: 0.9,      //where exactly does the timeUnit starts (0-> beginning of the timeUnit, 1-> end of the timeUnit)
                    endingTimeUnit: "12.",       //on what timeUnit it ends
                    endingPosition: 0.1,          //where exactly does it end (0->beginning, 1-> end)
                    row: 0,                     //row in the timeline (beginning at 0)
                    text: "1100",
                    bgColor: "white"
                },
                {
                    id: 1,
                    startingTimeUnit: "12.",
                    startingPosition: 0.9,
                    endingTimeUnit: "13.",
                    endingPosition: 0.1,
                    row: 0,
                    text: "1200",
                    bgColor: "white"
                },
                {
                    id: 2,
                    startingTimeUnit: "13.",
                    startingPosition: 0.9,
                    endingTimeUnit: "14.",
                    endingPosition: 0.1,
                    row: 0,
                    text: "1300",
                    bgColor: "white"
                },
                {
                    id: 3,
                    startingTimeUnit: "14.",
                    startingPosition: 0.9,
                    endingTimeUnit: "15.",
                    endingPosition: 0.1,
                    row: 0,
                    text: "1400",
                    bgColor: "white"
                },
                {
                    id: 4,
                    startingTimeUnit: "15.",
                    startingPosition: 0.9,
                    endingTimeUnit: "16.",
                    endingPosition: 0.1,
                    row: 0,
                    text: "1500",
                    bgColor: "white"
                },
                {
                    id: 5,
                    startingTimeUnit: "16.",
                    startingPosition: 0.9,
                    endingTimeUnit: "17.",
                    endingPosition: 0.1,
                    row: 0,
                    text: "1600",
                    bgColor: "white"
                },
                {
                    id: 6,
                    startingTimeUnit: "17.",
                    startingPosition: 0.9,
                    endingTimeUnit: "18.",
                    endingPosition: 0.1,
                    row: 0,
                    text: "1700",
                    bgColor: "white"
                },
                {
                    id: 7,
                    startingTimeUnit: "18.",
                    startingPosition: 0.9,
                    endingTimeUnit: "19.",
                    endingPosition: 0.1,
                    row: 0,
                    text: "1800",
                    bgColor: "white"
                },
                {
                    id: 8,
                    startingTimeUnit: "19.",
                    startingPosition: 0.9,
                    endingTimeUnit: "20.",
                    endingPosition: 0.1,
                    row: 0,
                    text: "1900",
                    bgColor: "white"
                },
            ]
        },
        {
            id: 1,
            name: "umělecké slohy",
            rows: "2",
            timelineBoxes: [
                {
                    id: 0,
                    startingTimeUnit: "12.",
                    startingPosition: 2 / 3,
                    endingTimeUnit: "15.",
                    endingPosition: 1,
                    row: 1,
                    text: "gotika",
                    bgColor: "#c5d5c5"
                },
                {
                    id: 1,
                    startingTimeUnit: "14.",
                    startingPosition: 0,
                    endingTimeUnit: "16.",
                    endingPosition: 1,
                    row: 0,
                    text: "renesance",
                    bgColor: "#e3e0cc"
                },
                {
                    id: 2,
                    startingTimeUnit: "16.",
                    startingPosition: 1 / 3,
                    endingTimeUnit: "17.",
                    endingPosition: 3 / 4,
                    row: 1,
                    text: "manýrismus",
                    bgColor: "#e4d1d1"
                },
                {
                    id: 3,
                    startingTimeUnit: "17.",
                    startingPosition: 0,
                    endingTimeUnit: "18.",
                    endingPosition: 1,
                    row: 0,
                    text: "baroko",
                    bgColor: "#e0e2e4"
                },
                {
                    id: 4,
                    startingTimeUnit: "11.",
                    startingPosition: 0,
                    endingTimeUnit: "13.",
                    endingPosition: 1 / 3,
                    row: 0,
                    text: "románský sloh",
                    bgColor: "#e0e2e4"
                },
            ]
        },
        {
            id: 2,
            name: "Významné evropské události",
            rows: "2",
            timelineBoxes: [
                {
                    id: 0,
                    startingTimeUnit: "14.",
                    startingPosition: 37 / 100,
                    endingTimeUnit: "15.",
                    endingPosition: 53 / 100,
                    row: 0,
                    text: "Stoletá válka",
                    bgColor: "#FFF0F5"
                },
                {
                    id: 1,
                    startingTimeUnit: "17.",
                    startingPosition: 18 / 100,
                    endingTimeUnit: "17.",
                    endingPosition: 48 / 100,
                    row: 0,
                    text: "Třicetiletá válka",
                    bgColor: "#e3e0cc"
                },
                {
                    id: 2,
                    startingTimeUnit: "11.",
                    startingPosition: 95 / 100,
                    endingTimeUnit: "13.",
                    endingPosition: 70 / 100,
                    row: 0,
                    text: "křížové výpravy",
                    bgColor: "#e4d1d1"
                },
            ]
        },
        {
            id: 3,
            name: "panovníci",
            rows: "2",
            timelineBoxes: [
                {
                    id: 0,
                    startingTimeUnit: "14.",
                    startingPosition: 46/100,
                    endingTimeUnit: "14.",
                    endingPosition: 78/100,
                    row: 0,
                    text: "Karel IV.",
                    bgColor: "#c5d5c5"
                },
                {
                    id: 1,
                    startingTimeUnit: "17.",
                    startingPosition: 43/100,
                    endingTimeUnit: "18.",
                    endingPosition: 15/100,
                    row: 1,
                    text: "Ludvík XIV.",
                    bgColor: "#e3e0cc"
                },
                {
                    id: 2,
                    startingTimeUnit: "19.",
                    startingPosition: 48 / 100,
                    endingTimeUnit: "20.",
                    endingPosition: 16 /100,
                    row: 0,
                    text: "Franc Josef I.",
                    bgColor: "#e4d1d1"
                },
                {
                    id: 3,
                    startingTimeUnit: "19.",
                    startingPosition: 37/100,
                    endingTimeUnit: "20.",
                    endingPosition: 1/100,
                    row: 1,
                    text: "Viktorie",
                    bgColor: "#e0e2e4"
                },
                {
                    id: 4,
                    startingTimeUnit: "15.",
                    startingPosition: 58/100,
                    endingTimeUnit: "15.",
                    endingPosition: 71/100,
                    row: 0,
                    text: "Jiří z Poděbrad",
                    bgColor: "#FAFAD2"
                },
                {
                    id: 5,
                    startingTimeUnit: "18.",
                    startingPosition: 40/100,
                    endingTimeUnit: "18.",
                    endingPosition: 80/100,
                    row: 0,
                    text: "Marie Terezie",
                    bgColor: "#c5d5c5"
                },
                {
                    id: 6,
                    startingTimeUnit: "16.",
                    startingPosition: 76/100,
                    endingTimeUnit: "17.",
                    endingPosition: 11/100,
                    row: 0,
                    text: "Rudolf II",
                    bgColor: "#e0e2e4"
                },
            ]
        },
        {
            id: 4,
            name: "dynastie na českém trůnu",
            rows: "1",
            timelineBoxes: [
                {
                    id: 0,
                    startingTimeUnit: "11.",
                    startingPosition: 0,
                    endingTimeUnit: "14.",
                    endingPosition: 6/100,
                    row: 0,
                    text: "Přemyslovci",
                    bgColor: "#c5d5c5"
                },
                {
                    id: 1,
                    startingTimeUnit: "14.",
                    startingPosition: 10/100,
                    endingTimeUnit: "15.",
                    endingPosition: 37/100,
                    row: 0,
                    text: "Lucemburkové",
                    bgColor: "#e3e0cc"
                },
                {
                    id: 2,
                    startingTimeUnit: "15.",
                    startingPosition: 71/100,
                    endingTimeUnit: "16.",
                    endingPosition: 26/100,
                    row: 0,
                    text: "Jagellonci",
                    bgColor: "#e0e2e4"
                },
                {
                    id: 3,
                    startingTimeUnit: "16.",
                    startingPosition: 26 / 100,
                    endingTimeUnit: "20.",
                    endingPosition: 18 /100,
                    row: 0,
                    text: "Habsburkové",
                    bgColor: "#e4d1d1"
                },
            ]
        },
    ]

}
