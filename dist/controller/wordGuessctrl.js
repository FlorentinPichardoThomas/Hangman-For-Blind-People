"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guessTheLetterWithYourKeyboard = void 0;
const game_1 = require("./game");
let loserCount = 0;
let winCount = 0;
function guessTheLetterWithYourKeyboard() {
    document.addEventListener("keydown", (ev) => {
        const pressedKey = ev.key.toLowerCase(); // Convert pressed key to lowercase
        const randomGuess = (0, game_1.randomRetreival)();
        // Check if randomGuess is not empty or undefined
        if (randomGuess && randomGuess.includes(pressedKey)) {
            winCount++;
            console.log("wincount=", winCount);
        }
        else {
            loserCount++;
            console.log("losercount=", loserCount);
        }
    });
}
exports.guessTheLetterWithYourKeyboard = guessTheLetterWithYourKeyboard;
