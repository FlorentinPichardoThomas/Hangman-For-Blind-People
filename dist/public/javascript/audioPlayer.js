"use strict";
// const easy = new Audio()
// easy.src ='../audio/Easy-R.mp3'
// document.addEventListener('mouseenter', function(){
//     easy.play()
// })
//Word Guesses
// const confirmationsA = yourguessingA.split('')
// const confirmationsB = yourguessingB.split('')
// const confirmationsC = yourguessingC.split('')
// const confirmationsD = yourguessingD.split('')
// const confirmationsE = yourguessingE.split('')
// const confirmationsF = yourguessingF.split('')
// const confirmationsG = yourguessingG.split('')
// const confirmationsH = yourguessingH.split('')
// const confirmationsI = yourguessingI.split('')
// const confirmationsJ = yourguessingJ.split('')
// const confirmationsK = yourguessingK.split('')
// const confirmationsL = yourguessingL.split('')
// const confirmationsM = yourguessingM.split('')
// const confirmationsN = yourguessingN.split('')
// const confirmationsO = yourguessingO.split('')
// const confirmationsP = yourguessingP.split('')
// const confirmationsQ = yourguessingQ.split('')
// const confirmationsR = yourguessingR.split('')
// const confirmationsS = yourguessingS.split('')
// const confirmationsT = yourguessingT.split('')
// const confirmationsU = yourguessingU.split('')
// const confirmationsV = yourguessingV.split('')
// const confirmationsW = yourguessingW.split('')
// const confirmationsX = yourguessingX.split('')
// const confirmationsY = yourguessingY.split('')
// const confirmationsZ = yourguessingZ.split('')
//The Rest
const welcome = 'Welcome';
const areYouSureAboutThis = 'yourguessingthat?';
// const words = welcome.split(' ');
const confirmations = areYouSureAboutThis.split('');
function playText(text) {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    speechSynthesis.speak(utterance);
}
function playString(str) {
    const sentences = str.split('.'); // Split string into sentences
    sentences.forEach((sentence) => {
        const words = sentence.split(' ');
        ; // Split sentence into words
        words.forEach(word => {
            playText(word); // Play each word
        });
        // Add a delay between sentences
        setTimeout(() => {
            playText('.'); // Add a pause between sentences
        }, 1000);
    });
}
function playString0(str) {
    const sentences = str.split('.');
    sentences.forEach((sentence) => {
        const confirmations = sentence.trim().split('');
        confirmations.forEach(confirmation => {
            playText(confirmation);
        });
    });
}
function playTextWithNumber(text, number) {
    playText(text + number);
}
const medium = new Audio();
const hard = new Audio();
const random = new Audio();
const go_Back = new Audio();
document.addEventListener("DOMContentLoaded", () => {
    const hoverElement = document.getElementById("hoverElement");
    const audioPlayer = document.getElementById("audioPlayer");
    const mediumChoice = document.getElementById('medium');
    const hardChoice = document.getElementById('hard');
    const randomChoice = document.getElementById('random');
    const returning = document.getElementById('return');
    if (hoverElement) {
        hoverElement.addEventListener("mouseenter", () => {
            // Start playback when user hovers over the element
            audioPlayer.play();
            console.log('playing easy');
            setTimeout(() => {
                audioPlayer.pause();
                audioPlayer.currentTime = 0;
                console.log('stopped playback');
            }, 1200);
        });
        hoverElement.addEventListener("mouseleave", () => {
            // Pause or stop playback when user moves away from the element
            audioPlayer.pause();
            // Optionally, reset the playback to the beginning
            audioPlayer.currentTime = 0;
        });
    }
    if (mediumChoice) {
        mediumChoice.addEventListener("mouseenter", () => {
            medium.src = '../audio/Medium-Replacement.mp3';
            medium.play();
            console.log('playing medium');
        });
        mediumChoice.addEventListener("mouseleave", () => {
            // Pause or stop playback when user moves away from the element
            medium.pause();
            // Optionally, reset the playback to the beginning
            medium.currentTime = 0;
        });
    }
    if (hardChoice) {
        hardChoice.addEventListener("mouseenter", () => {
            hard.src = "../audio/'Hard'-R.mp3";
            hard.play();
            console.log('playing hard');
            setTimeout(() => {
                audioPlayer.pause();
                audioPlayer.currentTime = 0;
                console.log('stopped playback');
            }, 500);
        });
        hardChoice.addEventListener("mouseleave", () => {
            // Pause or stop playback when user moves away from the element
            hard.pause();
            // Optionally, reset the playback to the beginning
            hard.currentTime = 0;
        });
    }
    if (randomChoice) {
        randomChoice.addEventListener("mouseenter", () => {
            random.src = "../audio/Random.mp3";
            random.play();
            console.log('playing random');
        });
        randomChoice.addEventListener("mouseleave", () => {
            // Pause or stop playback when user moves away from the element
            random.pause();
            // Optionally, reset the playback to the beginning
            random.currentTime = 0;
        });
    }
    if (returning) {
        returning.addEventListener("mouseenter", () => {
            go_Back.src = "../audio/goBack.mp3";
            go_Back.play();
            console.log('playing random');
        });
        returning.addEventListener("mouseleave", () => {
            // Pause or stop playback when user moves away from the element
            go_Back.pause();
            // Optionally, reset the playback to the beginning
            go_Back.currentTime = 0;
        });
    }
    playText('How difficult you want this word to be?');
});
