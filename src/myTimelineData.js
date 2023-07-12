export const myTimelineData = {
    timeUnitsName: "Století",
    timeUnits: [
        { id: 0, name: "11." },
        { id: 1, name: "12." },
        { id: 2, name: "13." },
        { id: 3, name: "14." },
        { id: 4, name: "15." },
        { id: 5, name: "16." },
        { id: 6, name: "17." },
        { id: 7, name: "18." },
        { id: 8, name: "19." },
        { id: 9, name: "20." }],
    timeUnitWidth: 200,
    timelines: [
        {
            id: 0,
            name: "roky",
            rows: "1",
            timelineBoxes: [
                {
                    id: 0,
                    startingTimeUnit: 0,     //on what timeUnit does the box start
                    startingPosition: 0.9,      //where exactly does the timeUnit starts (0-> beginning of the timeUnit, 1-> end of the timeUnit)
                    endingTimeUnit: 1,       //on what timeUnit it ends
                    endingPosition: 0.1,          //where exactly does it end (0->beginning, 1-> end)
                    row: 0,                     //row in the timeline (beginning at 0)
                    text: "1100",
                    bgColor: "white"
                },
                {
                    id: 1,
                    startingTimeUnit: 1,
                    startingPosition: 0.9,
                    endingTimeUnit: 2,
                    endingPosition: 0.1,
                    row: 0,
                    text: "1200",
                    bgColor: "white"
                },
                {
                    id: 2,
                    startingTimeUnit:2,
                    startingPosition: 0.9,
                    endingTimeUnit:3,
                    endingPosition: 0.1,
                    row: 0,
                    text: "1300",
                    bgColor: "white"
                },
                {
                    id: 3,
                    startingTimeUnit:3,
                    startingPosition: 0.9,
                    endingTimeUnit:4,
                    endingPosition: 0.1,
                    row: 0,
                    text: "1400",
                    bgColor: "white"
                },
                {
                    id: 4,
                    startingTimeUnit:4,
                    startingPosition: 0.9,
                    endingTimeUnit:5,
                    endingPosition: 0.1,
                    row: 0,
                    text: "1500",
                    bgColor: "white"
                },
                {
                    id: 5,
                    startingTimeUnit:5,
                    startingPosition: 0.9,
                    endingTimeUnit:6,
                    endingPosition: 0.1,
                    row: 0,
                    text: "1600",
                    bgColor: "white"
                },
                {
                    id: 6,
                    startingTimeUnit:6,
                    startingPosition: 0.9,
                    endingTimeUnit:7,
                    endingPosition: 0.1,
                    row: 0,
                    text: "1700",
                    bgColor: "white"
                },
                {
                    id: 7,
                    startingTimeUnit:7,
                    startingPosition: 0.9,
                    endingTimeUnit:8,
                    endingPosition: 0.1,
                    row: 0,
                    text: "1800",
                    bgColor: "white"
                },
                {
                    id: 8,
                    startingTimeUnit:8,
                    startingPosition: 0.9,
                    endingTimeUnit:9,
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
                    startingTimeUnit:1,
                    startingPosition: 2 / 3,
                    endingTimeUnit:4,
                    endingPosition: 1,
                    row: 1,
                    text: "gotika",
                    bgColor: "#c5d5c5"
                },
                {
                    id: 1,
                    startingTimeUnit:3,
                    startingPosition: 0,
                    endingTimeUnit:5,
                    endingPosition: 1,
                    row: 0,
                    text: "renesance",
                    bgColor: "#e3e0cc"
                },
                {
                    id: 2,
                    startingTimeUnit:5,
                    startingPosition: 1 / 3,
                    endingTimeUnit:6,
                    endingPosition: 3 / 4,
                    row: 1,
                    text: "manýrismus",
                    bgColor: "#e4d1d1"
                },
                {
                    id: 3,
                    startingTimeUnit:6,
                    startingPosition: 0,
                    endingTimeUnit:7,
                    endingPosition: 1,
                    row: 0,
                    text: "baroko",
                    bgColor: "#e0e2e4"
                },
                {
                    id: 4,
                    startingTimeUnit: 0,
                    startingPosition: 0,
                    endingTimeUnit:2,
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
                    startingTimeUnit:3,
                    startingPosition: 37 / 100,
                    endingTimeUnit:4,
                    endingPosition: 53 / 100,
                    row: 0,
                    text: "Stoletá válka",
                    bgColor: "#FFF0F5"
                },
                {
                    id: 1,
                    startingTimeUnit:6,
                    startingPosition: 18 / 100,
                    endingTimeUnit:6,
                    endingPosition: 48 / 100,
                    row: 0,
                    text: "Třicetiletá válka",
                    bgColor: "#e3e0cc"
                },
                {
                    id: 2,
                    startingTimeUnit: 0,
                    startingPosition: 95 / 100,
                    endingTimeUnit:2,
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
                    startingTimeUnit:3,
                    startingPosition: 46/100,
                    endingTimeUnit:3,
                    endingPosition: 78/100,
                    row: 0,
                    text: "Karel IV.",
                    bgColor: "#c5d5c5"
                },
                {
                    id: 1,
                    startingTimeUnit:6,
                    startingPosition: 43/100,
                    endingTimeUnit:7,
                    endingPosition: 15/100,
                    row: 1,
                    text: "Ludvík XIV.",
                    bgColor: "#e3e0cc"
                },
                {
                    id: 2,
                    startingTimeUnit:8,
                    startingPosition: 48 / 100,
                    endingTimeUnit:9,
                    endingPosition: 16 /100,
                    row: 0,
                    text: "Franc Josef I.",
                    bgColor: "#e4d1d1"
                },
                {
                    id: 3,
                    startingTimeUnit:8,
                    startingPosition: 37/100,
                    endingTimeUnit:9,
                    endingPosition: 1/100,
                    row: 1,
                    text: "Viktorie",
                    bgColor: "#e0e2e4"
                },
                {
                    id: 4,
                    startingTimeUnit:4,
                    startingPosition: 58/100,
                    endingTimeUnit:4,
                    endingPosition: 71/100,
                    row: 0,
                    text: "Jiří z Poděbrad",
                    bgColor: "#FAFAD2"
                },
                {
                    id: 5,
                    startingTimeUnit:7,
                    startingPosition: 40/100,
                    endingTimeUnit:7,
                    endingPosition: 80/100,
                    row: 0,
                    text: "Marie Terezie",
                    bgColor: "#c5d5c5"
                },
                {
                    id: 6,
                    startingTimeUnit:5,
                    startingPosition: 76/100,
                    endingTimeUnit:6,
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
                    startingTimeUnit: 0,
                    startingPosition: 0,
                    endingTimeUnit:3,
                    endingPosition: 6/100,
                    row: 0,
                    text: "Přemyslovci",
                    bgColor: "#c5d5c5"
                },
                {
                    id: 1,
                    startingTimeUnit:3,
                    startingPosition: 10/100,
                    endingTimeUnit:4,
                    endingPosition: 37/100,
                    row: 0,
                    text: "Lucemburkové",
                    bgColor: "#e3e0cc"
                },
                {
                    id: 2,
                    startingTimeUnit:4,
                    startingPosition: 71/100,
                    endingTimeUnit:5,
                    endingPosition: 26/100,
                    row: 0,
                    text: "Jagellonci",
                    bgColor: "#e0e2e4"
                },
                {
                    id: 3,
                    startingTimeUnit:5,
                    startingPosition: 26 / 100,
                    endingTimeUnit:9,
                    endingPosition: 18 /100,
                    row: 0,
                    text: "Habsburkové",
                    bgColor: "#e4d1d1"
                },
            ]
        },
    ]

}
