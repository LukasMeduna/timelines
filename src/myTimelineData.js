export const timeUnitsName = "Století";

export const timeUnits = ["11.","12.","13.","14.","15.","16.","17.","18.","19.","20."];

export const myTimelines = [
    {
        id:0,
        name:"roky",
        rows: "1",
        timelineBoxes: [
        {
            id:0,
            startingTimeUnit:"11.",     //on what timeUnit does the box start
            startingPosition: 0.9,      //where exactly does the timeUnit starts (0-> beginning of the timeUnit, 1-> end of the timeUnit)
            endingTimeUnit:"12.",       //on what timeUnit it ends
            endingPosition: 0.1,          //where exactly does it end (0->beginning, 1-> end)
            row: 0,                     //row in the timeline (beginning at 0)
            text: "1100",
            bgColor: "white"
        },
        {
            id:1,
            startingTimeUnit:"12.",     //on what timeUnit does the box start
            startingPosition: 0.9,      //where exactly does the timeUnit starts (0-> beginning of the timeUnit, 1-> end of the timeUnit)
            endingTimeUnit:"13.",       //on what timeUnit it ends
            endingPosition: 0.1,          //where exactly does it end (0->beginning, 1-> end)
            row: 0,                     //row in the timeline (beginning at 0)
            text: "1200",
            bgColor: "white"
        },
        {
            id:2,
            startingTimeUnit:"13.",     //on what timeUnit does the box start
            startingPosition: 0.9,      //where exactly does the timeUnit starts (0-> beginning of the timeUnit, 1-> end of the timeUnit)
            endingTimeUnit:"14.",       //on what timeUnit it ends
            endingPosition: 0.1,          //where exactly does it end (0->beginning, 1-> end)
            row: 0,                     //row in the timeline (beginning at 0)
            text: "1300",
            bgColor: "white"
        },
        {
            id:3,
            startingTimeUnit:"14.",     //on what timeUnit does the box start
            startingPosition: 0.9,      //where exactly does the timeUnit starts (0-> beginning of the timeUnit, 1-> end of the timeUnit)
            endingTimeUnit:"15.",       //on what timeUnit it ends
            endingPosition: 0.1,          //where exactly does it end (0->beginning, 1-> end)
            row: 0,                     //row in the timeline (beginning at 0)
            text: "1400",
            bgColor: "white"
        },
        {
            id:4,
            startingTimeUnit:"15.",     //on what timeUnit does the box start
            startingPosition: 0.9,      //where exactly does the timeUnit starts (0-> beginning of the timeUnit, 1-> end of the timeUnit)
            endingTimeUnit:"16.",       //on what timeUnit it ends
            endingPosition: 0.1,          //where exactly does it end (0->beginning, 1-> end)
            row: 0,                     //row in the timeline (beginning at 0)
            text: "1500",
            bgColor: "white"
        },
        {
            id:5,
            startingTimeUnit:"16.",     //on what timeUnit does the box start
            startingPosition: 0.9,      //where exactly does the timeUnit starts (0-> beginning of the timeUnit, 1-> end of the timeUnit)
            endingTimeUnit:"17.",       //on what timeUnit it ends
            endingPosition: 0.1,          //where exactly does it end (0->beginning, 1-> end)
            row: 0,                     //row in the timeline (beginning at 0)
            text: "1600",
            bgColor: "white"
        },
        {
            id:6,
            startingTimeUnit:"17.",     //on what timeUnit does the box start
            startingPosition: 0.9,      //where exactly does the timeUnit starts (0-> beginning of the timeUnit, 1-> end of the timeUnit)
            endingTimeUnit:"18.",       //on what timeUnit it ends
            endingPosition: 0.1,          //where exactly does it end (0->beginning, 1-> end)
            row: 0,                     //row in the timeline (beginning at 0)
            text: "1700",
            bgColor: "white"
        },
        {
            id:7,
            startingTimeUnit:"18.",     //on what timeUnit does the box start
            startingPosition: 0.9,      //where exactly does the timeUnit starts (0-> beginning of the timeUnit, 1-> end of the timeUnit)
            endingTimeUnit:"19.",       //on what timeUnit it ends
            endingPosition: 0.1,          //where exactly does it end (0->beginning, 1-> end)
            row: 0,                     //row in the timeline (beginning at 0)
            text: "1800",
            bgColor: "white"
        },
        {
            id:8,
            startingTimeUnit:"19.",     //on what timeUnit does the box start
            startingPosition: 0.9,      //where exactly does the timeUnit starts (0-> beginning of the timeUnit, 1-> end of the timeUnit)
            endingTimeUnit:"20.",       //on what timeUnit it ends
            endingPosition: 0.1,          //where exactly does it end (0->beginning, 1-> end)
            row: 0,                     //row in the timeline (beginning at 0)
            text: "1900",
            bgColor: "white"
        },
        ]
    },
    {
        id:1,
        name:"umělecké slohy",
        rows: "2",
        timelineBoxes: [
            {
                id:0,
                startingTimeUnit:"12.",     //on what timeUnit does the box start
                startingPosition: 2/3,      //where exactly does the timeUnit starts (0-> beginning of the timeUnit, 1-> end of the timeUnit)
                endingTimeUnit:"15.",       //on what timeUnit it ends
                endingPosition: 1,          //where exactly does it end (0->beginning, 1-> end)
                row: 0,                     //row in the timeline (beginning at 0)
                text: "gotika",
                bgColor: "#c5d5c5"
            },
            {
                id:1,
                startingTimeUnit:"14.",
                startingPosition: 0,
                endingTimeUnit:"16.",
                endingPosition: 1,
                row: 1,
                text: "renesance",
                bgColor: "#e3e0cc"
            },
            {
                id:2,
                startingTimeUnit:"16.",
                startingPosition: 1/3,
                endingTimeUnit:"17.",
                endingPosition: 3/4,
                row: 0,
                text: "manýrismus",
                bgColor: "#e4d1d1"
            },
            {
                id:3,
                startingTimeUnit:"17.",
                startingPosition: 0,
                endingTimeUnit:"18.",
                endingPosition: 1,
                row: 1,
                text: "baroko",
                bgColor: "#e0e2e4"
            }]
    },
    {
        id:2,    
        name:"umělecké slohy",
            rows: "2",
            timelineBoxes: [
                {
                    id:0,
                    startingTimeUnit:"12.",     //on what timeUnit does the box start
                    startingPosition: 2/3,      //where exactly does the timeUnit starts (0-> beginning of the timeUnit, 1-> end of the timeUnit)
                    endingTimeUnit:"15.",       //on what timeUnit it ends
                    endingPosition: 1,          //where exactly does it end (0->beginning, 1-> end)
                    row: 0,                     //row in the timeline (beginning at 0)
                    text: "gotika",
                    bgColor: "#c5d5c5"
                },
                {
                    id:1,
                    startingTimeUnit:"14.",
                    startingPosition: 0,
                    endingTimeUnit:"16.",
                    endingPosition: 1,
                    row: 1,
                    text: "renesance",
                    bgColor: "#e3e0cc"
                },
                {
                    id:2,
                    startingTimeUnit:"16.",
                    startingPosition: 1/3,
                    endingTimeUnit:"17.",
                    endingPosition: 3/4,
                    row: 0,
                    text: "manýrismus",
                    bgColor: "#e4d1d1"
                },
                {
                    id:3,
                    startingTimeUnit:"17.",
                    startingPosition: 0,
                    endingTimeUnit:"18.",
                    endingPosition: 1,
                    row: 1,
                    text: "baroko",
                    bgColor: "#e0e2e4"
                }]
    },
    {
        id:3,        
        name:"umělecké slohy",
                rows: "2",
                timelineBoxes: [
                    {
                        id:0,
                        startingTimeUnit:"12.",     //on what timeUnit does the box start
                        startingPosition: 2/3,      //where exactly does the timeUnit starts (0-> beginning of the timeUnit, 1-> end of the timeUnit)
                        endingTimeUnit:"15.",       //on what timeUnit it ends
                        endingPosition: 1,          //where exactly does it end (0->beginning, 1-> end)
                        row: 0,                     //row in the timeline (beginning at 0)
                        text: "gotika",
                        bgColor: "#c5d5c5"
                    },
                    {
                        id:1,
                        startingTimeUnit:"14.",
                        startingPosition: 0,
                        endingTimeUnit:"16.",
                        endingPosition: 1,
                        row: 1,
                        text: "renesance",
                        bgColor: "#e3e0cc"
                    },
                    {
                        id:2,
                        startingTimeUnit:"16.",
                        startingPosition: 1/3,
                        endingTimeUnit:"17.",
                        endingPosition: 3/4,
                        row: 0,
                        text: "manýrismus",
                        bgColor: "#e4d1d1"
                    },
                    {
                        id:3,
                        startingTimeUnit:"17.",
                        startingPosition: 0,
                        endingTimeUnit:"18.",
                        endingPosition: 1,
                        row: 1,
                        text: "baroko",
                        bgColor: "#e0e2e4"
                    }]
    },
]
export const timeUnitWidth = 200;