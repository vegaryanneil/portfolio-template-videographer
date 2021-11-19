import athlete from './img/athlete-small.png'
import goodtimes from './img/goodtimes-small.png';
import theracer from './img/theracer-small.png';
import athlete2 from './img/athlete2.png';
import goodtimes2 from './img/good-times2.jpg';
import theracer2 from './img/the-racer2.jpg'

export const MovieState =() => {
    return [
        {
            title: "The Athlete",
            mainImg: athlete,
            secondaryImg: athlete2,
            url: "/work/the-athlete",
            awards: [
                {
                    title: "Truly a masterpiece",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, expedita!"
                },
                {
                    title: "Truly a masterpiece",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, expedita!"
                },
                {
                    title: "Truly a masterpiece",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, expedita!"
                },
            ]
        },
        {
            title: "The Racer",
            mainImg: theracer,
            secondaryImg: theracer2,
            url: "/work/the-racer",
            awards: [
                {
                    title: "Truly a masterpiece",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, expedita!"
                },
                {
                    title: "Truly a masterpiece",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, expedita!"
                },
                {
                    title: "Truly a masterpiece",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, expedita!"
                },
            ]
        },
        {
            title: "The Good Times",
            mainImg: goodtimes,
            secondaryImg: goodtimes2,
            url: "/work/the-goodtimes",
            awards: [
                {
                    title: "Truly a masterpiece",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, expedita!"
                },
                {
                    title: "Truly a masterpiece",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, expedita!"
                },
                {
                    title: "Truly a masterpiece",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, expedita!"
                },
            ]
        }
    ]
}