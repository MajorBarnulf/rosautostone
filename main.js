#!/usr/bin/node

async function wait(ms) {
    return new Promise(res => {
        setTimeout(() => {
            res();
        }, ms);
    });
}

function rand_within(min, max) {
    const span = max - min;
    return (Math.random() * span) + min;
}

const robot = require("robotjs");

var { width, height } = robot.getScreenSize();
width = width / 3;
const TOP_MARGIN = 200;
const SIDE_MARGIN = 500;
const BOTTOM_MARGIN = 200;

console.debug({ width, height });

main();
async function main() {
    while (true) {
        await wait(rand_within(1000, 2000));
        const x = rand_within(width + SIDE_MARGIN, (width * 2) - SIDE_MARGIN);
        const y = rand_within(TOP_MARGIN, height - BOTTOM_MARGIN);
        console.debug({ x, y });
        robot.moveMouse(x, y);
        robot.mouseClick();
    }
}
