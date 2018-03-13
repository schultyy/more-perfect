"use strict";

const COLORS = [
    "#9C27B0",
    "#7C4DFF",
    "#FF5722"
];

function sampleColor() {
    const colorIndex = getRandomInt(COLORS.length);
    return COLORS[colorIndex];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function renderQuestion(question) {
    const questionElement = $(`<div>${question}</div>`);
    $(questionElement).addClass('question');
    $(".body").append(questionElement);
}

$(document).ready(function() {
    fetch("/js/questions.json")
    .then((response) => response.json())
    .then((questions) => {
        const index = getRandomInt(questions.length);
        const questionOfTheDay = questions[index];
        $('body').css('background-color', sampleColor());
        renderQuestion(questionOfTheDay);
    });
});
