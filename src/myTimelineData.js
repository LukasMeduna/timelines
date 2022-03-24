export const timeUnitsName = "Století";

export const timeUnits = ["11.","12.","13.","14.","15.","16.","17.","18.","19.","20."];

export const myTimeline = {
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
}

export const timeUnitWidth = 30;