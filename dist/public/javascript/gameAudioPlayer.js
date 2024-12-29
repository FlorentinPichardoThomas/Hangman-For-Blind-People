"use strict";
function playGameText(text) {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    // speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
}
function playKeyGameText(text) {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
}
function playGameString(str) {
    const sentences = str.split('.').filter(sentence => sentence.trim().length > 0); // Split string into sentences and filter out empty ones
    sentences.forEach((sentence, index) => {
        setTimeout(() => {
            playGameText(sentence.trim() + '.'); // Play each sentence with a period at the end
        }, index * 1000); // Adjust delay between sentences as needed
    });
}
let winCount = 0;
let loseCount = 0;
function playGameTextWithNumber(text, number) {
    playGameText(text + number);
}
