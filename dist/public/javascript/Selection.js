"use strict";
// import { fetchWordByTopic } from "../../controller/game";
// import fetch from "isomorphic-fetch";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchWordByTopic() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://random-word-api.vercel.app/api?words=10`);
            const data = yield response.json();
            if (data && data.length > 0) {
                const currentWord = data[0].toLowerCase();
                console.log("Word =", currentWord);
                // theRandomWord(currentWord, 'randomWordDisplay');
            }
            else {
                console.error('Failed to get a random word.');
            }
        }
        catch (error) {
            console.error('Error fetching word:', error);
        }
    });
}
// Example usage:
// fetchWordByTopic('food');
let currentWord = '';
function goBack(req, res) {
    try {
        res.redirect('/games');
        console.log("Made it back");
    }
    catch (_a) {
        console.log("Didn't make it back");
    }
}
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Check if DOM content is loaded
        window.localStorage.setItem('domContentLoaded', 'true');
        if (window.localStorage.getItem('domContentLoaded')) {
            // Perform actions when the DOM is loaded
            yield fetchWordByTopic();
            console.log('DOM content is loaded', fetchWordByTopic);
        }
        else {
            console.error('DOM content not loaded yet');
        }
    }
    catch (error) {
        console.error('Error:', error);
    }
}));
// Define the function to handle keydown events
// Add event listener for keydown event
// document.addEventListener("keydown", (ev) => {
//     // Call the function and pass the randomGuess value as an argument
//     handleKeyDown(ev, '<%= randomGuess %>');
// });
//  if (winCount === charArray.length) {
// 	console.log("You Win") 
//  }
