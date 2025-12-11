"use strict";
const musicAudio = new Audio();
const foodAudio = new Audio();
const randomAudio = new Audio();
const travelsAudio = new Audio();
function playHomeText(text) {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    speechSynthesis.speak(utterance);
}
document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById('music');
    const food = document.getElementById('food');
    const any = document.getElementById('randomness');
    const travel = document.getElementById('places');

            playHomeText("Press any key to continue");

    
    if (music) {
        music.addEventListener("mouseenter", () => {
            // Start playback when user hovers over the element
            musicAudio.src = '../audio/Music-R.mp3';
            musicAudio.play();
            console.log('playing easy');
            setTimeout(() => {
                musicAudio.pause();
                musicAudio.currentTime = 0;
                console.log('stopped playback');
            }, 1200);
        });
        music.addEventListener("mouseleave", () => {
            // Pause or stop playback when user moves away from the element
            musicAudio.pause();
            // Optionally, reset the playback to the beginning
            musicAudio.currentTime = 0;
        });
    }
    if (food) {
        food.addEventListener("mouseenter", () => {
            // Start playback when user hovers over the element
            foodAudio.src = '../audio/Food-r.mp3';
            foodAudio.play();
            console.log('playing easy');
            setTimeout(() => {
                foodAudio.pause();
                foodAudio.currentTime = 0;
                console.log('stopped playback');
            }, 1200);
        });
        food.addEventListener("mouseleave", () => {
            // Pause or stop playback when user moves away from the element
            foodAudio.pause();
            // Optionally, reset the playback to the beginning
            foodAudio.currentTime = 0;
        });
    }
    if (any) {
        any.addEventListener("mouseenter", () => {
            // Start playback when user hovers over the element
            randomAudio.src = '../audio/Any-r.mp3';
            randomAudio.play();
            console.log('playing easy');
            setTimeout(() => {
                randomAudio.pause();
                randomAudio.currentTime = 0;
                console.log('stopped playback');
            }, 1200);
        });
        any.addEventListener("mouseleave", () => {
            // Pause or stop playback when user moves away from the element
            randomAudio.pause();
            // Optionally, reset the playback to the beginning
            randomAudio.currentTime = 0;
        });
    }
    if (travel) {
        travel.addEventListener("mouseenter", () => {
            // Start playback when user hovers over the element
            travelsAudio.src = '../audio/Places.mp3';
            travelsAudio.play();
            console.log('playing easy');
            setTimeout(() => {
                travelsAudio.pause();
                travelsAudio.currentTime = 0;
                console.log('stopped playback');
            }, 1200);
        });
        travel.addEventListener("mouseleave", () => {
            // Pause or stop playback when user moves away from the element
            travelsAudio.pause();
            // Optionally, reset the playback to the beginning
            travelsAudio.currentTime = 0;
        });
    }

    document.body.addEventListener('keydown', (ev) => {
        if (ev.key) {
            playHomeText("Select the topic you want the word to be about.");
        }
    });
});
