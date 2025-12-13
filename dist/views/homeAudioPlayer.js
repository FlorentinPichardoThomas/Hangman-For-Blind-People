"use strict";

// ---------- SPEECH FUNCTION ----------
function speak(text) {
    speechSynthesis.cancel(); // Prevent overlapping
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = 1;
    utter.pitch = 1;
    speechSynthesis.speak(utter);
    return utter;
}

// ---------- AUDIO OBJECTS ----------
const musicAudio = new Audio();
const foodAudio = new Audio();
const randomAudio = new Audio();
const travelsAudio = new Audio();

// Preload audio (instant playback later)
musicAudio.src = "/audio/Music-R.mp3";
foodAudio.src = "/audio/Food-r.mp3";
randomAudio.src = "/audio/Any-r.mp3";
travelsAudio.src = "/audio/Places.mp3";

musicAudio.load();
foodAudio.load();
randomAudio.load();
travelsAudio.load();

// ---------- HOVER SOUND FUNCTION ----------
function attachHoverSound(elementId, audioObj) {
    const el = document.getElementById(elementId);
    if (!el) return;

    el.addEventListener("mouseenter", () => {
        audioObj.currentTime = 0;
        audioObj.play();

        setTimeout(() => {
            audioObj.pause();
            audioObj.currentTime = 0;
        }, 1200);
    });

    el.addEventListener("mouseleave", () => {
        audioObj.pause();
        audioObj.currentTime = 0;
    });
}

// ---------- MAIN INITIALIZATION ----------
document.addEventListener("DOMContentLoaded", () => {
    // Attach hover sounds
    attachHoverSound("music", musicAudio);
    attachHoverSound("food", foodAudio);
    attachHoverSound("randomness", randomAudio);
    attachHoverSound("places", travelsAudio);

    // Speak automatically on page load (works without interaction)
    speak("Press any key to continue.");

    // Wait for first key press to unlock audio
    document.body.addEventListener("keydown", function onKeyPress(ev) {
        if (ev.key) {
            // speak instructions
            speak("Select the topic you want the word to be about.");

            // Unlock audio programmatically (plays 1 ms then stops)
            // This marks audio as 'user interacted' in browser policy
            [musicAudio, foodAudio, randomAudio, travelsAudio].forEach(a => {
                a.play().then(() => {
                    a.pause();
                    a.currentTime = 0;
                }).catch(() => {});
            });

            // Remove this event listener after running once
            document.body.removeEventListener("keydown", onKeyPress);
        }
    });
});
